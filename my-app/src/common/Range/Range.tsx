import React, {ChangeEvent, useCallback, useState} from 'react';
import rangeStyle from "./Range.module.css";
import CustomRange from "../CustomRange/customRange";
import AirbnbSlider from "../CustomRange/DoubleRange";
import CustomizedSlider from "../CustomRange/DoubleRange";
import DoubleRangeContainer from "./DoubleRangeContainer";

type RangeFCType = {
    minValue: number,
    maxValue: number,
    value: number,
    onChangeRange: (valueRange: number) => void,

}

const RangeFC = React.memo((props: RangeFCType) => {

    let [range, setRange] = useState<number>(0)

    let onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let result = e.currentTarget.value;
        setRange(+result);
        props.onChangeRange(range);
    }, [props.onChangeRange])


    return (
        <div className={rangeStyle.rangeContainer}>

            <div className={rangeStyle.text}>
                <h2>Одинадцатая домашка:</h2>
            </div>

            <div className={rangeStyle.rangeInput}>
                <span>{props.minValue}</span>

                <input type="range"
                       value={props.value}
                       max={props.maxValue}
                       min={props.minValue}
                       onChange={onChangeHandler}/>
            </div>
            <span>{props.value}/{props.maxValue}</span>


            <CustomRange value={props.value}
                         maxValue={props.maxValue}
                         minValue={props.minValue}
                         onChangeRange={props.onChangeRange}/>

            <DoubleRangeContainer/>
        </div>
    )
})
export default RangeFC;