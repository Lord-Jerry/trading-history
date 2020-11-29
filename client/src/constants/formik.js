export const loginFormik = {
    initialValues: {
        email: '',
        password: '',
    },
    validate: (value) => {
        const errors = {};
        if (!value.email) errors.email = 'Email Address is required';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) errors.email = 'Invalid email address';
        if (!value.password) errors.password = 'Password is required';

        return errors;
    },
};
