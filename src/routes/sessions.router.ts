import { Router } from "express";

const sessionRouter = Router();

import CreateSessionService from "../services/CreateSessionService";

sessionRouter.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;

    const createSession = new CreateSessionService();

    const { user, token } = await createSession.execute({ email, password });
    response.json({ user, token });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionRouter;
