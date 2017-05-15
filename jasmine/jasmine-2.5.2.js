/**
 * https://github.com/jasmine/jasmine
 */

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/jasmine/index.d.ts

var jasmineExtern = {};
var jasmine = {};

/**
 * @param {string} description
 * @param {function():void} specDefinitions
 * @returns {void}
 */
function describe(description, specDefinitions) {}

/**
 * @param {string} description
 * @param {function():void} specDefinitions
 * @returns {void}
 */
function fdescribe(description, specDefinitions) {}

/**
 * @param {string} description
 * @param {function():void} specDefinitions
 * @returns {void}
 */
function xdescribe(description, specDefinitions) {}

/**
 * @param {string} expectation
 * @param {function(jasmineExtern.DoneFn):void=} opt_assertion
 * @param {number=} opt_timeout
 * @returns {void}
 */
function it(expectation, opt_assertion, opt_timeout) {}

/**
 * @param {string} expectation
 * @param {function(jasmineExtern.DoneFn):void=} opt_assertion
 * @param {number=} opt_timeout
 * @returns {void}
 */
function fit(expectation, opt_assertion, opt_timeout) {}

/**
 * @param {string} expectation
 * @param {function(jasmineExtern.DoneFn):void=} opt_assertion
 * @param {number=} opt_timeout
 * @returns {void}
 */
function xit(expectation, opt_assertion, opt_timeout) {}

/**
 * @param {string=} opt_reason
 * @returns {void}
 */
function pending(opt_reason) {}

/**
 * @param {function(jasmineExtern.DoneFn):void} action
 * @param {number=} opt_timeout
 * @returns {void}
 */
function beforeEach(action, opt_timeout) {}

/**
 * @param {function(jasmineExtern.DoneFn):void} action
 * @param {number=} opt_timeout
 * @returns {void}
 */
function afterEach(action, opt_timeout) {}

/**
 * @param {function(jasmineExtern.DoneFn):void} action
 * @param {number=} opt_timeout
 * @returns {void}
 */
function beforeAll(action, opt_timeout) {}

/**
 * @param {function(jasmineExtern.DoneFn):void} action
 * @param {number=} opt_timeout
 * @returns {void}
 */
function afterAll(action, opt_timeout) {}

/**
 * @param {*} actual
 * @returns {jasmine.Matchers}
 */
function expect(actual) {}

/**
 * @param {*=} opt_e
 * @returns {void}
 */
function fail(opt_e) {}

/**
 * @interface
 * @extends {Function}
 */
jasmineExtern.DoneFn;

/**
 * @param {(Error|string)=} opt_message
 * @returns {void}
 */
jasmineExtern.DoneFn.prototype.fail = function (opt_message) {};

/**
 * @param {*} object
 * @param {string} method
 * @returns {jasmineExtern.Spy}
 */
function spyOn(object, method) {}

/**
 * @param {*} object
 * @param {string} property
 * @param {string} accessType
 * @returns {jasmineExtern.Spy}
 */
function spyOnProperty(object, property, accessType) {}

/**
 * @param {Function} asyncMethod
 * @returns {void}
 */
function runs(asyncMethod) {}

/**
 * @param {function():boolean} latchMethod
 * @param {string=} opt_failureMessage
 * @param {number=} opt_timeout
 * @returns {void}
 */
function waitsFor(latchMethod, opt_failureMessage, opt_timeout) {}

/**
 * @param {number=} opt_timeout
 * @returns {void}
 */
function waits(opt_timeout) {}

/**
 * @returns {jasmineExtern.Clock}
 */
jasmine.clock = function () {};

/**
 * @param {*} aclass
 * @returns {jasmine.Any}
 */
jasmine.any = function (aclass) {};

/**
 * @returns {jasmine.Any}
 */
jasmine.anything = function () {};

/**
 * @param {Array} sample
 * @returns {jasmine.ArrayContaining}
 */
jasmine.arrayContaining = function (sample) {};

/**
 * @param {*} sample
 * @returns {jasmine.ObjectContaining}
 */
jasmine.objectContaining = function (sample) {};

