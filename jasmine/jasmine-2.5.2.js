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

jasmine.clock = function () {};

jasmine.any = function (aclass) {};

jasmine.anything = function () {};

jasmine.arrayContaining = function (sample) {};
jasmine.objectContaining = function (sample) {};
jasmine.createSpy = function (name, opt_originalFn) {};

jasmine.createSpyObj = function (baseName, methodNames) {};

jasmine.pp = function (value) {};

jasmine.getEnv = function () {};

jasmine.addCustomEqualityTester = function (equalityTester) {};

jasmine.addMatchers = function (matchers) {};

jasmine.stringMatching = function (str) {};

jasmine.formatErrorMsg = function (domain, usage) {};

jasmine.Any = function (expectedClass) {};
jasmine.Any.prototype.jasmineMatches = function (other) {};
jasmine.Any.prototype.jasmineToString = function () {};

jasmine.ArrayContaining = function (sample) {};
jasmine.ArrayContaining.prototype.asymmetricMatch = function (other) {};
jasmine.ArrayContaining.prototype.jasmineToString = function () {};

jasmine.ObjectContaining = function (sample) {};
jasmine.ObjectContaining.prototype.jasmineMatches = function (other, mismatchKeys, mismatchValues) {};
jasmine.ObjectContaining.prototype.jasmineToString = function () {};

jasmine.Block = function (env, func, spec) {};
jasmine.Block.prototype.execute = function (onComplete) {};

jasmine.WaitsBlock = function (env, timeout, spec) {};

jasmine.WaitsForBlock = function (env, timeout, latchFunction, message, spec) {};

jasmineExtern.Clock;
jasmineExtern.Clock.prototype.install = function () {};
jasmineExtern.Clock.prototype.uninstall = function () {};
jasmineExtern.Clock.prototype.tick = function (ms) {};
jasmineExtern.Clock.prototype.mockDate = function (opt_date) {};
jasmineExtern.Clock.prototype.withMock = function (func) {};

jasmineExtern.CustomEqualityTester;

jasmineExtern.CustomMatcher;
jasmineExtern.CustomMatcher.prototype.compare = function (actual, expected) {};

jasmineExtern.CustomMatcherFactory;

jasmineExtern.CustomMatcherFactories;

jasmineExtern.CustomMatcherResult;

jasmineExtern.MatchersUtil;
jasmineExtern.MatchersUtil.prototype.equals = function (a, b, opt_customTesters) {};
jasmineExtern.MatchersUtil.prototype.contains = function (haystack, needle, opt_customTesters) {};
jasmineExtern.MatchersUtil.prototype.buildFailureMessage = function (matcherName, isNot, actual, expected) {};

jasmineExtern.Env;
jasmineExtern.Env.prototype.setTimeout;
jasmineExtern.Env.prototype.clearTimeout;
jasmineExtern.Env.prototype.setInterval;
jasmineExtern.Env.prototype.clearInterval;
jasmineExtern.Env.prototype.updateInterval;
jasmineExtern.Env.prototype.currentSpec;
jasmineExtern.Env.prototype.matchersClass;
jasmineExtern.Env.prototype.version = function () {};
jasmineExtern.Env.prototype.versionString = function () {};
jasmineExtern.Env.prototype.nextSpecId = function () {};
jasmineExtern.Env.prototype.addReporter = function (reporter) {};
jasmineExtern.Env.prototype.execute = function () {};
jasmineExtern.Env.prototype.describe = function (description, specDefinitions) {};
jasmineExtern.Env.prototype.beforeEach = function (beforeEachFunction) {};
jasmineExtern.Env.prototype.beforeAll = function (beforeAllFunction) {};
jasmineExtern.Env.prototype.currentRunner = function () {};
jasmineExtern.Env.prototype.afterEach = function (afterEachFunction) {};
jasmineExtern.Env.prototype.afterAll = function (afterAllFunction) {};
jasmineExtern.Env.prototype.xdescribe = function (description, specDefinitions) {};
jasmineExtern.Env.prototype.it = function (description, func) {};
jasmineExtern.Env.prototype.xit = function (description, func) {};
jasmineExtern.Env.prototype.compareRegExps_ = function (a, b, mismatchKeys, mismatchValues) {};
jasmineExtern.Env.prototype.compareObjects_ = function (a, b, mismatchKeys, mismatchValues) {};
jasmineExtern.Env.prototype.equals_ = function (a, b, mismatchKeys, mismatchValues) {};
jasmineExtern.Env.prototype.contains_ = function (haystack, needle) {};
jasmineExtern.Env.prototype.addCustomEqualityTester = function (equalityTester) {};
jasmineExtern.Env.prototype.addMatchers = function (matchers) {};
jasmineExtern.Env.prototype.specFilter = function (spec) {};
jasmineExtern.Env.prototype.throwOnExpectationFailure = function (value) {};
jasmineExtern.Env.prototype.seed = function (seed) {};
jasmineExtern.Env.prototype.provideFallbackReporter = function (reporter) {};
jasmineExtern.Env.prototype.throwingExpectationFailures = function () {};
jasmineExtern.Env.prototype.allowRespy = function (allow) {};
jasmineExtern.Env.prototype.randomTests = function () {};
jasmineExtern.Env.prototype.randomizeTests = function (b) {};
jasmineExtern.Env.prototype.clearReporters = function () {};

