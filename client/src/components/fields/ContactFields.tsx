import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { AlertType, ContactDataType, EventType } from '../../types';
import { NAME_ERROR } from '../../constants';
import { PhoneMaskCustom } from '../mask/PhoneMask';


type PropsType = {
    values: ContactDataType
    alert: AlertType
    isLoading: boolean
    handleChange: (prop: keyof ContactDataType) => (event: EventType) => void
    disabled: boolean
}

const Fields = (props: PropsType) => {
    const { values, isLoading, handleChange, disabled } = props
    const [blurValue, setBlurValue] = React.useState<boolean>(false);

    const handleBlur = (value: boolean) => {
        setBlurValue(value)
    }


    return (
        <>
            <TextField
                error={blurValue && disabled}
                onBlur={(e) => handleBlur(e.target.value.length <= 2)}
                required
                label={'Name'}
                value={values.name}
                sx={{ m: 1, width: '43ch' }}
                disabled={isLoading}
                onChange={handleChange('name')}
                helperText={NAME_ERROR}
            />
            <TextField
                value={values.phone}
                label="Phone"
                sx={{ m: 1, width: '43ch' }}
                disabled={isLoading}
                onChange={handleChange('phone')}
                InputProps={{
                    // по поводу any, к сожалению так и написано в доке
                    inputComponent: PhoneMaskCustom as any,
                    startAdornment:
                        <InputAdornment position="start">
                            {!values.phone && "+7"}
                        </InputAdornment>
                }}
            />
            <TextField
                value={values.email}
                label="Email"
                sx={{ m: 1, width: '43ch' }}
                disabled={isLoading}
                defaultValue="www."
                onChange={handleChange('email')}
            />
            <TextField
                value={values.telegram}
                label="Telegram"
                sx={{ m: 1, width: '43ch' }}
                disabled={isLoading}
                defaultValue="https://"
                onChange={handleChange('telegram')}
            />
        </>
    )
}

export default Fields;

