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
exports.pinoHttp = exports.logger = exports.initLogCorrelation = void 0;
const pino_1 = __importDefault(require("pino"));
const pino_http_1 = __importDefault(require("pino-http"));
/**
 * Set project Id for log correlation in request-based logger
 * @param {string} projectId - Google Cloud Platform Project Id
 */
let project;
const initLogCorrelation = (projectId) => {
    project = projectId;
};
exports.initLogCorrelation = initLogCorrelation;
/**
 * Create a custom formatter to set the "severity" property in the JSON payload
 * to the log level to be automatically parsed
 * https://github.com/winstonjs/winston#creating-custom-formats
 * https://cloud.google.com/run/docs/logging#special-fields
 */
const formatters = {
    level(label, number) {
        return { severity: label };
    },
};
/**
 * Initialize pino logger
 */
exports.logger = (0, pino_1.default)({
    formatters,
    // Set log message property name to "message" for automatic parsing
    messageKey: 'message',
});
/**
 * Create request-based logger with trace ID field for logging correlation
 * For more info, see https://cloud.google.com/run/docs/logging#correlate-logs
 */
exports.pinoHttp = (0, pino_http_1.default)({
    logger: exports.logger,
    reqCustomProps: function (req) {
        const traceHeader = req.header('X-Cloud-Trace-Context');
        let trace;
        if (traceHeader) {
            const [traceId] = traceHeader.split('/');
            trace = `projects/${project}/traces/${traceId}`;
        }
        return {
            'logging.googleapis.com/trace': trace,
        };
    },
});
