import newProduct from "../models/product.js";

export const postProductData = async (req, res) => {
    try {
        const { name, price, description, category,additionalInfo } = req.body;

        // Check if a product with the same ID or name already exists
        const existingProduct = await newProduct.findOne({ name });

        if (existingProduct) {
            return res.status(400).json({
                message: 'Product with the same ID or name already exists',
                success: false,
            });
        }

        // Create a new product
        const productData = {
            
            name,
            price, 
            description,
            category,
            additionalInfo
        };

        const product = new newProduct(productData);
        const savedProduct = await product.save();

        return res.status(201).json({
            message: 'Product added successfully',
            success: true,
            data: savedProduct,
        });
    } catch (err) {
        console.error('Error adding product:', err.message);
        res.status(500).json({ message: err.message });
    }
};

export const getProductData = async (req, res) => {
    try {
       
        const products = await newProduct.find().populate('category'); 
        return res.status(200).json({
            message: "Products retrieved successfully",
            success: true,
            data: products,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getProductDataById = async (req, res) => {
    try {
        const { id } = req.params;

        const products = await newProduct.find({ _id: id }).populate("category"); 
        return res.status(200).json({
            message: "Products retrieved successfully",
            success: true,
            data: products,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getProductDataCat = async (req, res) => {
    try {
        // Access the categoryId parameter from req.params
        const { categoryId } = req.params;

        console.log('Received categoryId:', categoryId); // Debugging output

        if (!categoryId) {
            return res.status(400).json({ message: 'Category ID is required' });
        }

        // Find products by category ID and populate the category field
        const products = await newProduct.find({ category: categoryId }).populate('category');

        return res.status(200).json({
            message: "Products retrieved successfully",
            success: true,
            data: products,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteProductById = async (req, res) => {
    try {
        const productId=req.params.id;
        const deletedProduct = await newProduct.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            data: deletedProduct,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateById= async (req,res) => 
    {   
        try
        {
            const {name,price,description}=req.body;
            const productId=req.params.id;
            const isDataUpdated = await newProduct.findByIdAndUpdate(
                productId, 
                { name, price, description, image: req.file.path  }, // Fields to update
                { new: true } 
            );
            if(!isDataUpdated){
                return res.status(404).json({
                    message:"Item Not Found",
                    success:false
            })
           
        }
        return res.status(200).json({
            message: "Product Updated successfully",
            success: true,
            data: isDataUpdated
        });
        }
        catch (err) 
        {
            res.status(500).json({ message: err.message });
        }
    
    }