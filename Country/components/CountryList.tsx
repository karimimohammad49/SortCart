

import CountryItem from "./CountryItem";

import classes from "./CountryList.module.css";

type CountryType={
    code:string;
    label:string;
    phone:string;
    suggested?:boolean;
}

type countryList={
    items:CountryType[];
}

const CountryList=(props:countryList)=>{
    if(!props.items || props.items.length === 0){
        return <h2>NOT FOUNDED COUNTRY CODE</h2>
    }

    return <div className={classes.countryList}>
    <CountryItem items={props.items}/>
    </div>
};

export default CountryList;