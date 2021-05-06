import React, {FC} from 'react';
import MuiModal from "@material-ui/core/Modal";
import {ModalProps} from "@material-ui/core/Modal/Modal";
import {Box, makeStyles, Paper} from "@material-ui/core";
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop/Backdrop';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&:focus-visible': {
            outline: 'none',
        }
    },
    paper: {
        '&:focus-visible': {
            outline: 'none',
        }
    }
}));

const Modal: FC<ModalProps> = ({children, ...props}) => {
    const classes = useStyles();

    return (
        <MuiModal
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            {...props}
        >
            <Fade in={props.open}>
                <Box component={Paper} elevation={0} py={7} className={classes.paper}>
                    {children}
                </Box>
            </Fade>
        </MuiModal>
    );
};

export default Modal;
