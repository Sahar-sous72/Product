import connectDb from "../Db/connection.js/"
import productRouter from "./modules/products/product.router.js"


const initApp=(app,express)=>{
    app.use(express.json());
    connectDb();
    app.use('/products',productRouter);

}

export default initApp;