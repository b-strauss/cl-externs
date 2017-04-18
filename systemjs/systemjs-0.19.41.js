/**
 * https://github.com/systemjs/systemjs
 */

var SystemJSExtern;

/**
 * @typedef {*}
 */
SystemJSExtern.Module;

/**
 * @typedef {{
 *   format: (string|undefined),
 *   exports: (string|undefined),
 *   deps: (Array<string>|undefined),
 *   globals: (Object<string, string>|undefined),
 *   loader: (string|undefined),
 *   sourceMap: (boolean|undefined),
 *   scriptLoad: (boolean|undefined),
 *   nonce: (string|undefined),
 *   integrity: (string|undefined),
 *   crossOrigin: (string|undefined),
 *   esmExports: (boolean|undefined)
 * }}
 */
SystemJSExtern.MetaConfig;

/**
 * @typedef {{
 *   main: (string|undefined),
 *   format: (string|undefined),
 *   defaultExtension: (string|boolean|undefined),
 *   map: (Object<string, string>|undefined),
 *   meta: (Object<string, SystemJSExtern.MetaConfig>|undefined)
 * }}
 */
SystemJSExtern.PackageConfig;

/**
 * @typedef {{
 *   baseURL: (string|undefined),
 *   babelOptions: (*|undefined),
 *   bundles: (Object<string, Array<string>>|undefined),
 *   defaultJSExtensions: (boolean|undefined),
 *   depCache: (Object<string, Array<string>>|undefined),
 *   map: (Object<string, string>|undefined),
 *   meta: (Object<string, SystemJSExtern.MetaConfig>|undefined),
 *   packages: (Object<string, SystemJSExtern.PackageConfig>|undefined),
 *   paths: (Object<string, string>|undefined),
 *   traceurOptions: (*|undefined),
 *   transpiler: (string|undefined),
 *   typescriptOptions: (*|undefined)
 * }}
 */
SystemJSExtern.Config;

/**
 * @type {SystemJS.constructor}
 */
var SystemJS;

/**
 * @constructor
 */
SystemJS.constructor = function () {
};

SystemJS.constructor.prototype.amdDefine = function () {
};

SystemJS.constructor.prototype.amdRequire = function () {
};

/**
 * @param {SystemJSExtern.Config} config
 * @returns {void}
 */
SystemJS.constructor.prototype.config = function (config) {
};

/**
 * @param {string} moduleName
 * @returns {boolean}
 */
SystemJS.constructor.prototype.delete = function (moduleName) {
};

/**
 * @param {string} moduleName
 * @returns {SystemJSExtern.Module}
 */
SystemJS.constructor.prototype.get = function (moduleName) {
};

/**
 * @param {string} moduleName
 * @returns {boolean}
 */
SystemJS.constructor.prototype.has = function (moduleName) {
};

/**
 * @param {string} moduleName
 * @param {string=} opt_normalizedParentName
 * @returns {Promise<SystemJSExtern.Module>}
 */
SystemJS.constructor.prototype.import = function (moduleName, opt_normalizedParentName) {
};

/**
 * @param {*} object
 * @returns {SystemJSExtern.Module}
 */
SystemJS.constructor.prototype.newModule = function (object) {
};

/**
 * @param {string} name
 * @param {Array<string>=} opt_deps
 * @param {Function=} opt_declare
 * @returns {void}
 */
SystemJS.constructor.prototype.register = function (name, opt_deps, opt_declare) {
};

/**
 * @param {string} name
 * @param {Array<string>=} opt_deps
 * @param {boolean=} opt_executingRequire
 * @param {Function=} opt_declare
 * @returns {void}
 */
SystemJS.constructor.prototype.registerDynamic = function (name, opt_deps, opt_executingRequire, opt_declare) {
};

/**
 * @param {string} moduleName
 * @param {SystemJSExtern.Module} module
 * @returns {void}
 */
SystemJS.constructor.prototype.set = function (moduleName, module) {
};

SystemJS.constructor.prototype._nodeRequire = function () {
};