/**
 * @param {string} name
 * @param {Function=} opt_originalFn
 * @returns {jasmineExtern.Spy}
 */
jasmine.createSpy = function (name, opt_originalFn) {};

/**
 * @param {string} baseName
 * @param {Array} methodNames
 * @returns {*}
 */
jasmine.createSpyObj = function (baseName, methodNames) {};

/**
 * @param {*} value
 * @returns {string}
 */
jasmine.pp = function (value) {};

/**
 * @returns {jasmineExtern.Env}
 */
jasmine.getEnv = function () {};

/**
 * @param {jasmineExtern.CustomEqualityTester} equalityTester
 * @returns {void}
 */
jasmine.addCustomEqualityTester = function (equalityTester) {};

/**
 * @param {jasmineExtern.CustomMatcherFactories} matchers
 * @returns {void}
 */
jasmine.addMatchers = function (matchers) {};

/**
 * @param {string|RegExp} str
 * @returns {jasmine.Any}
 */
jasmine.stringMatching = function (str) {};

/**
 * @param {string} domain
 * @param {string} usage
 * @returns {function(string):string}
 */
jasmine.formatErrorMsg = function (domain, usage) {};

/**
 * @param {*} expectedClass
 * @constructor
 */
jasmine.Any = function (expectedClass) {};

/**
 * @param {*} other
 * @returns {boolean}
 */
jasmine.Any.prototype.jasmineMatches = function (other) {};

/**
 * @returns {string}
 */
jasmine.Any.prototype.jasmineToString = function () {};

/**
 * @param {Array<*>} sample
 * @constructor
 */
jasmine.ArrayContaining = function (sample) {};

/**
 * @param {*} other
 * @returns {boolean}
 */
jasmine.ArrayContaining.prototype.asymmetricMatch = function (other) {};

/**
 * @returns {string}
 */
jasmine.ArrayContaining.prototype.jasmineToString = function () {};

/**
 * @param {*} sample
 * @constructor
 */
jasmine.ObjectContaining = function (sample) {};

/**
 * @param {*} other
 * @param {Array<*>} mismatchKeys
 * @param {Array<*>} mismatchValues
 * @returns {boolean}
 */
jasmine.ObjectContaining.prototype.jasmineMatches = function (other, mismatchKeys, mismatchValues) {};

/**
 * @returns {string}
 */
jasmine.ObjectContaining.prototype.jasmineToString = function () {};

/**
 * @param {jasmineExtern.Env} env
 * @param {jasmineExtern.SpecFunction} func
 * @param {jasmine.Spec} spec
 * @constructor
 */
jasmine.Block = function (env, func, spec) {};

/**
 * @param {function():void} onComplete
 * @returns {void}
 */
jasmine.Block.prototype.execute = function (onComplete) {};

/**
 * @param {jasmineExtern.Env} env
 * @param {number} timeout
 * @param {jasmine.Spec} spec
 * @constructor
 * @extends {jasmine.Block}
 */
jasmine.WaitsBlock = function (env, timeout, spec) {};

/**
 * @param {jasmineExtern.Env} env
 * @param {number} timeout
 * @param {jasmineExtern.SpecFunction} latchFunction
 * @param {string} message
 * @param {jasmine.Spec} spec
 * @constructor
 * @extends {jasmine.Block}
 */
jasmine.WaitsForBlock = function (env, timeout, latchFunction, message, spec) {};

/**
 * @interface
 */
jasmineExtern.Clock = function () {};

/**
 * @returns {void}
 */
jasmineExtern.Clock.prototype.install = function () {};

/**
 * @returns {void}
 */
jasmineExtern.Clock.prototype.uninstall = function () {};

/**
 * @param {number} ms
 * @returns {void}
 */
jasmineExtern.Clock.prototype.tick = function (ms) {};

/**
 * @param {Date=} opt_date
 * @returns {void}
 */
jasmineExtern.Clock.prototype.mockDate = function (opt_date) {};

/**
 * @param {function():void} func
 * @returns {void}
 */
jasmineExtern.Clock.prototype.withMock = function (func) {};

