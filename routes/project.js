import { Router } from 'express';
import {projectAll,projectCreate} from '../controller/projectController.js';

const projectRouter = Router();

 projectRouter.get('/allProject',projectAll);
projectRouter.get('/',projectCreate);

export default projectRouter