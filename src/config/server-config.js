const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    FLIGHT_SERVIECE_PATH : process.env.FLIGHT_SERVIECE_PATH,
    
    
}