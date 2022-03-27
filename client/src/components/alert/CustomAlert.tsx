
import React, { useEffect } from 'react';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

type AlertType = {
    message: string
    type: string
}
type PropsAlertType = {
    alert: AlertType
}
function MyApp(props: PropsAlertType) {
    const { message, type } = props.alert
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const handleClickVariant = (variant: VariantType) => () => {
        enqueueSnackbar(message, { variant });
    };

    useEffect(() => {
        dispatch(handleClickVariant(type as VariantType))
    }, [message, type])

    return (
        <React.Fragment>
        </React.Fragment>
    );
}

export default function CustomAlert(props: PropsAlertType) {
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'left', vertical: 'top' }} autoHideDuration={2000}>
            <MyApp alert={props.alert} />
        </SnackbarProvider >
    );
}
