import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
    url: "mongodb://root:pass@localhost:27017/my-favorite-wine?authSource=admin",
};

const serverConfig = {
    port: Number(3000),
};

export { dbConfig, serverConfig };
