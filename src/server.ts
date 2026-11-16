import mongoose from "mongoose";
import { createApp } from "./app.js";
import http from "http";

const app = createApp();

const server = http.createServer(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
  
async function shutdown(){
    await mongoose.disconnect();
    server.close()
    process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);