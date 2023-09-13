import express from 'express';
import { pinoHttp, logger } from './utils/logging.js';
import path from 'path'; // Import the 'path' module

const app = express();

// Use request-based logger for log correlation
app.use(pinoHttp);

// Serve the React Vite app as a static asset
app.use(express.static(path.join(__dirname, 'src/main.jsx')));

// Example endpoint
app.get('/', async (req, res) => {
  // Use basic logger without HTTP request info
  logger.info({ logField: 'custom-entry', arbitraryField: 'custom-entry' }); // Example of structured logging
  // Use request-based logger with log correlation
  req.log.info('Child logger with trace Id.'); // https://cloud.google.com/run/docs/logging#correlate-logs
  res.sendFile(path.join(__dirname, 'path/to/your/react-vite-app/dist', 'index.html'));
});

export default app;
