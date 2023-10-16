import express ,{Application,Request,Response} from 'express';
import cors from 'cors';
import routesProducto from '../routes/producto'
import db from '../db/connection'



class Server{
    private app:express.Application;
    private port:string;

    constructor(){
        // console.log(process.env.PORT);
        this.app = express();
        this.port= process.env.PORT || '1212';
        this.listen();
        //important to place this function before the routes to parse the data.
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplication server running on port ${this.port}`);
        })
    }
    routes(){
        this.app.get('/',(req:Request,res:Response)=> {
            res.json({
                msg: 'api working'
            })
        })
        this.app.use('/api/productos',routesProducto)
    }
    midlewares(){
        //parse the body
        this.app.use(express.json());
        this.app.use(cors());
    }
    async dbConnect(){    
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error) {
            console.log(error); 
            console.log('Connection error DB')
        }
    }
    
}

export default Server; 
