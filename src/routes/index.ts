import { Router } from "express";
import appointmentRouter from "./appointments.router";
import userRouter from "./users.router";

const routes = Router();

routes.use("/appointment", appointmentRouter);
routes.use("/user", userRouter);

export default routes;
