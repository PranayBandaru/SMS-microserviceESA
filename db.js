const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.at51m.mongodb.net/SMS_microservice?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to Database!");
    },
        err => {
            {
                console.log("Error connecting to Database instance, error:", err);
            }
        });