import React from 'react';
import Fields from '../../components/fields/UserFields';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingStatus} from '../../selectors';
import { sendUserDataToEnterTc } from '../../redux/thuncks/mainThuncks';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import LoadingButton from '@mui/lab/LoadingButton';
import EditIcon from '@mui/icons-material/Edit';
import { DataEnterType, EventType, UserDataType } from '../../types';

const LoginPage = () => {
    const isLoading = useSelector(getLoadingStatus)
    const dispatch = useDispatch()
    const [values, setValues] = React.useState<DataEnterType>(
        { name: '', password: '' }
    );
    const [entrance, setEntrance] = React.useState<string>('');
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    function handleClickSend(type: string) {
        dispatch(sendUserDataToEnterTc(values, type))
        setEntrance(type)
    }

    const handleChange =
        (prop: keyof UserDataType) => (event: EventType) => {
            setValues({ ...values, [prop]: event.target.value })
        };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const disabled = (values.name.length <=2 || values.password.length <=2)

    return (
        <div >
            <Box sx={{ textAlign: 'center' }}>
                <Fields
                    values={values}
                    isLoading={isLoading}
                    showPassword={showPassword}
                    handleChange={handleChange}
                    handleClickShowPassword={() => handleClickShowPassword()}
                    disabled={disabled}
                />
                {
                    (entrance === '' || entrance === 'login' || !isLoading)
                    &&
                    <LoadingButton
                        sx={{ m: "10px" }}
                        onClick={() => handleClickSend("login")}
                        endIcon={<LoginIcon />}
                        loading={isLoading}
                        loadingPosition="end"
                        variant="contained"
                        disabled={disabled}
                    >
                        Login
                    </LoadingButton>
                }
                {
                    (entrance === '' || entrance === 'register' || !isLoading)
                    &&
                    <LoadingButton
                        disabled={disabled}
                        sx={{ m: "10px" }}
                        onClick={() => { handleClickSend("register") }}
                        endIcon={<EditIcon />}
                        loading={isLoading}
                        loadingPosition="end"
                        variant="contained"
                        color="success"
                    >
                        REGISTER
                    </LoadingButton>
                }
            </Box>
        </div>
    );
};

export default LoginPage;
