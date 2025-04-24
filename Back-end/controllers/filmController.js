import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getFilms = (req, res) => {
  try {
    const filePath = path.resolve(__dirname, '../data/data.json');
    const data = JSON.parse(readFileSync(filePath, 'utf8'));

    const { nome } = req.query;
    console.log("Buscando por:", nome);

    if (nome) {
      const resultado = data.filter(filme =>
        filme.nome.toLowerCase().includes(nome.toLowerCase())
      );
      return res.json(resultado);
    }

    res.json(data);

  } catch (error) {
    console.error('Error loading data:', error);
    res.status(500).json({ error: 'Unable to load data' });
  }
};