/**
 * @typedef {function(*, *):boolean}
 */
jasmineExtern.CustomEqualityTester;

/**
 * @interface
 */
jasmineExtern.CustomMatcher;

/**
 * @param {*} actual
 * @param {*} expected
 * @returns {jasmineExtern.CustomMatcherResult}
 */
jasmineExtern.CustomMatcher.prototype.compare = function (actual, expected) {};

/**
 * @typedef {function(jasmineExtern.MatchersUtil, Array<jasmineExtern.CustomEqualityTester>):jasmineExtern.CustomMatcher}
 */
jasmineExtern.CustomMatcherFactory;

/**
 * @typedef {IObject<string, jasmineExtern.CustomMatcherFactory>}
 */
jasmineExtern.CustomMatcherFactories;

/**
 * @typedef {{
 *   pass: boolean,
 *   message: (string|undefined)
 * }}
 */
jasmineExtern.CustomMatcherResult;

/**
 * @interface
 */
jasmineExtern.MatchersUtil;

/**
 * @param {*} a
 * @param {*} b
 * @param {Array<jasmineExtern.CustomEqualityTester>=} opt_customTesters
 * @returns {boolean}
 */
jasmineExtern.MatchersUtil.prototype.equals = function (a, b, opt_customTesters) {};

/**
 * @param {IArrayLike<*>|string} haystack
 * @param {*} needle
 * @param {Array<jasmineExtern.CustomEqualityTester>=} opt_customTesters
 * @returns {boolean}
 */
jasmineExtern.MatchersUtil.prototype.contains = function (haystack, needle, opt_customTesters) {};

/**
 * @param {string} matcherName
 * @param {boolean} isNot
 * @param {*} actual
 * @param {...*} expected_args
 * @returns {string}
 */
jasmineExtern.MatchersUtil.prototype.buildFailureMessage = function (matcherName, isNot, actual, expected_args) {};

/**
 * @interface
 */
jasmineExtern.Env = function () {};

/**
 * @type {*}
 */
jasmineExtern.Env.prototype.setTimeout;

/**
 * @type {*}
 */
jasmineExtern.Env.prototype.clearTimeout;

/**
 * @type {*}
 */
jasmineExtern.Env.prototype.setInterval;

/**
 * @type {*}
 */
jasmineExtern.Env.prototype.clearInterval;

/**
 * @type {number}
 */
jasmineExtern.Env.prototype.updateInterval;

/**
 * @type {jasmine.Spec}
 */
jasmineExtern.Env.prototype.currentSpec;

/**
 * @type {jasmine.Matchers}
 */
jasmineExtern.Env.prototype.matchersClass;

/**
 * @returns {*}
 */
jasmineExtern.Env.prototype.version = function () {};

/**
 * @returns {string}
 */
jasmineExtern.Env.prototype.versionString = function () {};

/**
 * @returns {number}
 */
jasmineExtern.Env.prototype.nextSpecId = function () {};

/**
 * @param {jasmineExtern.Reporter|jasmineExtern.CustomReporter} reporter
 * @returns {void}
 */
jasmineExtern.Env.prototype.addReporter = function (reporter) {};

/**
 * @returns {void}
 */
jasmineExtern.Env.prototype.execute = function () {};

/**
 * @param {string} description
 * @param {function():void} specDefinitions
 * @returns {jasmine.Suite}
 */
jasmineExtern.Env.prototype.describe = function (description, specDefinitions) {};

/**
 * @param {function():void} beforeEachFunction
 * @returns {void}
 */
jasmineExtern.Env.prototype.beforeEach = function (beforeEachFunction) {};

/**
 * @param {function():void} beforeAllFunction
 * @returns {void}
 */
jasmineExtern.Env.prototype.beforeAll = function (beforeAllFunction) {};

/**
 * @returns {jasmine.Runner}
 */
jasmineExtern.Env.prototype.currentRunner = function () {};

/**
 * @param {function():void} afterEachFunction
 * @returns {void}
 */
jasmineExtern.Env.prototype.afterEach = function (afterEachFunction) {};

/**
 * @param {function():void} afterAllFunction
 * @returns {void}
 */
