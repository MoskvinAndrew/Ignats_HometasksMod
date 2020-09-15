import React, {ChangeEvent, useCallback, useState} from 'react';
import rangeStylee from "./CustomRange.module.css";

type CustomRangeType = {
    minValue: number,
    maxValue: number,
    value: number,
    onChangeRange: (valueRange: number) => void,

}

const CustomRange = React.memo((props: CustomRangeType) => {

    let [range, setRange] = useState<number>(0)

   let onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let result = e.currentTarget.value;
        setRange(+result);
        props.onChangeRange(range);
    },[props.onChangeRange]);


    return (
        <div className={rangeStylee.range_2}>
            <span>{props.minValue}</span>
            <input type="range" min={props.minValue}
                   max={props.maxValue}
                   step="1" value={props.value}
                   onChange={onChangeHandler}
                   list="custom-list-2">
            </input>
              <span>{props.value}/{props.maxValue}</span>

        </div>
        )
})
export default CustomRange;