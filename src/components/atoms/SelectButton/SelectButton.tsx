import React, {forwardRef} from 'react';
import Image from "next/image";
import {Box, Button, makeStyles} from "@material-ui/core";

interface SelectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string,
}

const useStyles = makeStyles((theme) => ({
    dropdownArrow: {
        margin: '0 0 0 6px',
    },
    button: {
        textTransform: 'capitalize',
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

const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(({label, ...props}, ref) => {
    const classes = useStyles();

    return (
        <Button ref={ref} onClick={props.onClick} className={classes.button} disableRipple>
            {label}

            <Box className={classes.dropdownArrow}>
                <Image
                    src='/icons/dropdown-arrow.svg'
                    width={8}
                    height={6}
                />
            </Box>
        </Button>
    );
})

export default SelectButton;