jasmineExtern.Env.prototype.afterAll = function (afterAllFunction) {};

/**
 * @param {string} description
 * @param {function():void} specDefinitions
 * @returns {jasmineExtern.XSuite}
 */
jasmineExtern.Env.prototype.xdescribe = function (description, specDefinitions) {};

/**
 * @param {string} description
 * @param {function():void} func
 * @returns {jasmine.Spec}
 */
jasmineExtern.Env.prototype.it = function (description, func) {};

/**
 * @param {string} description
 * @param {function():void} func
 * @returns {jasmineExtern.XSpec}
 */
jasmineExtern.Env.prototype.xit = function (description, func) {};

/**
 * @param {RegExp} a
 * @param {RegExp} b
 * @param {Array<string>} mismatchKeys
 * @param {Array<string>} mismatchValues
 * @private
 * @returns {boolean}
 */
jasmineExtern.Env.prototype.compareRegExps_ = function (a, b, mismatchKeys, mismatchValues) {};

/**
 * @param {*} a
 * @param {*} b
 * @param {Array<string>} mismatchKeys
 * @param {Array<string>} mismatchValues
 * @private
 * @returns {boolean}
 */
jasmineExtern.Env.prototype.compareObjects_ = function (a, b, mismatchKeys, mismatchValues) {};

/**
 * @param {*} a
 * @param {*} b
 * @param {Array<string>} mismatchKeys
 * @param {Array<string>} mismatchValues
 * @private
 * @returns {boolean}
 */
jasmineExtern.Env.prototype.equals_ = function (a, b, mismatchKeys, mismatchValues) {};

/**
 * @param {*} haystack
 * @param {*} needle
 * @private
 * @returns {boolean}
 */
jasmineExtern.Env.prototype.contains_ = function (haystack, needle) {};

/**
 * @param {jasmineExtern.CustomEqualityTester} equalityTester
 * @returns {void}
 */
jasmineExtern.Env.prototype.addCustomEqualityTester = function (equalityTester) {};

/**
 * @param {jasmineExtern.CustomMatcherFactories} matchers
 * @returns {void}
 */
jasmineExtern.Env.prototype.addMatchers = function (matchers) {};

/**
 * @param {jasmine.Spec} spec
 * @returns {boolean}
 */
jasmineExtern.Env.prototype.specFilter = function (spec) {};

/**
 * @param {boolean} value
 * @returns {void}
 */
jasmineExtern.Env.prototype.throwOnExpectationFailure = function (value) {};

/**
 * @param {string|number} seed
 * @returns {string|number}
 */
jasmineExtern.Env.prototype.seed = function (seed) {};

/**
 * @param {jasmineExtern.Reporter} reporter
 * @returns {void}
 */
jasmineExtern.Env.prototype.provideFallbackReporter = function (reporter) {};

/**
 * @returns {boolean}
 */
jasmineExtern.Env.prototype.throwingExpectationFailures = function () {};

/**
 * @param {boolean} allow
 * @returns {void}
 */
jasmineExtern.Env.prototype.allowRespy = function (allow) {};

/**
 * @returns {boolean}
 */
jasmineExtern.Env.prototype.randomTests = function () {};

/**
 * @param {boolean} b
 * @returns {void}
 */
jasmineExtern.Env.prototype.randomizeTests = function (b) {};

/**
 * @returns {void}
 */
jasmineExtern.Env.prototype.clearReporters = function () {};

/**
 * @constructor
 */
jasmine.FakeTimer = function () {};

/**
 * @returns {void}
 */
jasmine.FakeTimer.prototype.reset = function () {};

/**
 * @param {number} millis
 * @returns {void}
 */
jasmine.FakeTimer.prototype.tick = function (millis) {};

/**
 * @param {number} oldMillis
 * @param {number} nowMillis
 * @returns {void}
 */
jasmine.FakeTimer.prototype.runFunctionsWithinRange = function (oldMillis, nowMillis) {};

/**
 * @param {*} timeoutKey
 * @param {function():void} funcToCall
 * @param {number} millis
 * @param {boolean} recurring
 * @returns {void}
 */
