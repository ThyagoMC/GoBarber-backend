import { Router } from "express";
import { uuid } from "uuidv4";
import { startOfHour, parseISO, isEqual } from "date-fns";

import Appointment from "../models/Appointment";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

import CreateAppointmentService from "../services/CreateAppointmentService";

const appointmentRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentRouter.post("/", (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointmentService = new CreateAppointmentService(appointmentsRepository);
  const appointment = createAppointmentService.execute({ provider, date: parsedDate });

  response.json(appointment);
});

appointmentRouter.get("/", (request, response) => {
  const appointments = appointmentsRepository.all();
  response.json(appointments);
});

export default appointmentRouter;
