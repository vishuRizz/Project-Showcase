import express from "express";
import { acceptTicket, createTicket, getTicket, getTicketById, ignoreTicket } from "../controllers/ticket.controller.js";

const ticketRouter = express.Router()

ticketRouter.post('/addticket',createTicket)
ticketRouter.get('/alltickets',getTicket)
ticketRouter.get('/singleticket/:id',getTicketById)
ticketRouter.post('/acceptticket/:id',acceptTicket)
ticketRouter.post('/ignoreticket/:id',ignoreTicket)

export default ticketRouter;



