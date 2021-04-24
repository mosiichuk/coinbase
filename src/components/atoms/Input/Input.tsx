import React, {FC, InputHTMLAttributes} from 'react';
import {makeStyles} from "@material-ui/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    label: string,
    multiline?: boolean,
}

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: '"Poppins",sans-serif',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px',
        padding: '19px 0 21px 20px',
        border: '1px solid #D1D1D1',
        borderRadius: 5,
        width: '100%',

        '&::placeholder': {
            color: '#2F2F2F',
        },

        'textarea&': {
            height: '190px',
        }
    },
}));

const Input: FC<InputProps> = ({label, required, multiline, ...props}: InputProps) => {
    const placeholder = required ? label + '*' : label;
    const classes = useStyles();

    return (
        <>
            {multiline
                ? <textarea placeholder={placeholder} required={required} className={classes.root} {...props}/>
                : <input placeholder={placeholder} required={required} className={classes.root} {...props}/>
            }
        </>
    );
};

export default Input;
