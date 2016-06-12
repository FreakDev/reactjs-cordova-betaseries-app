
export default (value, opt) => {

    opt.minLength = opt.minLength || 0;

    if (value.length < opt.minLength) {
        return ["too short"];
    }

    if (opt.maxLength && value.length >= opt.maxLength) {
        return ["too long"];
    }

    return [];

}