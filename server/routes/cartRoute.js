// In cartRoute.js
import express from 'express';
import sessionMiddleware from '../middleware/sessionMiddleware.js';
import { addToCart, removeFromCart, getCart, getCartTotals } from '../controller/cart.js';

const cartRouter = express.Router();

cartRouter.use(sessionMiddleware);

cartRouter.post('/add', addToCart);  // POST /api/v1/cart/add
cartRouter.delete('/remove/:id', removeFromCart);  // DELETE /api/v1/cart/remove/:productId
cartRouter.get('/getCart', getCart);  // GET /api/v1/cart/getCart
cartRouter.get('/totals', getCartTotals);  // GET /api/v1/cart/totals

export default cartRouter;
