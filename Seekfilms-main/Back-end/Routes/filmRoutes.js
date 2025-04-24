import { Router } from 'express';
import { getFilms } from '../controllers/filmController.js'; // Correct


const router = Router();

router.get('/', getFilms);

export default router;
