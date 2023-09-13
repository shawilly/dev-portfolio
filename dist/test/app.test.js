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
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("../app.js"));
const supertest_1 = __importDefault(require("supertest"));
let request;
describe('Unit Tests', () => {
    before(async () => {
        request = (0, supertest_1.default)(app_js_1.default);
    });
    it('should respond OK to GET /', async () => {
        await request.get('/').expect(200);
    });
    it('should respond NOT FOUND to POST /', async () => {
        await request.post('/').expect(404);
    });
});
