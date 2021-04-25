import React, {FC, InputHTMLAttributes} from 'react';
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    label: string,
    multiline?: boolean,
    accent?: boolean,
}

const useStyles = makeStyles((theme) => ({
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
        },
        '&:focus': {
            outline: 'none',
        }
    },
    accent: {
        padding: '17px 0 16px 26px',
        border: 'double 1px transparent',
        borderRadius: '100px',
        backgroundImage: `linear-gradient(white, white), ${theme.palette.primary.gradient}`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
    },
}));

const Input: FC<InputProps> = ({label, required, multiline, accent, ...props}: InputProps) => {
    const placeholder = required ? label + '*' : label;
    const classes = useStyles();

    return (
        <>
            {multiline
                ? <textarea placeholder={placeholder} required={required} className={clsx(classes.root, accent && classes.accent)} {...props}/>
                : <input placeholder={placeholder} required={required} className={clsx(classes.root, accent && classes.accent)} {...props}/>
            }
        </>
    );
};

export default Input;
