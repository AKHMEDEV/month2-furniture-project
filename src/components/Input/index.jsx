import React from 'react'
import { StyledInput } from './Input.styles'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './PhoneNumber.sytles.css'

const Input = ({
    type,
    value,
    onChange,
    styles = null,
    placeholder = '',
}) => {
    if (type === 'fio') {
        return (
            <StyledInput
                style={styles}
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder || 'Full Name'}
            />
        )
    }

    if (type === 'phoneNumber') {
        return (
            <PhoneInput
                style={styles}
                defaultCountry="UZ"
                value={value}
                onChange={onChange}
                className='phoneNumberInput'
                placeholder={placeholder || 'Phone Number'}
            />
        )
    }

    if (type === 'email') {
        return (
            <StyledInput
                style={styles}
                type='email'
                value={value}
                onChange={onChange}
                placeholder={placeholder || 'Email'}
            />
        )
    }

    return null
}

export default Input
