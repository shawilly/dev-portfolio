import express from 'express';
import { pinoHttp, logger } from './utils/logging.js';
import path from 'path'; // Import the 'path' module
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)

const app = express();

// Use request-based logger for log correlation
app.use(pinoHttp);

// Serve the React Vite app as a static asset
app.use(express.static(path.join(__dirname, '/src/main.jsx')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// // Example endpoint
// app.get('/', async (req, res) => {
//   // Use basic logger without HTTP request info
//   logger.info({ logField: 'custom-entry', arbitraryField: 'custom-entry' }); // Example of structured logging
//   // Use request-based logger with log correlation
//   req.log.info('Child logger with trace Id.'); // https://cloud.google.com/run/docs/logging#correlate-logs
//   res.sendFile(path.join(__dirname, '/dist/assets/index-21a6d209.js'));
// });

export default app;
