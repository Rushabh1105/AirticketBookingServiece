const axios = require("axios");

const { BookingRepository } = require("../repository/index");
const { FLIGHT_SERVIECE_PATH } = require("../config/server-config");
const { ServerError } = require("../utils/errors");

class BookingServiece{
    constructor(){
        this.bookingRepository = new BookingRepository;   
    }

    async createBooking(data){
        try {
            const flightId = data.flightId;
            const getFlightURL = `${FLIGHT_SERVIECE_PATH}/api/v1/flight/${flightId}`;
            const response = await axios.get(getFlightURL);
            
            const flight = response.data.data;
            let flightPrice = flight.price;
            if(flight.seats < data.noOfSeats){
                throw new ServerError('Something went wrong','Insufficient seats');
            }
            const totalCost = flightPrice * data.noOfSeats;
            const bookingData = {...data, totalCost};
            const booking = await this.bookingRepository.createBooking(bookingData);
            const updateFlightURL = `${FLIGHT_SERVIECE_PATH}/api/v1/flight/${booking.flightId}`;
            await axios.patch(updateFlightURL, {seats : flight.seats - data.noOfSeats});
            const updatedBooking = await this.bookingRepository.updateBooking(booking.id, {status : "Booked"}); 
            return updatedBooking;
        } catch (error) {
            throw new ServerError();
        }
    }


}

module.exports = BookingServiece;