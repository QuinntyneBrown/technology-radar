export function Component(config: any = {}) {
    return function (cls) {
        config.component = cls;
        cls.config = config;
    };
}