/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */

"use strict";

// We get the metro runServer signature here and create the new config out of it
let convertOldToNew = (() => {
  var _ref = _asyncToGenerator(function*(_ref2) {
    let config = _ref2.config;
    var _ref2$resetCache = _ref2.resetCache;
    let resetCache = _ref2$resetCache === undefined ? false : _ref2$resetCache;
    var _ref2$maxWorkers = _ref2.maxWorkers;
    let maxWorkers =
        _ref2$maxWorkers === undefined ? getMaxWorkers() : _ref2$maxWorkers,
      minifierPath = _ref2.minifierPath;
    var _ref2$port = _ref2.port;
    let port = _ref2$port === undefined ? null : _ref2$port;
    var _ref2$reporter = _ref2.reporter;
    let reporter =
      _ref2$reporter === undefined
        ? new TerminalReporter(new Terminal(process.stdout))
        : _ref2$reporter;
    const getBlacklistRE = config.getBlacklistRE,
      cacheStores = config.cacheStores,
      createModuleIdFactory = config.createModuleIdFactory,
      cacheVersion = config.cacheVersion,
      getProjectRoot = config.getProjectRoot,
      getWatchFolders = config.getWatchFolders,
      getTransformModulePath = config.getTransformModulePath,
      resolveRequest = config.resolveRequest,
      getAssetExts = config.getAssetExts,
      getPlatforms = config.getPlatforms,
      getProvidesModuleNodeModules = config.getProvidesModuleNodeModules,
      getResolverMainFields = config.getResolverMainFields,
      getSourceExts = config.getSourceExts,
      hasteImplModulePath = config.hasteImplModulePath,
      dynamicDepsInPackages = config.dynamicDepsInPackages,
      getPolyfillModuleNames = config.getPolyfillModuleNames,
      getAsyncRequireModulePath = config.getAsyncRequireModulePath,
      getRunModuleStatement = config.getRunModuleStatement,
      getPolyfills = config.getPolyfills,
      postProcessBundleSourcemap = config.postProcessBundleSourcemap,
      getModulesRunBeforeMainModule = config.getModulesRunBeforeMainModule,
      getUseGlobalHotkey = config.getUseGlobalHotkey,
      enhanceMiddleware = config.enhanceMiddleware,
      assetRegistryPath = config.assetRegistryPath,
      getEnableBabelRCLookup = config.getEnableBabelRCLookup,
      getTransformOptions = config.getTransformOptions,
      postMinifyProcess = config.postMinifyProcess,
      getWorkerPath = config.getWorkerPath,
      extraNodeModules = config.extraNodeModules,
      transformVariants = config.transformVariants,
      processModuleFilter = config.processModuleFilter;

    const defaultConfig = yield getDefaultConfig(getProjectRoot());

    const assetExts = defaultConfig.resolver.assetExts.concat(
      (getAssetExts && getAssetExts()) || []
    );

    const sourceExts = defaultConfig.resolver.sourceExts.concat(
      (getSourceExts && getSourceExts()) || []
    );

    const platforms =
      (getPlatforms && getPlatforms()) || defaultConfig.resolver.platforms;

    const providesModuleNodeModules =
      typeof getProvidesModuleNodeModules === "function"
        ? getProvidesModuleNodeModules()
        : defaultConfig.resolver.providesModuleNodeModules;

    const watchFolders = getWatchFolders();

    return {
      resolver: {
        assetExts,
        platforms,
        providesModuleNodeModules,
        resolverMainFields: getResolverMainFields(),
        sourceExts,
        hasteImplModulePath,
        extraNodeModules,
        resolveRequest,
        blacklistRE: getBlacklistRE()
          ? getBlacklistRE()
          : defaultConfig.resolver.blacklistRE,
        useWatchman: true
      },

      serializer: {
        createModuleIdFactory:
          createModuleIdFactory ||
          defaultConfig.serializer.createModuleIdFactory,
        polyfillModuleNames: getPolyfillModuleNames(),
        getRunModuleStatement,
        getPolyfills,
        postProcessBundleSourcemap,
        processModuleFilter:
          processModuleFilter || defaultConfig.serializer.processModuleFilter,
        getModulesRunBeforeMainModule,
        experimentalSerializerHook: function() {}
      },

      server: {
        useGlobalHotkey: getUseGlobalHotkey(),
        port,
        enableVisualizer: false,
        enhanceMiddleware
      },

      transformer: {
        assetPlugins: defaultConfig.transformer.assetPlugins,
        assetRegistryPath,
        asyncRequireModulePath: getAsyncRequireModulePath(),
        babelTransformerPath: getTransformModulePath(),
        dynamicDepsInPackages,
        enableBabelRCLookup: getEnableBabelRCLookup(),
        enableBabelRuntime: true,
        getTransformOptions,
        minifierConfig: defaultConfig.transformer.minifierConfig,
        minifierPath: minifierPath || defaultConfig.transformer.minifierPath,
        optimizationSizeLimit: 150 * 1024, // 150 KiB enforced for old configs.
        postMinifyProcess,
        transformVariants: transformVariants
          ? transformVariants()
          : defaultConfig.transformer.transformVariants,
        workerPath: getWorkerPath()
      },

      reporter,
      cacheStores,
      cacheVersion,
      projectRoot: getProjectRoot(),
      watchFolders,
      transformerPath: defaultConfig.transformerPath,
      resetCache,
      maxWorkers
    };
  });
  return function convertOldToNew(_x) {
    return _ref.apply(this, arguments);
  };
})();
function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step("next", value);
            },
            function(err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}
const TerminalReporter = require("metro/src/lib/TerminalReporter");
const getDefaultConfig = require("./defaults");
const getMaxWorkers = require("metro/src/lib/getMaxWorkers");
var _require = require("metro-core");
const Terminal = _require.Terminal;

module.exports = {
  convertOldToNew
};
