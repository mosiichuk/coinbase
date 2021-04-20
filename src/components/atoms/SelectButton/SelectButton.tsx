import React, {FC} from 'react';
import Image from "next/image";
import {Button, makeStyles} from "@material-ui/core";

interface SelectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string,
}

const useStyles = makeStyles((theme) => ({
    dropdownArrow: {
        margin: '0 0 0 6px',
    },
    button: {
        color: theme.palette.common.black,
        fontSize: 14,
        lineHeight: '21px',
        fontWeight: theme.typography.fontWeightBold,

        '&:hover': {
            background: theme.palette.primary.gradient,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        }
    }
}));

const SelectButton: FC<SelectButtonProps> = ({label, ...props}: SelectButtonProps) => {
    const classes = useStyles();

    return (
        <Button onClick={props.onClick} className={classes.button} disableRipple>
            {label}

            <Image
                src='/icons/dropdown-arrow.svg'
                width={8}
                height={6}
                className={classes.dropdownArrow}
            />
        </Button>
    );
};

export default SelectButton;