jasmine.FakeTimer = function () {};
jasmine.FakeTimer.prototype.reset = function () {};
jasmine.FakeTimer.prototype.tick = function (millis) {};
jasmine.FakeTimer.prototype.runFunctionsWithinRange = function (oldMillis, nowMillis) {};
jasmine.FakeTimer.prototype.scheduleFunction = function (timeoutKey, funcToCall, millis, recurring) {};

jasmine.HtmlReporter = function () {};

jasmine.HtmlSpecFilter = function () {};

jasmineExtern.Result = function () {};
jasmineExtern.Result.prototype.type;

jasmineExtern.NestedResults = function () {};
jasmineExtern.NestedResults.prototype.description;
jasmineExtern.NestedResults.prototype.totalCount;
jasmineExtern.NestedResults.prototype.passedCount;
jasmineExtern.NestedResults.prototype.failedCount;
jasmineExtern.NestedResults.prototype.skipped;
jasmineExtern.NestedResults.prototype.rollupCounts = function (result) {};
jasmineExtern.NestedResults.prototype.log = function (values) {};
jasmineExtern.NestedResults.prototype.getItems = function () {};
jasmineExtern.NestedResults.prototype.addResult = function (result) {};
jasmineExtern.NestedResults.prototype.passed = function () {};

jasmineExtern.MessageResult = function () {};
jasmineExtern.MessageResult.prototype.values;
jasmineExtern.MessageResult.prototype.trace;

jasmineExtern.ExpectationResult = function () {};
jasmineExtern.ExpectationResult.prototype.matcherName;
jasmineExtern.ExpectationResult.prototype.passed = function () {};
jasmineExtern.ExpectationResult.prototype.expected;
jasmineExtern.ExpectationResult.prototype.actual;
jasmineExtern.ExpectationResult.prototype.message;
jasmineExtern.ExpectationResult.prototype.trace;

jasmine.Order = function (options) {};
jasmine.Order.prototype.random;
jasmine.Order.prototype.seed;
jasmine.Order.prototype.sort = function (items) {};

jasmine.errors = {};
jasmine.errors.ExpectationFailed = function () {};
jasmine.errors.ExpectationFailed.prototype.stack;

jasmine.TreeProcessor = function (attrs) {};
jasmine.TreeProcessor.prototype.execute = function (done) {};
jasmine.TreeProcessor.prototype.processTree = function () {};

jasmineExtern.Trace;

jasmine.PrettyPrinter = function () {};
jasmine.PrettyPrinter.prototype.format = function (value) {};
jasmine.PrettyPrinter.prototype.iterateObject = function (obj, fn) {};
jasmine.PrettyPrinter.prototype.emitScalar = function (value) {};
jasmine.PrettyPrinter.prototype.emitString = function (value) {};
jasmine.PrettyPrinter.prototype.emitArray = function (array) {};
jasmine.PrettyPrinter.prototype.emitObject = function (obj) {};
jasmine.PrettyPrinter.prototype.append = function (value) {};

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