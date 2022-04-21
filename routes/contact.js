import { Router } from 'express';
import {contactAll,contactDetails,createContact,contactUpdate,contactDelete} from '../controller/contactController.js';

const contactRouter = Router();

contactRouter.post('/', createContact);
contactRouter.get('/',contactAll);
contactRouter.get('/:id', contactDetails);
contactRouter.patch('/:id', contactUpdate);
contactRouter.delete('/:id', contactDelete);



export default contactRouter