import React from 'react'
import { useDispatch } from 'react-redux';
import SearchField from '../search/SearchField';
import ContactModal from '../modals/ContactModal';
import UserModal from '../modals/UserModal';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { updateUserDataTc, deleteUsertTc } from '../../redux/thuncks/userThuncks';
import { createNewContactTc } from '../../redux/thuncks/contactsThuncks';
import { Fab, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { ContactDataType, UserDataType } from '../../types';
import { actions } from '../../redux/reducers/mainReducer';

type PropsType = {
    user: UserDataType
}
const Item = styled(Paper)(() => ({
    backgroundColor: '#efefefd6',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '6px',
}));

const Header = (props: PropsType) => {
    const { user } = props
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [openContact, setOpenContact] = React.useState(false);


    const handleCloseModal = () => {
        setOpen(false);
        setOpenContact(false)
    };
    const createNewContact = (data: ContactDataType) => {
        dispatch(createNewContactTc(data, user._id))
        handleCloseModal()
    }

    const deleteContact = (contactId: string) => {
        dispatch(deleteUsertTc(user._id));
        handleCloseModal()
    };

    const setChangetUserData = (data: UserDataType) => {
        dispatch(updateUserDataTc(data));
        handleCloseModal()
    };

    const setChangetContactData = (data: ContactDataType) => {
        handleCloseModal()
    };

    const setSearchString = (searchString: string) => {
        dispatch(actions.setSearchString(searchString))
    }

    return (
        <Box sx={{
            width: '100%',
            border: '1px solid #d1d1d1',
            borderRadius: 1,
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Stack direction="row" width='100%' display='flex' justifyContent='space-around'>
                <Box sx={{ display: 'flex' }}>
                    <Item sx={{ margin: 1 }} >{user.name}</Item>
                    <Tooltip title="edit your data" placement="bottom">
                        <Fab sx={{ margin: 1 }} size="small" color="success" aria-label="add"
                            onClick={() => { setOpen(true) }}
                        >
                            <CreateIcon />
                        </Fab>
                    </Tooltip>
                </Box>
                <Tooltip title="create new contact" placement="bottom">
                    <Fab sx={{ margin: 1 }} size="small" color="primary" aria-label="add"
                        onClick={() => { setOpenContact(true) }}
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>

            </Stack>
            <SearchField
                setSearchString={setSearchString}
            />
            {open && <UserModal
                open={open}
                user={user}
                handleCloseModal={handleCloseModal}
                setChangetData={setChangetUserData}
                deleteContact={deleteContact}
            />}
            <ContactModal
                open={openContact}
                contact={{} as ContactDataType}
                handleCloseModal={handleCloseModal}
                deleteContact={deleteContact}
                setChangetData={setChangetContactData}
                createNewContact={createNewContact}
            />
        </Box>
    )
}

export default Header;