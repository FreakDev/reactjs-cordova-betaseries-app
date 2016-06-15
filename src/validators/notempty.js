
export default (value, opt) => {

    var errors = [];

    if (! (value !== "" && value !== null && value !== undefined)) {
        errors.push('Should not be empty');
    }

    return errors;

}