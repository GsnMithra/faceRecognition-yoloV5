const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.username)) {
        errors.email = "Username is required...!";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required...!";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
