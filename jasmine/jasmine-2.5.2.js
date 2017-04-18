/**
 * https://github.com/jasmine/jasmine
 */

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/jasmine/index.d.ts

var jasmineExtern = {};
var jasmine = {};

function describe(description, specDefinitions) {}
function fdescribe(description, specDefinitions) {}
function xdescribe(description, specDefinitions) {}

function it(expectation, opt_assertion, opt_timeout) {}
function fit(expectation, opt_assertion, opt_timeout) {}
function xit(expectation, opt_assertion, opt_timeout) {}

function pending(opt_reason) {}

function beforeEach(action, opt_timeout) {}
function afterEach(action, opt_timeout) {}

function beforeAll(action, opt_timeout) {}
function afterAll(action, opt_timeout) {}

function expect(actual) {}

function fail(opt_e) {}

jasmineExtern.DoneFn;
jasmineExtern.DoneFn.prototype.fail = function (opt_message) {};

function spyOn(object, method) {}

function spyOnProperty(object, property, accessType) {}

function runs(asyncMethod) {}
function waitsFor(latchMethod, opt_failureMessage, opt_timeout) {}
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
















































jasmineExtern.Util;
jasmineExtern.Util.prototype.inherit = function (childClass, parentClass) {};
jasmineExtern.Util.prototype.formatException = function (e) {};
jasmineExtern.Util.prototype.htmlEscape = function (str) {};
jasmineExtern.Util.prototype.argsToArray = function (args) {};
jasmineExtern.Util.prototype.extend = function (destination, source) {};

jasmineExtern.XSpec;
jasmineExtern.XSpec.prototype.id;
jasmineExtern.XSpec.prototype.runs = function () {};

jasmineExtern.XSuite;
jasmineExtern.XSuite.prototype.execute = function () {};

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

jasmine.Spy = function () {};
jasmine.Spy.prototype.identity;
jasmine.Spy.prototype.and;
jasmine.Spy.prototype.calls;
jasmine.Spy.prototype.mostRecentCall;
jasmine.Spy.prototype.argsForCall;