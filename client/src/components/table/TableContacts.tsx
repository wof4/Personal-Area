import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ContactDataType } from '../../types';
import { updateContactDataTc, deleteContactTc } from '../../redux/thuncks/contactsThuncks';
import { useDispatch, useSelector } from 'react-redux';
import ContactModal from '../modals/ContactModal';
import { getSearchString } from '../../selectors';
import { Tooltip } from '@mui/material';

type PropsType = {
    contacts: Array<ContactDataType>
    userId: string
}

export default function ContactsTable(props: PropsType) {
    const { contacts, userId } = props
    const dispatch = useDispatch()
    const searchString = useSelector(getSearchString)
    const [open, setOpen] = React.useState(false);
    const [contactList, setContactList] = React.useState<Array<ContactDataType>>(contacts);
    const [contact, setContact] = React.useState<ContactDataType>({} as ContactDataType);

    const handleCloseModal = () => {
        setOpen(false);
    };

    const deleteContact = (contactId: string) => {
        dispatch(deleteContactTc(contactId, userId));
        setOpen(false);
    };

    const setChangetData = (data: ContactDataType) => {
        dispatch(updateContactDataTc(data, userId));
        setOpen(false);
    };

    const createNewContact = () => { }
    const filterContactsBySearch = () => {
        if (contacts) {
            const filterContacts = contacts?.filter((item) => item.name.includes(searchString))
            setContactList(filterContacts)
        }
    }

    React.useEffect(() => {
        filterContactsBySearch()
    }, [searchString, contacts])

    return (
        <TableContainer component={Paper}>
            {open && <ContactModal
                open={open}
                handleCloseModal={handleCloseModal}
                contact={contact}
                setChangetData={setChangetData}
                deleteContact={deleteContact}
                createNewContact={createNewContact}
            />}
            <Table>
                <TableHead>
                    <TableRow  >
                        <TableCell sx={{ backgroundColor: '#ddd' }} size="medium" align="left">Name</TableCell>
                        <TableCell sx={{ backgroundColor: '#ddd' }} size="medium" align="left">Phone</TableCell>
                        <TableCell sx={{ backgroundColor: '#ddd' }} size="medium" align="left">Email</TableCell>
                        <TableCell sx={{ backgroundColor: '#ddd' }} size="medium" align="left">Telegram</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contactList.map((contact) => (
                        <Tooltip title="click to edit contact"
                            placement="bottom-start">
                            <TableRow
                                onClick={() => {
                                    setContact(contact);
                                    setOpen(true);
                                }}
                                hover={true}
                                key={contact._id}
                            >
                                <TableCell align="left" component="th" scope="row">
                                    {contact.name}
                                </TableCell>
                                <TableCell align="left">{contact.phone}</TableCell>
                                <TableCell align="left">{contact.email}</TableCell>
                                <TableCell align="left">{contact.telegram}</TableCell>
                            </TableRow>
                        </Tooltip>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}