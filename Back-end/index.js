import express from 'express';
import cors from 'cors';
import path from 'path';
import filmRoutes from './Routes/filmRoutes.js'; // Correct import path

const app = express();

app.use(cors());

// Use the film routes
app.use('/films', filmRoutes);
app.use('/img', express.static(path.join(process.cwd(), 'img')));


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
