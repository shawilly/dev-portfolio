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
const assert_1 = __importDefault(require("assert"));
const got_1 = __importDefault(require("got"));
describe('System Tests', () => {
    const { BASE_URL, ID_TOKEN } = process.env;
    before(async () => {
        if (!BASE_URL)
            throw Error('Cloud Run service URL not found');
        if (!ID_TOKEN)
            throw Error('Unable to acquire an ID token.');
    });
    it('can successfully make a request', async () => {
        const options = {
            headers: {
                Authorization: `Bearer ${ID_TOKEN}`,
            },
            method: 'GET',
            throwHttpErrors: false,
            retry: {
                limit: 6,
            },
        };
        const response = await (0, got_1.default)(BASE_URL, options);
        assert_1.default.strictEqual(response.statusCode, 200);
        assert_1.default.strictEqual(response.body, 'Hello World!');
    });
});
