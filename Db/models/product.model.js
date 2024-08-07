import { model, Schema } from 'mongoose';

const productSchema =new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    }
   
},{
    timestamps:true
});

const productModel =model('Product',productSchema)

export default productModel;
