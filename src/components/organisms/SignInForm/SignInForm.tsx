import React, {FC} from 'react';
import Input from "components/atoms/Input/Input";
import {Box, makeStyles, Typography} from "@material-ui/core";
import Button from "components/atoms/Button/Button";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: '0 0 15px',
        background: theme.palette.primary.secondaryGradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 24,
        lineHeight: '36px',
    },
    link: {
        color: theme.palette.common.black,
        textDecoration: 'underline',
        fontWeight: theme.typography.fontWeightBold,
        cursor: 'pointer',
    }
}));

interface SingInFormProps {
    changeForm?: () => void,
}

const SingInForm: FC<SingInFormProps> = ({changeForm}) => {
    const classes = useStyles();

    return (
        <Box component='form' maxWidth={350} textAlign='center'>
            <Box mb={3}>
                <Box component={'p'} className={classes.title}>
                    Welcome back!
                </Box>

                <Typography variant='body1'>
                    Kindly fill in your login details to proceed
                </Typography>
            </Box>

            <Box component={Input} label="Full Name" type="text" id='fullName' required mb={4}/>
            <Box component={Input} label="Email" type="email" id='email' required mb={2}/>

            <Box textAlign="right" fontSize={12} mb={4}>
                <p>i forgot my password?</p>
            </Box>

            <Button type='submit'>
                Login
            </Button>

            <Box component={'p'}>
                Don’t have an account yet? <a onClick={changeForm} className={classes.link}>Sign Up</a>
            </Box>
        </Box>
    );
};

export default SingInForm;
