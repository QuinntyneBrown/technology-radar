function CanActivate(fnDefinition) {
    return function (cls) {
        cls.prototype.canActivate = function () {
            return fnDefinition;
        };
    };
}
exports.CanActivate = CanActivate;
