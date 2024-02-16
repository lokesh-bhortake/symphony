export const validateSignUpForm = (values) => {
    let errors = {}
    if(!values.username.trim()) {
        errors.username = 'Username required'
    }

    errors = { ...errors, ...validateLogInForm(values) };

    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }

    return errors;
}

export const validateLogInForm = (values) => {
    let errors = {}
    if(!values.email) {
        errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }

    return errors
}
