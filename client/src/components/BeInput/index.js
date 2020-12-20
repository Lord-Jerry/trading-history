import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputGroup, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react';

// eslint-disable-next-line arrow-body-style
const BeInput = ({
    name,
    type,
    fontWeight,
    placeholder,
    size,
    label,
    value,
    onChange,
    onBlur,
    errorMessage,
}) => {
    // eslint-disable-next-line no-unused-vars
    const test = 89;
    return (
        <FormControl id={name} isInvalid={errorMessage && true}>
            <FormLabel fontWeight={fontWeight}>{label}</FormLabel>
            <InputGroup>
                <Input
                    placeholder={placeholder}
                    size={size}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    errorBorderColor="red.300"
                    _autofill="off"
                />
            </InputGroup>
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

BeInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fontWeight: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    errorMessage: PropTypes.string,
};

BeInput.defaultProps = {
    fontWeight: '300',
    type: 'text',
    onChange: () => null,
    onBlur: () => null,
};

export default BeInput;
