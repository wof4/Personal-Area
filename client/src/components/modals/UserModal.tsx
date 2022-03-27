import React, { memo, useEffect } from 'react';
import { EventType, UserDataType } from '../../types';
import UserFields from '../fields/UserFields';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: '20px 0',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'

};

type PropsType = {
    open: boolean
    user: UserDataType
    handleCloseModal: () => void
    setChangetData: (data: UserDataType) => void
    deleteContact: (contactId: string) => void
}

function UserModal(props: PropsType) {
    const { open, user, handleCloseModal, setChangetData, deleteContact } = props;
    const [values, setValues] = React.useState<UserDataType>(user);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    useEffect(() => {
        setValues(user)
    }, [user])

    const handleChange = (prop: keyof UserDataType) => (event: EventType) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const titleText = 'EDIT CONTACT';
    const saveButtonText = 'EDIT'
    const disabled = (values.name.length <= 2 || values.password.length <= 2)


    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Grid
                        sx={{ padding: '14px 0' }}
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography
                            variant="body1"
                            color="text.secondary">
                            {titleText}
                        </Typography>
                    </Grid>
                    <IconButton
                        sx={{ position: "absolute", right: 0, top: 0 }}
                        onClick={() => handleCloseModal()}
                    >
                        <CancelIcon color="warning" fontSize='large' />
                    </IconButton>
                    <UserFields
                        values={values}
                        showPassword={showPassword}
                        isLoading={false}
                        handleChange={handleChange}
                        handleClickShowPassword={handleClickShowPassword}
                        disabled={disabled}
                        
                    />
                    <Grid
                        container
                        margin="16px"
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <Grid item md={4} xs={4}>
                            <Button
                                disabled={disabled}
                                onClick={() => deleteContact(user._id)}
                                variant="contained" color="error">
                                DELETE
                            </Button>
                        </Grid>
                        <Grid item md={4} xs={2}>
                            <Button
                                disabled={disabled}
                                onClick={() => setChangetData(values)}
                                variant="contained" color="success">
                                {saveButtonText}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Modal>
    );
}

export default memo(UserModal);



