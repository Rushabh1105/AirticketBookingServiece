const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("sequelize");

const apiRoutes = require("./routes/index");
const { PORT, FLIGHT_SERVIECE_PATH } = require("./config/server-config");
const db = require("./models/index");

const app = express();


const setUpAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use("/api", apiRoutes);

    app.listen(PORT, () => {


        console.log(`Server started on port ${PORT}`);
        console.log(FLIGHT_SERVIECE_PATH)
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter : true});
        }
    })
}

setUpAndStartServer();