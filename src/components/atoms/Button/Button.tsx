import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.white,
        fontSize: 14,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: '21px',
        textTransform: 'uppercase',
        borderRadius: 100,
        background: theme.palette.mainGradient,
        border: 'none',
        padding: '17px 56px',
        cursor: 'pointer',

        '&:disabled': {
            background: theme.palette.grey.main,
            cursor: 'default',
        },

        '&:active, &:focus': {
            outline: 'none',
        }
    },

}));

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props : React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const style = useStyles();

    return (
        <button className={style.button} {...props}>
            {props.children}
        </button>
    );
};

export default Button;
