const userModel = require('../models/user');
const productModel = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {productName, unitPrice, quantity, totalPrice, isAvailable } = req.body;

const user = await userModel.findById(id);
// console.log(user);


if (!user) {
    return res.status(404).json('User not found')
};

const product = new productModel({
    userId: user._id,
    productName,
    unitPrice,
    quantity,
    totalPrice: unitPrice * quantity,
    isAvailable: available
});

user.productId.push

    } catch (error) {
        res.status(500).json({
            statusCode: false,
            statusText: 'Internal server error',
            message: 'Error creating product for user' + error.message,
        });
    }
}
