import express ,{Application,Request,Response} from 'express';
import db from '../db/connection'
import cors from 'cors';
import routesProducto from '../routes/producto'
import routesUsers from '../routes/user'
import Product from './producto';
import User from './user';



class Server{
    private app:express.Application;
    private port:string;

    constructor(){
        // console.log(process.env.PORT);
        this.app = express();
        this.port= process.env.PORT || '3030';
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
        this.app.use('/api/v1/products',routesProducto)
        this.app.use('/api/v1/users',routesUsers)    
    }
    midlewares(){
        //parse the body
        this.app.use(express.json());
        this.app.use(cors());
    }
    async dbConnect(){    
        try {
            await Product.sync({force: false}); 
            //force para borrar los datos , despues hay que poner un sync 
            await User.sync({force: false});
            await db.authenticate();
            console.log('Database connected');
        } catch (error) {
            console.log(error); 
            console.log('Connection error DB')
        }
    }
    
}

export default Server; 
