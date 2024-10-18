import express from "express";
import { orglogin, orgSignUp } from "../controllers/org.controller.js";

const orgRouter = express.Router()


orgRouter.post('/orgsignup',orgSignUp)
orgRouter.post('/orglogin',orglogin)


export default orgRouter