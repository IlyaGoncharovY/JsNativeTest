import React from "react";

type LessonType = {
    title: string
}

export type ManType = {
    name: string,
    age: number,
    lessons: LessonType[],
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    tittle: string
    man: ManType
    food:string[]
    car:{model:string}
}

// 40 минута

export const ManComponents: React.FC<PropsType> = ({tittle,man, ...props}) => {

   // const {tittle, man, ...restProps} = props

   // const {tittle} = props
   // const {name} = props.man

   // const {tittle, man:{name}} = props
   // const {tittle, man} = props



    return <div>
        <h1>{tittle}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}