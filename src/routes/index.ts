import { Router } from "express";
import appointmentRouter from "./appointments.router";
import sessionRouter from "./sessions.router";
import userRouter from "./users.router";

const routes = Router();

routes.use("/appointment", appointmentRouter);
routes.use("/user", userRouter);
routes.use("/session", sessionRouter);

export default routes;
