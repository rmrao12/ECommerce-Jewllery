import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // Import cookie-parser
import connectDb from './config/db.js';
import bodyParser from 'body-parser';
import routeProduct from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';


dotenv.config(); // Ensure dotenv is configured before using environment variables

const app = express();
app.use('/uploads', express.static('uploads')); // /uploads is a folder

// Middleware setup
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.get('/', (req, res) => {
    res.send('Hello, World!');
  })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://goldenaura.netlify.app', 
    credentials: true, // Allow credentials (cookies) to be sent
}));

app.use(cookieParser()); // Add cookie-parser middleware
 
// Route setup
app.use('/api/v1/products', routeProduct); // Adjusted route path for products
app.use('/api/v1/cart', cartRouter); // Adjusted route path for cart

// Database connection
connectDb();

const port = process.env.PORT //|| 5000; // Default to 5000 if PORT is not defined
// Favicon handler to prevent 500 error 
app.get('/favicon.ico', (req, res) => res.status(204));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
