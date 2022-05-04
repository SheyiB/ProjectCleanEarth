const PaymentService = require('../services/payment.service');

const paymentInstance = new PaymentService();

exports.startPayment = async (req, res) => {
    try{
        const response = await paymentInstance.startPayment(req.body);
        res.status(201).json({status: "Success", data : response});
    }catch(error){
        res.status(500).json({status: "Failed", message : error.message});
    }
}

exports.createPayment = async (req, res) => {
    try{
        const response = await paymentInstance.createPayment(req.query);
        res.status(201).json({status: "Success", data : response});
    }catch(error){
        res.status(500).json({status: "Failed", message : error.message});
    }
}

exports.getPayment = async (req, res) => {
    try{
        const response = await paymentInstance.paymentReciept(req.body);
        res.status(201).json({status: "Success", data : response});
    }catch(error){
        res.status(500).json({status: "Failed", message : error.message});
    }
}