import React, { memo } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { getSearchString } from '../../selectors';


type PropsType = {
    setSearchString: (searchString: string) => void
}
const SearchField = (props: PropsType) => {

    const { setSearchString } = props
    const searchString = useSelector(getSearchString)
    const handleChange = (searchString: string) => {
        setSearchString(searchString)
    }

    return (
        <Box sx={{ width: '70%', position: 'relative' }}>
            <TextField
                size='small'
                value={searchString}
                label={'Search contact...'}
                sx={{ m: 1, width: '100%', position: 'relative' }}
                onChange={(e) => handleChange(e.target.value)}
            />
            {searchString &&
                <IconButton
                    sx={{ position: "absolute", right: '-6px', top: 10 }}
                    onClick={() => { handleChange('') }}
                >
                    <ClearIcon color="primary" fontSize='small' />
                </IconButton>
            }
        </Box>
    )
}

export default memo(SearchField);
