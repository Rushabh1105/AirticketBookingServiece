const { StatusCodes } = require("http-status-codes");
const { BookingServiece } = require("../servieces/index");
const { createChannel, publishMessage, } = require('../utils/message-queue')
const { REMAINDER_BINDING_KEY } = require("../config/server-config")

const bookingServiece = new BookingServiece;

class BookingController{

    constructor(){
    }

    async sendMessageToQueue(req, res){
        const channel = await createChannel();
        const data = {message : 'success'}
        publishMessage(channel, REMAINDER_BINDING_KEY, JSON.stringify(data));
        return res.status(200).json({
            message : 'successfully published the event',
            
        })
    }


    async createBooking(req, res){
        try {
            const response = await bookingServiece.createBooking(req.body);
            //console.log(response);
            return res.status(StatusCodes.OK).json({
                message : "Successfully completed booking",
                success : true,
                data : response,
                err : {},
            });
        } catch (error) {
            return res.status( error.statusCodes).json({
                message : error.message,
                success : false,
                data : {},
                err : error.explanation,
            });
        }
    
    }

}

module.exports = BookingController;