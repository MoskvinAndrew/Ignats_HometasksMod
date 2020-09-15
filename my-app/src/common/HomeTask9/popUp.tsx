import React, {MouseEventHandler} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import pop from "./pop.module.css";

type MouseOverPopoverType = {
    watch: string,
    dateValue: string
}

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',

    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: "#d7d460",
        fontSize: "large",
        marginLeft: (50)
    },
}));

export let MouseOverPopover = React.memo((props: MouseOverPopoverType) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <div className={pop.timeCount}> {"Время в Симферополе:" + " " + props.watch}</div>
            </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',

                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{'Сегодня' + ' ' + props.dateValue}</Typography>
            </Popover>
        </div>
    );
})