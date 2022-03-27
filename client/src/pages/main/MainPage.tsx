import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import CustomAlert from '../../components/alert/CustomAlert';
import { IsAuth, getAlert } from '../../selectors';
import ContactsPage from '../../contacts/ContactsTable';
import LoginPage from '../login/LoginPage';


function MainPage() {
  const isAuth = useSelector(IsAuth);
  const alert = useSelector(getAlert)

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {alert && <CustomAlert alert={alert} />}
      {isAuth ? <ContactsPage /> : <LoginPage />}
    </Box>
  );
}

export default MainPage;
