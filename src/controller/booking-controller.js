const { StatusCodes } = require("http-status-codes");

const { BookingServiece } = require("../servieces/index");

const bookingServiece = new BookingServiece;

const createBooking = async (req, res) => {
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

module.exports = {
    createBooking,
}