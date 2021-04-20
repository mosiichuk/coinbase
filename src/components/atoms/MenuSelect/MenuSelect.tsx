import React, {FC} from 'react';
import Image from 'next/image';
import {Button, ClickAwayListener, Grow, makeStyles, MenuItem, MenuList, Paper, Popper} from "@material-ui/core";
import SelectButton from "../SelectButton/SelectButton";

const useStyles = makeStyles((theme) => ({
    dropdownList: {
        overflow: 'hidden',
        padding: '0',
        borderRadius: 5,
        border: '1px solid #E0E0E0',
    },
    paper: {
        boxShadow: 'none',
    },
    menuItem: {
        color: theme.palette.common.black,
        fontSize: 12,
        minWidth: 130,
        padding: '11px 0px 11px 12px',

        '&:hover': {
            color: theme.palette.common.white,
            background: theme.palette.primary.gradient,
        }
    },
}));

const MenuSelect: FC = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const classes = useStyles();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        setOpen(false);
    };

    return (
        <div>
            <SelectButton
                ref={anchorRef}
                onClick={handleToggle}
                label="Sell Bitcoin/ Giftcard"
            />

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                transition
                disablePortal
                placement={'right-start'}
                popperOptions={{
                    modifiers: {
                        offset: {
                            offset: '25, 0',
                        },
                        keepTogether: {
                            enabled: false,
                        }
                    },
                }}>
                {({TransitionProps}) => (
                    <Grow {...TransitionProps}>
                        <>
                            <Image
                                src='/icons/triangle.svg'
                                width={15}
                                height={11}
                            />
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>

                                    <MenuList autoFocusItem={open} id="menu-list-grow"
                                              className={classes.dropdownList}>
                                        <MenuItem
                                            onClick={handleClose}
                                            classes={{root: classes.menuItem}}>
                                            Sell Bitcoin
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleClose}
                                            classes={{root: classes.menuItem}}>
                                            Sell Giftcard
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default MenuSelect;
