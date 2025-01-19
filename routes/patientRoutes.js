import { Router } from 'express';
import { addPatient, getPatient, deletePatient } from '../controller/patientController.js';
const router = Router();

router.post('/', addPatient);
router.get('/', getPatient);
router.delete('/:patientId', deletePatient);


export default router;