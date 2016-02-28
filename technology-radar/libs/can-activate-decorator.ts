export function CanActivate(fnDefinition: Array<any>) {
    return function (cls) {
        cls.prototype.canActivate = () => {
            return fnDefinition
        };
    };
}