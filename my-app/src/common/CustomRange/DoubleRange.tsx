import React, {useCallback} from 'react';
import {withStyles, makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import DRange from "./DoubleRange.module.css"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 300 + theme.spacing(3) * 2,
        },
        margin: {
            height: theme.spacing(3),
        },
    }),
);

interface Props {
    children: React.ReactElement;
    open: boolean;
    value: number;
    rangeDblValue: Array<number>

}

function ValueLabelComponent(props: Props) {
    const {children, open, value} = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}


const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);


function AirbnbThumbComponent(props: any) {
    return (
        <span {...props}>
      <span className="bar"/>
      <span className="bar"/>
      <span className="bar"/>
    </span>
    );
}

type CustomizedSliderType = {
    rangeDblValue: Array<number>,
    onDblChangeRange: (DRvalue: Array<number>) => void,

}

export default function CustomizedSlider(props: CustomizedSliderType) {
    const classes = useStyles();


    let onRangeChanged = useCallback((event: React.ChangeEvent<{}>, value: Array<number>) => {
        let rr = value;
        props.onDblChangeRange(rr);

    }, [props.onDblChangeRange])


    return (
        <div className={DRange.container}>
            <div className={classes.root}>
                <Typography gutterBottom>Double Range</Typography>
                <AirbnbSlider
                    ThumbComponent={AirbnbThumbComponent}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    defaultValue={[props.rangeDblValue[0], props.rangeDblValue[1]]}
                    // onChange={onRangeChanged}
                    max={1000}
                    min={10}
                />
                От {props.rangeDblValue[0]} до {props.rangeDblValue[1]}
            </div>
        </div>
    );
}
