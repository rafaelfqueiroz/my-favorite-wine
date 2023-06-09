import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
    url: "mongodb://localhost:27017/test",
};

const serverConfig = {
    port: Number(3000),
};

export { dbConfig, serverConfig };
