
export default (value, opt) => {


    if (! (value !== "" && value !== null && value !== undefined)) {
        console.log('not empty test value : "' + value + '"');
        return ['Should not be empty'];
    }

    return [];

}