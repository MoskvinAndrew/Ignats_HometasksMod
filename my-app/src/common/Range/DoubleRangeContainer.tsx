import React from 'react';
import CustomizedSlider from "../CustomRange/DoubleRange";
import {RootState} from "../Redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {rangeInitialStateType, setRangeValue} from "../Redux/homeTask11Range";
import {dblRangeInitialStateType, setDBLRangeValue} from "../Redux/DoubleRangeReduser";



const DoubleRangeContainer = () => {

    let rangeDblValue = useSelector<RootState,Array<number>>(state=>state.rangeDblReducer.DRvalue)
    const dispatch = useDispatch();

    let onDblChangeRange = (DRvalue:Array<number>) => {
        const action = setDBLRangeValue(DRvalue);
        dispatch(action);

    };


    return(
        <div>
            <CustomizedSlider rangeDblValue={rangeDblValue}
                              onDblChangeRange={onDblChangeRange}
            />
        </div>
    )


}
export default DoubleRangeContainer;