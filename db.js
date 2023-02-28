const sqlite3 = require("sqlite3");

const db = new sqlite3.Database(
    "./data.db",
    sqlite3.OPEN_READONLY,
    (error) => {
        if (error) {
            console.log("DB error........");
            console.error(error)
        } else {
            console.log("DB CONNECTED........")
        }
    }
);


module.exports = db ;



