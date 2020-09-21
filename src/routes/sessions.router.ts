import { Router } from "express";

const sessionRouter = Router();

import CreateSessionService from "../services/CreateSessionService";

sessionRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const createSession = new CreateSessionService();

  const { user, token } = await createSession.execute({ email, password });
  response.json({ user, token });
});

export default sessionRouter;
