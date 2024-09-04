import express from 'express';
import { deleteProductById, getProductData, getProductDataCat, postProductData, updateById } from '../controller/product.js';
import { postCategoriesData, updateCategoryById } from '../controller/categories.js';

import { addRating } from '../controller/ratings.js';
import { addCustomer } from '../controller/customer.js';
import { getOrdersByCustomer, placeOrder } from '../controller/order.js';


const routeProduct=express.Router();

routeProduct.post('/postProduct',postProductData)  //post for create data
routeProduct.post('/postCategory',postCategoriesData)  //post for create data
routeProduct.get("/productsGet", getProductData);   //get Data 
routeProduct.get("/productsGetCat/:categoryId", getProductDataCat);   //get Data 

routeProduct.delete("/productDelId/:id", deleteProductById);   //delete by id

routeProduct.put("/productUpdate/:id", updateById)
routeProduct.put("/catUpdate/:id", updateCategoryById)
routeProduct.post('/rating',addRating)
routeProduct.post('/customer',addCustomer)
routeProduct.post('/order',placeOrder)
routeProduct.get('/getorder/:id',getOrdersByCustomer)

export default routeProduct;