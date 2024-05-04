require("dotenv").config();
const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");

const server = http.createServer(app);

const start = async () => {
    try {
        // Call DB
        connectDB();

        server.listen(PORT, () => {
            console.log(
                `🚀 [SERVER] is running on port http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.log(error);
    }
};

start();