jasmine.FakeTimer.prototype.scheduleFunction = function (timeoutKey, funcToCall, millis, recurring) {};

/**
 * @constructor
 */
jasmine.HtmlReporter = function () {};

/**
 * @constructor
 */
jasmine.HtmlSpecFilter = function () {};

/**
 * @interface
 */
jasmineExtern.Result = function () {};

/**
 * @type {string}
 */
jasmineExtern.Result.prototype.type;

/**
 * @interface
 * @extends {jasmineExtern.Result}
 */
jasmineExtern.NestedResults = function () {};

/**
 * @type {string}
 */
jasmineExtern.NestedResults.prototype.description;

/**
 * @type {number}
 */
jasmineExtern.NestedResults.prototype.totalCount;

/**
 * @type {number}
 */
jasmineExtern.NestedResults.prototype.passedCount;

/**
 * @type {number}
 */
jasmineExtern.NestedResults.prototype.failedCount;

/**
 * @type {boolean}
 */
jasmineExtern.NestedResults.prototype.skipped;

/**
 * @param {jasmineExtern.NestedResults} result
 * @returns {void}
 */
jasmineExtern.NestedResults.prototype.rollupCounts = function (result) {};

/**
 * @param {*} values
 * @returns {void}
 */
jasmineExtern.NestedResults.prototype.log = function (values) {};

/**
 * @returns {Array<jasmineExtern.Result>}
 */
jasmineExtern.NestedResults.prototype.getItems = function () {};

/**
 * @param {jasmineExtern.Result} result
 * @returns {void}
 */
jasmineExtern.NestedResults.prototype.addResult = function (result) {};

/**
 * @returns {boolean}
 */
jasmineExtern.NestedResults.prototype.passed = function () {};

/**
 * @interface
 * @extends {jasmineExtern.Result}
 */
jasmineExtern.MessageResult = function () {};

/**
 * @type {*}
 */
jasmineExtern.MessageResult.prototype.values;

/**
 * @type {jasmineExtern.Trace}
 */
jasmineExtern.MessageResult.prototype.trace;

/**
 * @interface
 * @extends {jasmineExtern.Result}
 */
jasmineExtern.ExpectationResult = function () {};

/**
 * @type {string}
 */
jasmineExtern.ExpectationResult.prototype.matcherName;

/**
 * @returns {boolean}
 */
jasmineExtern.ExpectationResult.prototype.passed = function () {};

/**
 * @type {*}
 */
jasmineExtern.ExpectationResult.prototype.expected;

/**
 * @type {*}
 */
jasmineExtern.ExpectationResult.prototype.actual;

/**
 * @type {string}
 */
jasmineExtern.ExpectationResult.prototype.message;

/**
 * @type {jasmineExtern.Trace}
 */
jasmineExtern.ExpectationResult.prototype.trace;

/**
 * @param {{random: boolean, seed: string}} options
 * @constructor
 */
jasmine.Order = function (options) {};

/**
 * @type {boolean}
 */
jasmine.Order.prototype.random;

/**
 * @type {string}
 */
jasmine.Order.prototype.seed;

/**
 * @param {Array} items
 * @returns {Array}
 */
jasmine.Order.prototype.sort = function (items) {};

/**
 * @const
 */
jasmine.errors = {};

/**
 * @constructor
 * @extends {Error}
 */
jasmine.errors.ExpectationFailed = function () {};

/**
 * @type {*}
 */
jasmine.errors.ExpectationFailed.prototype.stack;

/**
 * @param {*} attrs
 * @constructor
 */
jasmine.TreeProcessor = function (attrs) {};

/**
 * @param {Function} done
 * @returns {void}
 */
jasmine.TreeProcessor.prototype.execute = function (done) {};

/**
 * @returns {*}
 */
jasmine.TreeProcessor.prototype.processTree = function () {};

/**
 * @typedef {{
 *   name: string,
 *   message: string,
 *   stack: *
 * }}
 */
jasmineExtern.Trace;

/**
 * @constructor
 */
jasmine.PrettyPrinter = function () {};

