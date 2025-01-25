import express from 'express';
import { signup } from '../controller/authController.js';

const router = express.Router();    

router.post('/signup', signup);

export default router;   // This is the route that will be used in the server.js file to access the routes in the controller.

