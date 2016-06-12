
export default (value, opt) => {

    if (opt.isInt && value.match(/^[0-9]*$/) || value.match(/^[0-9\.]*$/)) {

        if (opt.minValue && parseFloat(value, 10) < opt.minValue) {
            return ["too short"];
        }

        if (opt.maxValue && parseFloat(value, 10) >= opt.maxValue) {
            return ["too long"];
        }
    } else {
        return ["not a number"];
    }

    return [];

}