import React, {ChangeEvent, MouseEvent, useEffect} from "react";



export const User = () => {

    //let [value, setValue] = useEffect()

    const searchUser = (event: MouseEvent<HTMLButtonElement>) => {
   //     setValue(event.currentTarget.value)
    }

    const nameChanged= ()=>{
        console.log("name change")
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log("age changed" + event.currentTarget.value)
    }

    const focusLost = () => {
        console.log("focus off")
    }
    return <div> <textarea onChange={nameChanged} onBlur={focusLost}>Hello</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name={"delete"} onClick={searchUser}>search</button>

    </div>
}