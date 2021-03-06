import React, {ChangeEvent, RefObject, useCallback} from 'react';
import {ArrayForRadio} from "../JuniorsFolder/Junior";

type RadioTypes = {
    value: Array<ArrayForRadio>,
    onRadioChange: (id: string) => void,
    name: string

}


const Radio = React.memo((props: RadioTypes) => {

    // let radioButton = React.createRef<HTMLTextAreaElement>();

    let onStatusChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.id;
        props.onRadioChange(newIsDoneValue)
    },[props.onRadioChange])

    let inputs = props.value.map((i) => <div key={i.id}>

        <label>{i.item}
            <input type="radio"

                   name={props.name}
                   id={i.id}
                   value={i.item}
                   onChange={onStatusChangeHandler}
            />
            {/*<label htmlFor={i.id}>{i.item}</label>*/}
        </label>
    </div>)


    return (

        <div>

            <p>Выберите персонажа:</p>
            {inputs}

        </div>
    )
})

export default Radio;