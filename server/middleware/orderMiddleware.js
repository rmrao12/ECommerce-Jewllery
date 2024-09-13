
const orderMiddleware = async (req, res, next) => {
 
  res.clearCookie('sessionId')
  next();
};

export default orderMiddleware;
