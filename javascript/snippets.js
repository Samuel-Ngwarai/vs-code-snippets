{
/*
	 // Place your snippets for JavaScript here. Each snippet is defined under a snippet name and has a prefix, body and 
	 // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	 // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	 // same ids are connected.
	 // Example:
	 "Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
*/
	"require": {
		"prefix": "req",
		"body": [
			"const $1 = require('$2');"
		],
		"description": "snippet for require"
	},
	 "Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');$0"
		],
		"description": "Log output to console"
	},
	 "Print var to console": {
		"prefix": "cnl",
		"body": [
			"console.log($1);$0"
		],
		"description": "Log var to console"
	},
	 "Print to console wrapped": {
		"prefix": "cnll",
		"body": [
			"console.log(`${'*'.repeat(20)} ${TM_FILENAME}:${TM_LINE_NUMBER} ${'*'.repeat(20)}`);",
			"console.log('* $1 = ', $1);",
			"console.log('*'.repeat(60));$0"
		],
		"description": "Log output to console wrapped in *"
	},
	"Print to console with inspect": {
		"prefix": "ins",
		"body": [
			"console.log(`${'*'.repeat(20)} ${TM_FILENAME}:${TM_LINE_NUMBER} ${'*'.repeat(20)}`);",
			"console.log('* $1 = ', require('util').inspect($1, { colors: true, depth: null, showHidden: true }));",
			"console.log('*'.repeat(60));$0"
		],
		"description": "Log output to console with nodejs inspect wrapped in *"
	},
	"Print to console test": {
		"prefix": "test",
		"body": [
			"console.log(`${'*'.repeat(20)} ${TM_DIRECTORY} ${'*'.repeat(20)}`);",
			"console.log(`${'*'.repeat(20)} ${TM_FILENAME}:${TM_LINE_NUMBER} ${'*'.repeat(20)}`);"
		],
		"description": "Console log FILENAME:LINE"
	},
	"ESLint disable line": {
		"prefix": "esl",
		"body": [
			"// eslint-disable-line ${1:rule1, rule2, rule3...}"
		],
		"description": "ESLint disable line"
	},
	"ESLint disable next line": {
		"prefix": "esln",
		"body": [
			"// eslint-disable-next-line ${1:rule1, rule2, rule3...}"
		],
		"description": "ESLint disable next line"
	},
	"ESLint disable file": {
		"prefix": "eslf",
		"body": [
			"/* eslint rule1: 'off', rule2: 'off' */"
		],
		"description": "ESLint disable next line"
	},
	"import lodash": {
		"prefix": "imp_",
		"body": [
			"import * as _ from 'lodash';"
		],
		"description": "Import lodash"
	},
	"then and catch": {
		"prefix": ".then",
		"body": [
			"    .then(res => {",
			"        console.log(`${'*'.repeat(20)} ${TM_FILENAME}:${TM_LINE_NUMBER} ${'*'.repeat(20)}`);",
			"        console.log('* res = ', require('util').inspect(res, { colors: true, depth: null, showHidden: true }));",
			"        console.log('*'.repeat(60));$0"
			"    })",
			"    .catch(error => {",
			"        console.log(`${'*'.repeat(20)} ${TM_FILENAME}:${TM_LINE_NUMBER} ${'*'.repeat(20)}`);",
			"        console.log('* error = ', require('util').inspect(error, { colors: true, depth: null, showHidden: true }));",
			"        console.log('*'.repeat(60));$0"
			"    });"
		],
		"description": ".then and .catch"
	},
	"server file": {
		"prefix": "serverfile",
		"body": [
			"const helmet = require('helmet');",
			"const express = require('express');",
			"const bodyParser = require('body-parser');",
			"const morgan = require('morgan');",
			"const methodOverride = require('method-override');",
			"const cors = require('cors');",
			"",
			"const routes = require('./routes/index');",
			"",
			"const app = express();",
			"",
			"app.use(methodOverride());",
			"app.use(helmet());",
			"app.use(bodyParser.urlencoded({ extended: true }));",
			"app.use(bodyParser.json());",
			"app.use(morgan('tiny'));",
			"app.use(cors());",
			"",
			"// routes",
			"app.use(routes);",
			"",
			"",
			"// this is 404 handler(route is not found)",
			"app.use((req, res, next) => { // eslint-disable-line no-unused-vars",
			"	const errMsg = `Route '${req.method} ${req.path}' not found`;",
			"	console.log(errMsg);",
			"",
			"	res.status(405).send('Not Found');",
			"});",
			"",
			"// error handler",
			"app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars",
			"	console.log(`Got unhandled error: ${String(err)}. stack: ${err.stack}`);",
			"	res.status(500).send('Internal Server Error');",
			"});",
			"",
			"function start() {",
			"	const PORT = 3000;",
			"	app.listen(PORT, () => {",
			"		console.log(`Server is running @ '${PORT}'`);",
			"	});",
			"",
			"	return app;",
			"}",
			"",
			"module.exports = {",
			"	start,",
			"};",
			"",
		],
		"description": "This is a snippet to create express server"
	},
	"route file": {
		"prefix": "routefile",
		"body": [
			"const { Router } = require('express');",
			"",
			"const router = Router();",
			"",
			"",
			"router.get('/', (req, res) => {",
			"    const { query, params, body } = req;",
			"    try {",
			"        console.log('query: ', query);",
			"        console.log('params: ', params);",
			"        console.log('body: ', body);",
			"",
			"        return res.status(200).send('success');",
			"    } catch (error) {",
			"        console.error(error);",
			"        res.status(500).send('Internal Server Error');",
			"    }",
			"});",
			"",
			"module.exports = router;",
			"",
		],
		"description": "create route file"
	},
	"test file": {
		"prefix": "testfile",
		"body": [
			"const chai = require('chai');",
			"const sinon = require('sinon');",
			"",
			"chai.use(require('chai-as-promised'));",
			"",
			"const { expect } = chai;",
			"const moduleToMock = require('../path/to/mock');",
			"const testModule = require('../testModule');",
			"",
			"describe.only('Module To Test', () => {",
			"    const mocks = {};",
			"",
			"    before(() => {",
			"        mocks.mockedFunc = sinon.stub(moduleToMock, 'functionToMock');",
			"    });",
			"",
			"    beforeEach(() => {",
			"        mocks.mockedFunc.returns({});",
			"    });",
			"",
			"    afterEach(() => {",
			"        Object.keys(mocks).forEach((key) => {",
			"            mocks[key].reset();",
			"    });",
			"",
			"    describe('testModule plugin', () => {",
			"        it('func is exposed', () => {",
			"            expect(testModule.func).to.be.an('function');",
			"        });",
			"    });",
			"});",
		],
		"description": "create test file"
	},

}
