import React from 'react';
import {RootState} from "../Redux/redux-store";
import {connect} from "react-redux";
import Junior from "./Junior";
import {setLoading} from "../Redux/homeTask10Reduser";

let mapStateToProps = (state: RootState) => {

    return {
        loading: state.loadingForm.loading

    }
}
const JuniorContainer = connect(mapStateToProps, {setLoading})(Junior)
export default JuniorContainer;