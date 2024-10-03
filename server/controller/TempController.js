import ModelTwo from "../models/ModelTwo.js";


export const getValue = async (req, res) => {
    try {
      
      const data = await ModelTwo.find().populate('modelOne'); 
      
      if (!data) {
        return res.status(404).json({
          message: "Data not found",
          success: false,
        });
      }
      
      return res.status(200).json({
        message: "Data retrieved successfully",
        success: true,
        data: data,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  };