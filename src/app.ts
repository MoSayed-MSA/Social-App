import express from "express";
import { connectDB } from "./common/db/connection.js";
import router from "./routes.js";

export function createApp() {
    const app = express();
    connectDB();
    app.use(express.json());

    app.use("/api" , router )


    return app;
}