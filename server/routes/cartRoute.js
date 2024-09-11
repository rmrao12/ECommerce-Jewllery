// In cartRoute.js
import express from 'express';
import sessionMiddleware from '../middleware/sessionMiddleware.js';
import { addToCart, removeFromCart, getCart, getCartTotals } from '../controller/cart.js';

const cartRouter = express.Router();

//cartRouter.use(sessionMiddleware);

cartRouter.post('/add',sessionMiddleware, addToCart);  // POST /api/v1/cart/add
cartRouter.delete('/remove/:id',sessionMiddleware, removeFromCart);  // DELETE /api/v1/cart/remove/:productId
cartRouter.get('/getCart',sessionMiddleware, getCart);  // GET /api/v1/cart/getCart
cartRouter.get('/totals',sessionMiddleware, getCartTotals);  // GET /api/v1/cart/totals

export default cartRouter;
const getSessionId = () => {
    const sessionId = document.cookie
      .split('; ')
      .find(row => row.startsWith('sessionId='))
      ?.split('=')[1];
  
    if (!sessionId) {
      const newSessionId = 'sess_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
      document.cookie = `sessionId=${newSessionId}; max-age=9990000; path=/`;
      return newSessionId;
    }
  
    return sessionId;
  };