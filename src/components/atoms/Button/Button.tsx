import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.common.white,
        fontSize: 14,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: '21px',
        textTransform: 'uppercase',
        borderRadius: 100,
        background: theme.palette.primary.gradient,
        border: 'none',
        padding: '17px 56px',
        cursor: 'pointer',

        '&:disabled': {
            background: theme.palette.grey[200],
            cursor: 'default',
        },

        '&:active, &:focus': {
            outline: 'none',
        },
    },

    buttonAccent: {
        position: 'relative',
        background: theme.palette.primary.gradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',

        '&::after': {
            content: '""',
            position: 'absolute',
            borderRadius: 100,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.common.white,
            zIndex: -1,
        },
    }
}));

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    accent?: boolean,
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const classes = useStyles();

    return (
        <button className={clsx(classes.button, props.accent && classes.buttonAccent)} {...props}>
            {props.children}
        </button>
    );
};

export default Button;
