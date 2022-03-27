import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import ContactsTable from '../components/table/TableContacts';
import { getAuthData, getContactsData } from '../selectors';

function ContactsPage() {
    const user = useSelector(getAuthData)
    const contacts = useSelector(getContactsData)

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            maxWidth: 1200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} >
            <Header user={user} />
            {
                contacts && <ContactsTable contacts={contacts} userId={user._id}/>
            }
        </Box>
    );
}

export default ContactsPage;
