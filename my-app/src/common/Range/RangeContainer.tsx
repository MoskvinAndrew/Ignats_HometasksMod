import React from 'react';
import RangeFC from "./Range";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/redux-store";
import {rangeInitialStateType, setRangeValue} from "../Redux/homeTask11Range";


const RangeContainer = () => {

    let rangeValue = useSelector<RootState,rangeInitialStateType>(state=>state.rangeReducer)
    const dispatch = useDispatch();

    let onChangeRange = (valueRange:number) => {
        const action = setRangeValue(valueRange);
        dispatch(action);
    }

    return(
    <div>
    <RangeFC
        minValue={rangeValue.minValue}
        maxValue={rangeValue.maxValue}
        value={rangeValue.value}
        onChangeRange={onChangeRange}/>
    </div>
    )


}
export default RangeContainer;