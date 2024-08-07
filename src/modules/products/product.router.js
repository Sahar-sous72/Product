import { Router } from "express"
import * as productController from './product.controller.js'



const app= Router()
app.post('/creation',productController.CreateProduct)
app.get('/',productController.getAllProducts);
app.post('/:id',productController.getProduct);
app.post('/',productController.getAllProduct);
app.put('/:id',productController.updateProduct);
app.delete('/:id',productController.deleteProduct);



export default app;