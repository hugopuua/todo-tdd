const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://hugopuua:qPN9ler21Vl4iDsj@cluster0.zmyo1ny.mongodb.net/",
            { useNewUrlParser: true}
        );
    } catch (err) {
        console.error("Error connection to mongodb");
        console.error(err);
    }
}

module.exports = {connect}