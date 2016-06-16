
export default (value, opt) => {


    if (! (value !== "" && value !== null && value !== undefined)) {
        return ['Should not be empty'];
    }

    return [];

}