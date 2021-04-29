import React, {FC} from 'react';
import {PaginationRenderItemParams} from "@material-ui/lab/Pagination";
import {ButtonBase, fade, makeStyles} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 60,
        minHeight: 60,
        padding: '0px',
        border: '1px solid #E0E0E0',
        borderRadius: '100px',
        fontSize: 16,
        color: theme.palette.common.black,
        textAlign: 'center',
        boxSizing: 'border-box',
    },

    page: {
        transition: theme.transitions.create(['color', 'background-color'], {
            duration: theme.transitions.duration.short,
        }),
        '&:hover': {
            backgroundColor: theme.palette.action.hover,

            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&$focusVisible': {
            backgroundColor: theme.palette.action.focus,
        },
        '&$selected': {
            background: theme.palette.primary.secondaryGradient,
            color: theme.palette.common.white,
            border: '1px solid transparent',

            '&:hover, &$focusVisible': {
                backgroundColor: fade(
                    theme.palette.action.selected,
                    theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
                ),

                '@media (hover: none)': {
                    backgroundColor: theme.palette.action.selected,
                },
            },
            '&$disabled': {
                opacity: 1,
                color: theme.palette.action.disabled,
                backgroundColor: theme.palette.action.selected,
            },
        },
        '&$disabled': {
            opacity: theme.palette.action.disabledOpacity,
        },
    },

    ellipsis: {
        verticalAlign: 'middle',
        '&$disabled': {
            opacity: theme.palette.action.disabledOpacity,
        },
    },
    navButton: {
        padding: '0 32px',
    },
    selected: {},
    disabled: {},
    focusVisible: {},
}));


const PaginationItem: FC<PaginationRenderItemParams> = ({page, type, disabled, selected, onClick, ...other}) => {
    const classes = useStyles();
    const isEllipsis = type === 'start-ellipsis' || type === 'end-ellipsis';
    const isPrevOrNextButton = type === 'next' || type === 'previous';

    return (
        <ButtonBase
            disabled={disabled || isEllipsis}
            focusVisibleClassName={classes.focusVisible}
            className={clsx(
                classes.root,
                {
                    [classes.page]: !isEllipsis,
                    [classes.disabled]: disabled && !isEllipsis,
                    [classes.selected]: selected,
                    [classes.ellipsis]: isEllipsis,
                    [classes.navButton]: isPrevOrNextButton
                },
            )}
            onClick={!isEllipsis ? onClick : undefined}
            {...other}
        >
            {type === 'page' && page}
            {(type === 'next' || type === 'previous') && type}
            {isEllipsis && '…'}
        </ButtonBase>
    );
};

export default PaginationItem;
