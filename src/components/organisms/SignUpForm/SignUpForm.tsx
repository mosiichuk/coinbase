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

interface SingUpFormProps {
    changeForm?: () => void,
}

const SingUpForm: FC<SingUpFormProps> = ({changeForm}) => {
    const classes = useStyles();

    return (
        <Box component='form' maxWidth={350} textAlign='center'>
            <Box mb={3}>
                <Box component={'p'} className={classes.title}>
                    Sign up
                </Box>

                <Typography variant='body1'>
                    There’s no charge upon registration
                </Typography>
            </Box>

            <Box component={Input} label="Full Name" type="text" id='fullName' required mb={4}/>
            <Box component={Input} label="Email" type="email" id='email' required mb={4}/>
            <Box component={Input} label="Password" type="password" id='password' required mb={4}/>
            <Box component={Input} label="Confirm Password" type="password" id='confirmPassword' required mb={5}/>

            <Button type='submit'>
                Signup
            </Button>

            <Box component={'p'}>
                Already a member? <a onClick={changeForm} className={classes.link}>Login</a>
            </Box>
        </Box>
    );
};

export default SingUpForm;
