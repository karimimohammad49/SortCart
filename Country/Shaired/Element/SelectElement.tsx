import React, {Fragment} from "react";

type selectElement={
    value:'ASC' | 'DESC' | "none";
    onChange:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
    label:string;
    name:string;
    className?:string;
}

const SelectElement=(props:selectElement)=>{
    return <div className={props.className}>
        <label htmlFor={props.name}>{props.label}</label>
    <select defaultValue={props.value} name={props.name} id={props.name} onChange={props.onChange}>
        <option value="none"/>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
    </select>
    </div>
};

export default SelectElement;