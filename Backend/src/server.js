
import express from "express";
import ENV  from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";
import chatRoutes from "./Routes/chat.route.js";

import cors from "cors";

const app = express();

app.use(express.json());
// On vsc-three.vercel.app server startup:
// ENV.CLIENT_URL will be 'https://vsc-amber.vercel.app'
app.use(cors({ origin: 'https://vsc-amber.vercel.app', credentials: true }));

app.use(clerkMiddleware()); // req.auth will be available in the request object



app.get("/", (req, res) => {
  res.send("Hello World! 123");
});

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);


const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log("Server started on port:", ENV.PORT);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();

export default app;