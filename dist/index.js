"use strict";
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const logging_js_1 = require("./utils/logging.js");
const metadata_js_1 = require("./utils/metadata.js");
/**
 * Initialize app and start Express server
 */
const main = async () => {
    console.log("hello");
    let project = process.env.GOOGLE_CLOUD_PROJECT;
    if (!project) {
        try {
            project = await (0, metadata_js_1.fetchProjectId)();
        }
        catch (err) {
            logging_js_1.logger.warn("Could not fetch Project Id for tracing.");
        }
    }
    // Initialize request-based logger with project Id
    (0, logging_js_1.initLogCorrelation)(project);
    // Start server listening on PORT env var
    const PORT = process.env.PORT || 8080;
    app_js_1.default.listen(PORT, () => logging_js_1.logger.info(`Listening on port ${PORT}`));
};
/**
 * Listen for termination signal
 */
process.on("SIGTERM", () => {
    // Clean up resources on shutdown
    logging_js_1.logger.info("Caught SIGTERM.");
    logging_js_1.logger.flush();
});
main();
