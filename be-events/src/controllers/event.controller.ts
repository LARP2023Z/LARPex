import { Request, Response } from "express";
import { eventsFetch, eventsRegistration } from "../services/event.service";

const getEventList = async (_req: Request, res: Response) => {
  try {
    const eventList = await eventsFetch.listEvents();
    res.json(eventList);
  } catch (err: any) {
    res.status(400).json({ status: err.message });
  }
};

const getDetailEvent = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const eventDetails = await eventsFetch.getEventDetails(id);
    res.json(eventDetails);
  } catch (err: any) {
    res.status(400).json({ status: err.message });
  }
};

const signUp = async (req: Request, res: Response) => {
  const eventId: string = req.params.eid;
  const userId: string = req.params.uid;
  try {
    const status = await eventsRegistration.registerToEvent(userId, eventId);
    res.json({ status: status });
  } catch (err: any) {
    res.status(400).json({ status: err.message });
  }
};

export default {
  getEventList,
  getDetailEvent,
  signUp,
};
