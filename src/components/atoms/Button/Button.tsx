import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    button: {
        padding: '17px 56px',
        background: theme.palette.primary.secondaryGradient,
        color: theme.palette.common.white,
        fontSize: 14,
        lineHeight: '21px',
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: 100,
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
        background: theme.palette.common.white,

        '& span': {
            background: theme.palette.primary.secondaryGradient,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        }
    }
}));

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    accent?: boolean,
}

const Button: FC<ButtonProps> = ({accent, ...props}: ButtonProps) => {
    const classes = useStyles();

    return (
        <button className={clsx(classes.button, accent && classes.buttonAccent)} {...props}>
            <span>{props.children}</span>
        </button>
    );
};

export default Button;
