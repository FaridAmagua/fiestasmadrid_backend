import { Request, Response } from "express";
import User from "../models/user";
import bcryp from 'bcrypt';


export const newUser =async (req:Request, res:Response)=>{
  
    const { username,password }= req.body;

    //validation in case the user already exists in the database 
    const user = await User.findOne({where:{username:username}});

    if (user){
        res.status(400).json({
            msg: 'User '+username+' already exists'
        })
    }
    
    const hashedPassword= await bcryp.hash(password,10)
    //the number parameter is for the amount of security when setting the password but it consumes more resources
    
    console.log(hashedPassword);
    try{
        //User saved in the database
        await User.create({
            username:username,
            password:hashedPassword
        });

        res.json({
            msg:'User '+username+' created successfully'
        })
    }
    catch(error){
        res.status(400).json({
            msg:"Upps error ",error
        })
    }

    }

    export const loginUser = (req:Request, res:Response) => {

        const {body} = req;
        
        res.json({
            msg:'Login user',
            body
        })
    }
    export const updateUser = async (req: Request, res: Response) => {
        try {
          const { id } = req.params; // Supongamos que estás pasando el ID del usuario a través de los parámetros de la URL.
          const { body } = req; // Supongamos que estás enviando los datos de actualización en el cuerpo de la solicitud.
      
          // Realiza la operación de actualización utilizando el modelo de usuario
          const updatedUser = await User.update(
            body, // Datos de actualización
            {
              where: { id }, // Condición para la actualización
              returning: true, // Esto es necesario para obtener el registro actualizado
            }
          );
      
          if (updatedUser[0] === 1) {
            // La actualización se realizó con éxito
            res.json({ msg: 'Usuario actualizado correctamente', updatedUser: updatedUser[1][0] });
          } else {
            // No se encontró el usuario o no se realizó la actualización
            res.status(404).json({ error: 'Usuario no encontrado' });
          }
        } catch (error) {
          // Manejo de errores
          res.status(500).json({ error: 'Error en la actualización del usuario' });
        }
      };
    

