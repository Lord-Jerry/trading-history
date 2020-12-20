export const loginFormik = {
    initialValues: {
        email: '',
        password: '',
    },
    validate: (value) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email))
            errors.email = 'Invalid email address';
        if (!value.email) errors.email = 'Email Address is required';
        if (!value.password) errors.password = 'Password is required';

        return errors;
    },
};

export const signUpFormik = {
    initialValues: {
        fname: '',
        lname: '',
        email: '',
        password: '',
    },
    validate: (value) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email))
            errors.email = 'Invalid email address';
        if (!value.email) errors.email = 'Email Address is required';
        if (!value.password) errors.password = 'Password is required';
        if (!value.fname) errors.fname = 'First name is required';
        if (!value.lname) errors.lname = 'Last name is required';

        return errors;
    },
};