/**
 * @param {*} value
 * @returns {void}
 */
jasmine.PrettyPrinter.prototype.format = function (value) {};

/**
 * @param {*} obj
 * @param {function(string, boolean):void} fn
 * @returns {void}
 */
jasmine.PrettyPrinter.prototype.iterateObject = function (obj, fn) {};

/**
 * @param {*} value
 * @returns {void}
 */
jasmine.PrettyPrinter.prototype.emitScalar = function (value) {};

/**
 * @param {string} value
 * @returns {void}
 */
jasmine.PrettyPrinter.prototype.emitString = function (value) {};

/**
 * @param {Array} array
 * @returns {void}
 */
jasmine.PrettyPrinter.prototype.emitArray = function (array) {};

/**
 * @param {*} obj
 * @returns {void}
 */
jasmine.PrettyPrinter.prototype.emitObject = function (obj) {};

/**
 * @param {string} value
 * @returns {void}
 */
jasmine.PrettyPrinter.prototype.append = function (value) {};

/**
 * @constructor
 * @extends {jasmine.PrettyPrinter}
 */
jasmine.StringPrettyPrinter = function () {};

jasmine.Queue = function (env) {};
jasmine.Queue.prototype.env;
jasmine.Queue.prototype.ensured;
jasmine.Queue.prototype.blocks;
jasmine.Queue.prototype.running;
jasmine.Queue.prototype.index;
jasmine.Queue.prototype.offset;
jasmine.Queue.prototype.abort;
jasmine.Queue.prototype.addBefore = function (block, opt_ensure) {};
jasmine.Queue.prototype.add = function (block, opt_ensure) {};
jasmine.Queue.prototype.insertNext = function (block, opt_ensure) {};
jasmine.Queue.prototype.start = function (opt_onComplete) {};
jasmine.Queue.prototype.isRunning = function () {};
jasmine.Queue.prototype.next_ = function () {};
jasmine.Queue.prototype.results = function () {};

