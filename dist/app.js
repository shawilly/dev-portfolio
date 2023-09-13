"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logging_js_1 = require("./utils/logging.js");
const path_1 = __importDefault(require("path")); // Import the 'path' module
const url_1 = require("url");
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = path_1.default.dirname(__filename);
console.log(__dirname);
const app = (0, express_1.default)();
// Use request-based logger for log correlation
app.use(logging_js_1.pinoHttp);
// Serve the React Vite app as a static asset
app.use(express_1.default.static(path_1.default.join(__dirname, '/src/main.jsx')));
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
exports.default = app;
