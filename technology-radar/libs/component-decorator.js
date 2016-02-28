function Component(config) {
    if (config === void 0) { config = {}; }
    return function (cls) {
        config.component = cls;
        cls.config = config;
    };
}
exports.Component = Component;
