import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import ContactsTable from '../components/table/TableContacts';
import Header from '../components/header/Header';
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
            <Header user={user} contactsCounter={contacts.length}/>
            {
                contacts && <ContactsTable contacts={contacts} userId={user._id}/>
            }
        </Box>
    );
}

export default ContactsPage;
