const createOrder = async (req, res) => {
  res.send("create order");
};

const getAllOrders = async (req, res) => {
    res.send('get all orders    ')
  console.log("get all orders");
};

const getSingleOrder = async (req, res) => {
  res.send("get single order");
};
const getCurrentUserOrder = async (req, res) => {
  res.send("get current user");
};

const updateOrder = async (req, res) => {
  res.send("update user");
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrder,
  updateOrder,
};
