import Category from "../models/category.js";


export const postCategoriesData=async(req,res)=>{
    try{
   
    const category=new Category(req.body);
    const saveCategory=await category.save(); //save all data
    return res.status(201).json({
        message:"Categpry Added successfully",
        success:true,
        data:saveCategory,
    });
}
    catch(err){
        res.status(500).json({message:err.message});
    }
}

// Get Category by ID
export const getCategoryById = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findById(categoryId);
      
      if (!category) {
        return res.status(404).json({
          message: "Category not found",
          success: false,
        });
      }
      
      return res.status(200).json({
        message: "Category retrieved successfully",
        success: true,
        data: category,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  };
  
  // Update Category by ID
  export const updateCategoryById = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const updatedData = req.body;
      
      const category = await Category.findByIdAndUpdate(categoryId, updatedData, { new: true, runValidators: true });
      
      if (!category) {
        return res.status(404).json({
          message: "Category not found",
          success: false,
        });
      }
      
      return res.status(200).json({
        message: "Category updated successfully",
        success: true,
        data: category,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  };
  
  // Delete Category by ID
  export const deleteCategoryById = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findByIdAndDelete(categoryId);
      
      if (!category) {
        return res.status(404).json({
          message: "Category not found",
          success: false,
        });
      }
      
      return res.status(200).json({
        message: "Category deleted successfully",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  };
  