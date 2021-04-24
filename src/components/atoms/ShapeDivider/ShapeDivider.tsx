import React, {FC, PropsWithChildren} from 'react';
import {makeStyles, Theme} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles<Theme, ShapeDividerProps>((theme) => ({
    shapeDivider: {
        position: 'absolute',
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,

        '& svg': {
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: ({height}) => height,
        },
        '& path': {
            fill: theme.palette.common.white
        }
    },
    bottom: {
        bottom: 0,
    },
    top: {
        top: 0,
    }
}));

interface ShapeDividerProps {
    top?: boolean,
    bottom?: boolean,
    height: number,
}

const ShapeDivider: FC<ShapeDividerProps & PropsWithChildren<{}>> = ({top, bottom, height, children}) => {
    const classes = useStyles({height} as ShapeDividerProps);

    return (
        <div className={clsx(classes.shapeDivider, top && classes.top, bottom && classes.bottom)}>
            {children}
        </div>
    );
};

export default ShapeDivider;