jasmine.Matchers = function (env, actual, spec, opt_isNot) {};
jasmine.Matchers.prototype.env;
jasmine.Matchers.prototype.actual;
jasmine.Matchers.prototype.spec;
jasmine.Matchers.prototype.isNot;
jasmine.Matchers.prototype.not;
jasmine.Matchers.prototype.Any;
jasmine.Matchers.prototype.message = function () {};
jasmine.Matchers.prototype.toBe = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toEqual = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toMatch = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeDefined = function (opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeUndefined = function (opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeNull = function (opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeNaN = function () {};
jasmine.Matchers.prototype.toBeTruthy = function (opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeFalsy = function (opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toHaveBeenCalled = function () {};
jasmine.Matchers.prototype.toHaveBeenCalledWith = function (params) {};
jasmine.Matchers.prototype.toHaveBeenCalledTimes = function (expected) {};
jasmine.Matchers.prototype.toContain = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeLessThan = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeLessThanOrEqual = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeGreaterThan = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeGreaterThanOrEqual = function (expected, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toBeCloseTo = function (expected, opt_precision, opt_expectationFailOutput) {};
jasmine.Matchers.prototype.toThrow = function (expected) {};
jasmine.Matchers.prototype.toThrowError = function (opt_expected, opt_message) {};

jasmine.ArrayLikeMatchers = function (env, actual, spec, opt_isNot) {};
jasmine.ArrayLikeMatchers.prototype.not;
jasmine.ArrayLikeMatchers.prototype.toBe = function (expected, opt_expectationFailOutput) {};
jasmine.ArrayLikeMatchers.prototype.toEqual = function (expected, opt_expectationFailOutput) {};
jasmine.ArrayLikeMatchers.prototype.toContain = function (expected, opt_expectationFailOutput) {};

jasmineExtern.Reporter = function () {};
jasmineExtern.Reporter.prototype.reportRunnerStarting = function (runner) {};
jasmineExtern.Reporter.prototype.reportRunnerResults = function (runner) {};
jasmineExtern.Reporter.prototype.reportSuiteResults = function (suite) {};
jasmineExtern.Reporter.prototype.reportSpecStarting = function (spec) {};
jasmineExtern.Reporter.prototype.reportSpecResults = function (spec) {};
jasmineExtern.Reporter.prototype.log = function (str) {};

jasmineExtern.MultiReporter = function () {};
jasmineExtern.MultiReporter.prototype.addReporter = function (reporter) {};

jasmineExtern.SuiteInfo;

jasmineExtern.CustomReportExpectation = function () {};
jasmineExtern.CustomReportExpectation.prototype.matcherName;
jasmineExtern.CustomReportExpectation.prototype.message;
jasmineExtern.CustomReportExpectation.prototype.passed;
jasmineExtern.CustomReportExpectation.prototype.stack;

jasmineExtern.FailedExpectation = function () {};
jasmineExtern.FailedExpectation.prototype.actual;
jasmineExtern.FailedExpectation.prototype.expected;

jasmineExtern.PassedExpectation = function () {};

jasmineExtern.CustomReporterResult;

jasmineExtern.RunDetails;

jasmineExtern.CustomReporter;

jasmine.Runner = function (env) {};
jasmine.Runner.prototype.execute = function () {};
jasmine.Runner.prototype.beforeEach = function (beforeEachFunction) {};
jasmine.Runner.prototype.afterEach = function (afterEachFunction) {};
jasmine.Runner.prototype.beforeAll = function (beforeAllFunction) {};
jasmine.Runner.prototype.afterAll = function (afterAllFunction) {};
jasmine.Runner.prototype.finishCallback = function () {};
jasmine.Runner.prototype.addSuite = function (suite) {};
jasmine.Runner.prototype.add = function (block) {};
jasmine.Runner.prototype.specs = function () {};
jasmine.Runner.prototype.suites = function () {};
jasmine.Runner.prototype.topLevelSuites = function () {};
jasmine.Runner.prototype.results = function () {};

/**
 * @typedef {function(jasmine.Spec=):void}
 */
jasmineExtern.SpecFunction;

jasmineExtern.SuiteOrSpec;

jasmine.Spec = function (env, suite, description) {};
jasmine.Spec.prototype.suite;
jasmine.Spec.prototype.afterCallbacks;
jasmine.Spec.prototype.spies_;
jasmine.Spec.prototype.results_;
jasmine.Spec.prototype.matchersClass;
jasmine.Spec.prototype.throwOnExpectationFailure;
jasmine.Spec.prototype.getFullName = function () {};
jasmine.Spec.prototype.results = function () {};
jasmine.Spec.prototype.log = function (arguments) {};
jasmine.Spec.prototype.runs = function (func) {};
jasmine.Spec.prototype.addToQueue = function (block) {};
jasmine.Spec.prototype.addMatcherResult = function (result) {};
jasmine.Spec.prototype.getResult = function () {};
jasmine.Spec.prototype.expect = function (actual) {};
jasmine.Spec.prototype.waits = function (timeout) {};
jasmine.Spec.prototype.waitsFor = function (latchFunction, opt_timeoutMessage, opt_timeout) {};
jasmine.Spec.prototype.fail = function (opt_e) {};
jasmine.Spec.prototype.getMatchersClass_ = function (opt_e) {};
jasmine.Spec.prototype.addMatchers = function (matchersPrototype) {};
jasmine.Spec.prototype.finishCallback = function () {};
jasmine.Spec.prototype.finish = function (opt_onComplete) {};
jasmine.Spec.prototype.after = function (doAfter) {};
jasmine.Spec.prototype.execute = function (opt_onComplete, opt_enabled) {};
jasmine.Spec.prototype.addBeforesAndAftersToQueue = function () {};
jasmine.Spec.prototype.explodes = function () {};
jasmine.Spec.prototype.spyOn = function (obj, methodName, ignoreMethodDoesntExist) {};
jasmine.Spec.prototype.spyOnProperty = function (object, property, accessType) {};
jasmine.Spec.prototype.removeAllSpies = function () {};

jasmineExtern.XSpec;
jasmineExtern.XSpec.prototype.id;
jasmineExtern.XSpec.prototype.runs = function () {};

jasmine.Suite = function (env, description, specDefinitions, parentSuite) {};
jasmine.Suite.prototype.parentSuite;
jasmine.Suite.prototype.getFullName = function () {};
jasmine.Suite.prototype.finish = function (opt_onComplete) {};
jasmine.Suite.prototype.beforeEach = function (beforeEachFunction) {};
jasmine.Suite.prototype.afterEach = function (afterEachFunction) {};
jasmine.Suite.prototype.beforeAll = function (beforeAllFunction) {};
jasmine.Suite.prototype.afterAll = function (afterAllFunction) {};
jasmine.Suite.prototype.results = function () {};
jasmine.Suite.prototype.add = function (suiteOrSpec) {};
jasmine.Suite.prototype.specs = function () {};
jasmine.Suite.prototype.suites = function () {};
jasmine.Suite.prototype.children = function () {};
jasmine.Suite.prototype.execute = function (opt_onComplete) {};

jasmineExtern.XSuite;
jasmineExtern.XSuite.prototype.execute = function () {};

/**
 * @interface
 * @extends {Function}
 */
jasmineExtern.Spy = function () {};
jasmineExtern.Spy.prototype.identity;
jasmineExtern.Spy.prototype.and;
jasmineExtern.Spy.prototype.calls;
jasmineExtern.Spy.prototype.mostRecentCall;
jasmineExtern.Spy.prototype.argsForCall;

jasmineExtern.SpyAnd;
jasmineExtern.SpyAnd.prototype.callThrough = function () {};
jasmineExtern.SpyAnd.prototype.returnValue = function (val) {};
jasmineExtern.SpyAnd.prototype.returnValues = function (values) {};
jasmineExtern.SpyAnd.prototype.callFake = function (fn) {};
jasmineExtern.SpyAnd.prototype.throwError = function (msg) {};
jasmineExtern.SpyAnd.prototype.stub = function () {};

jasmineExtern.Calls;
jasmineExtern.Calls.prototype.any = function () {};
jasmineExtern.Calls.prototype.count = function () {};
jasmineExtern.Calls.prototype.argsFor = function (index) {};
jasmineExtern.Calls.prototype.allArgs = function () {};
jasmineExtern.Calls.prototype.all = function () {};
jasmineExtern.Calls.prototype.mostRecent = function () {};
jasmineExtern.Calls.prototype.first = function () {};
jasmineExtern.Calls.prototype.reset = function () {};

jasmineExtern.CallInfo;
jasmineExtern.CallInfo.prototype.object;
jasmineExtern.CallInfo.prototype.args;
jasmineExtern.CallInfo.prototype.returnValue;

jasmineExtern.Util;
jasmineExtern.Util.prototype.inherit = function (childClass, parentClass) {};
jasmineExtern.Util.prototype.formatException = function (e) {};
jasmineExtern.Util.prototype.htmlEscape = function (str) {};
jasmineExtern.Util.prototype.argsToArray = function (args) {};
jasmineExtern.Util.prototype.extend = function (destination, source) {};

jasmine.JsApiReporter = function () {};
jasmine.JsApiReporter.prototype.started;
jasmine.JsApiReporter.prototype.finished;
jasmine.JsApiReporter.prototype.result;
jasmine.JsApiReporter.prototype.messages;
jasmine.JsApiReporter.prototype.runDetails;
jasmine.JsApiReporter.prototype.suites = function () {};
jasmine.JsApiReporter.prototype.summarize_ = function (suiteOrSpec) {};
jasmine.JsApiReporter.prototype.results = function () {};
jasmine.JsApiReporter.prototype.resultsForSpec = function (specId) {};
jasmine.JsApiReporter.prototype.log = function (str) {};
jasmine.JsApiReporter.prototype.resultsForSpecs = function (specIds) {};
jasmine.JsApiReporter.prototype.summarizeResult_ = function (result) {};

jasmine.HtmlReporter;
jasmine.HtmlSpecFilter;
jasmine.DEFAULT_TIMEOUT_INTERVAL;
jasmine.MAX_PRETTY_PRINT_DEPTH;