
const orderMiddleware = async (req, res, next) => {
  
  res.clearCookie("sessionId", {
    httpOnly: true,
    secure: false,
          
});
  next();
};

export default orderMiddleware;
