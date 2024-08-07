import productModel from "../../../Db/models/product.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

//get all products 
export const getAllProducts=async(req,res)=>{
    try{

        const product = await productModel.find();
        return res.status(201).json({message:"sucess",product})

    }catch(err){
        return res.status(500).json({message:"catch error",err})
    }
}

//get product by id
export const getProduct =async(req,res)=>{

    try{
        const {id}=req.params;

        const product =await productModel.findById({_id:id})

        return res.status(201).json({message:"success",product});
    }catch(err){
        return res.status(500).json({message:"catch error",err})  
      }
}

//getAll product by category
export const getAllProduct =async(req,res)=>{

    try{
        const {category}=req.body;

        const product =await productModel.find({category:category})

        return res.status(201).json({message:"success",product});
    }catch(err){
        return res.status(500).json({message:"catch error",err})  
      }
}

//update product by id 

export const updateProduct =async(req,res)=>{

    const {id}=req.params;
    const{description}=req.body;

    const product =  await productModel.findByIdAndUpdate({_id:id},{description:description},{new:true});
   
    return res.status(201).json({message:"success",product})

}
//delete product
export const deleteProduct =async(req,res)=>{
    const{id}=req.params;
    const product = await productModel.findOneAndDelete({_id:id});
    return res.status(201).json({message:"success",product})

}

//create product 
export const CreateProduct = async(req,res)=>{

    try{

    const {title,category,description} =req.body;
   
   const user = new productModel({title,description,category});
   await user.save();

    return res.status(200).json({message:"success",user})
   }catch(err){
        return res.status(500).json({message:"catch error",terte:err.stack})
    }
};