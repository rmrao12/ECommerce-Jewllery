import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    cartTotals: null,
    orders: [],
    categories: [],
    cart: [],
    status: 'idle',
    error: null,
    customer: null,
};

// GET Thunks
export const fetchProducts = createAsyncThunk('get/products', async () => {
    const response = await axios.get('http://localhost:5000/api/v1/products/productsGet');
    return response.data;
});

export const fetchProductById = createAsyncThunk('get/productById', async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/products/productsGet/${id}`);
    return response.data;
});

export const fetchCartTotals = createAsyncThunk('get/cartTotals', async () => {
    const response = await axios.get('http://localhost:5000/api/v1/cart/totals');
    return response.data;
});

export const fetchOrderById = createAsyncThunk('get/orderById', async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/products/getorder/${id}`);
    return response.data;
});

export const fetchProductsByCategory = createAsyncThunk('get/productsGetCat', async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/products/productsGetCat/${id}`);
    return response.data;
});

export const fetchCart = createAsyncThunk('get/cart', async () => {
    const response = await axios.get('http://localhost:5000/api/v1/cart/getCart', { withCredentials: true });
    return response.data;
});

// POST Thunks
export const addToCart = createAsyncThunk('post/addToCart', async (item) => {
    
    const response = await axios.post('http://localhost:5000/api/v1/cart/add', item, { withCredentials: true });
    return response.data;
});

export const addProductRating = createAsyncThunk('post/addProductRating', async (rating) => {
    const response = await axios.post('http://localhost:5000/api/v1/products/rating', rating);
    return response.data;
});

export const addCustomer = createAsyncThunk('post/addCustomer', async (customer) => {
    const response = await axios.post('http://localhost:5000/api/v1/products/customer', customer);
    return response.data;
});

export const placeOrder = createAsyncThunk('post/placeOrder', async (order) => {
    const response = await axios.post('http://localhost:5000/api/v1/products/order', order, { withCredentials: true });
    return response.data;
});

// DELETE Thunk
export const removeFromCart = createAsyncThunk('delete/removeFromCart', async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/v1/cart/remove/${id}`, { withCredentials: true });
    return response.data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handling GET requests
        builder
            .addCase(fetchProducts.pending, (state) => { state.status = 'Loading'; })
            .addCase(fetchProducts.fulfilled, (state, action) => { state.status = 'Succeeded'; state.products = action.payload; })
            .addCase(fetchProducts.rejected, (state, action) => { state.status = 'Failed'; state.error = action.error.message; })
            
            .addCase(fetchProductById.pending, (state) => { state.status = 'Loading'; })
            .addCase(fetchProductById.fulfilled, (state, action) => { state.status = 'Succeeded'; state.products = action.payload; })
            .addCase(fetchProductById.rejected, (state, action) => { state.status = 'Failed'; state.error = action.error.message; })

            .addCase(fetchCartTotals.pending, (state) => { state.status = 'Loading cart totals'; })
            .addCase(fetchCartTotals.fulfilled, (state, action) => {state.status = 'Succeeded in fetching cart totals'; state.cartTotals = action.payload; })
            .addCase(fetchCartTotals.rejected, (state, action) => { state.status = 'Failed to fetch cart totals'; state.error = action.error.message; })

            .addCase(fetchOrderById.pending, (state) => { state.status = 'Loading order'; })
            .addCase(fetchOrderById.fulfilled, (state, action) => { state.status = 'Succeeded in fetching order'; state.orders.push(action.payload); })
            .addCase(fetchOrderById.rejected, (state, action) => { state.status = 'Failed to fetch order'; state.error = action.error.message; })

            .addCase(fetchProductsByCategory.pending, (state) => { state.status = 'Loading'; })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => { state.status = 'Succeeded'; state.categories = action.payload; })
            .addCase(fetchProductsByCategory.rejected, (state, action) => { state.status = 'Failed'; state.error = action.error.message; })

            .addCase(fetchCart.pending, (state) => { state.status = 'Loading cart'; })
            .addCase(fetchCart.fulfilled, (state, action) => {
               

                state.status = 'Succeeded in fetching cart'; state.cart = action.payload;
                console.log(state.cart);
            })
            .addCase(fetchCart.rejected, (state, action) => { state.status = 'Failed to fetch cart'; state.cart = []; state.error = action.error.message; })

            // Handling POST requests
            .addCase(addToCart.pending, (state) => { state.status = 'Adding to cart'; })
            .addCase(addToCart.fulfilled, (state, action) => { state.status = 'Succeeded in adding to cart';  
                console.log(typeof(state.cart))
               
                //state.cart = action.payload.items || []; // Use the array part of the payload
                })
            .addCase(addToCart.rejected, (state, action) => { state.status = 'Failed to add to cart'; state.error = action.error.message; })            

            .addCase(addProductRating.pending, (state) => { state.status = 'Adding product rating'; })
            .addCase(addProductRating.fulfilled, (state, action) => { state.status = 'Succeeded in adding product rating'; })
            .addCase(addProductRating.rejected, (state, action) => { state.status = 'Failed to add product rating'; state.error = action.error.message; })

            .addCase(addCustomer.pending, (state) => { state.status = 'Adding customer'; })
            .addCase(addCustomer.fulfilled, (state, action) => { state.status = 'Succeeded in adding customer';  state.customer = action.payload.customer; })
            .addCase(addCustomer.rejected, (state, action) => { state.status = 'Failed to add customer'; state.error = action.error.message; })

            .addCase(placeOrder.pending, (state) => { state.status = 'Placing order'; })
            .addCase(placeOrder.fulfilled, (state, action) => { state.status = 'Succeeded in placing order'; state.orders.push(action.payload); })
            .addCase(placeOrder.rejected, (state, action) => { state.status = 'Failed to place order'; state.error = action.error.message; })

            // Handling DELETE requests
            .addCase(removeFromCart.pending, (state) => { state.status = 'Removing from cart'; })
            .addCase(removeFromCart.fulfilled, (state, action) => { state.status = 'Succeeded in removing from cart'; 
                //state.cart = state.cart.filter(item => item.id !== action.payload.id); 
                })
            .addCase(removeFromCart.rejected, (state, action) => { state.status = 'Failed to remove from cart'; state.error = action.error.message; });
    },
});

export default dataSlice.reducer;
