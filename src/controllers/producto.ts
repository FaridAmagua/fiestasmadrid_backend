import { Request,Response } from "express"
import Product from "../models/producto"

export const getProducts = async(req:Request,res:Response) => {
    const listProducts = await Product.findAll()
    res.json(listProducts)
}

export const getProduct = async (req:Request,res:Response) => {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if(product){
        res.json(product)
    }else{
        res.status(404).json({
            msg:'No product found with this id ${id}'
        })
    }    
}

export const deleteProduct = async (req:Request,res:Response) => {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if(!product){
        res.status(404).json({
            msg:'No product found with this id ${id}'
        })
    }else{
        await product.destroy()
        res.json({
            msg:'Product deleted successfully!'
        })
    }
}
export const postProduct = async (req:Request,res:Response) => {
    const {body} = req;
    try {
        await Product.create(body);
        
        res.json({
            msg:'Product created successfully'
        })   
    } catch (error) {
        // console.log(error);
        //error due to too many characters
        res.json({
            msg:'Upps an error occurred restart or reload page '
        })
    }
}
export const updateProduct = async (req:Request,res:Response) => {
    const {body} = req;
    const {id} = req.params;
    
    const product = await Product.findByPk(id);

    try {
        if(product){
            await product.update(body);
            res.json({msg:'Product updated'});
        }else{
            res.status(404).json({
                msg: 'Product not found'
            })
        }
    } catch (error) {
        res.json({
            msg:'Error updating product, contact the administrator'
        })    }
    
}