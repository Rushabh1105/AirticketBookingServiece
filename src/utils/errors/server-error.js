const { StatusCodes } = require("http-status-codes");

class ServieceError extends Error{
    constructor(
        message = "Something Went Wrong",
        explanation = "Serviece Layer Error",
        statusCodes = StatusCodes.INTERNAL_SERVER_ERROR,

    ){
        super();
        this.name = "ServieceError";
        this.message = message;
        this.explanation = explanation;
        this.statusCodes = statusCodes;
    }
}

module.exports = ServieceError;