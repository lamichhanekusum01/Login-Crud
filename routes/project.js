import { Router } from 'express';
import {projectAll,projectCreate} from '../controller/projectController.js';

const projectRouter = Router();

// projectRouter.get('/',projectAll);
projectRouter.get('/',projectCreate);

export default projectRouter