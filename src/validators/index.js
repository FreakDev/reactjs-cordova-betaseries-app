
import length from './length';
import isNumber from './isnumber';

var validators = {
    length,
    isNumber
}

function combineValidators () {
    var args = Array.prototype.slice.call(arguments);

    return function (value, opt) {
        var errors = [];
        args.map ( (validatorName) => {
            errors = [...errors, ...(validators[validatorName].call(validators[validatorName], value, opt[validatorName] || {}))];
        });

        return errors;
    }
}

export { combineValidators, length, isNumber };