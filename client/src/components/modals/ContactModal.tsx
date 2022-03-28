import React, { memo, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ContactDataType } from '../../types';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { getAlert } from '../../selectors';
import ContactFields from '../fields/ContactFields';


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
  contact: ContactDataType
  handleCloseModal: () => void
  setChangetData: (data: ContactDataType) => void
  deleteContact: (contactId: string) => void
  createNewContact: (data: ContactDataType) => void
}

function NewContactModal(props: PropsType) {

  const {
    open, contact, handleCloseModal, setChangetData, deleteContact, createNewContact
  } = props;
  const alert = useSelector(getAlert)

  const [values, setValues] = React.useState<ContactDataType>(contact);

  useEffect(() => {
    setValues(contact)
  }, [contact])

  const handleChange = (prop: keyof ContactDataType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const addTitleText = 'CREATE NEW CONTACT';
  const changeTitleText = 'EDIT CONTACT';
  const newContact = (!contact.hasOwnProperty("_id"))
  const saveButtonText = newContact ? 'CREATE' : 'EDIT';
  const titleText = newContact ? addTitleText : changeTitleText
  const buttonSend = newContact ? createNewContact : setChangetData;
  const disabled = !(values && values.name && values.name.length >=3)

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
            <CancelIcon
              color="warning"
              fontSize='large' />
          </IconButton>
          <ContactFields
            values={values}
            alert={alert}
            isLoading={false}
            handleChange={handleChange}
            disabled={disabled}
          />
          <Grid
            container
            margin="16px"
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            {!newContact ?
              <Grid item md={4} xs={4}>
                <Button 
                  onClick={() => deleteContact(contact._id || '')}
                  variant="contained" color="error">
                  DELETE
                </Button>
              </Grid>
              : null
            }
            <Grid item md={4} xs={2}>
              <Button
                disabled={disabled}
                onClick={() => buttonSend(values)}
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

export default NewContactModal;



