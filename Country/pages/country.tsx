import React, {Fragment, useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";

import CountryList from "../components/CountryList";
import SelectElement from "../Shaired/Element/SelectElement";

import classes from "./countery.module.css";

type CountryType={
    code:string;
    label:string;
    phone:string;
    suggested?:boolean;
}

type country={
    country:CountryType[];
}

const Country= (props:country)=>{
    const [dataCountries,setDataCountries]=useState<CountryType[]>(props.country);

    const router=useRouter();

    let copyCountry:CountryType[]=[ ...props.country];

    const changeHandler=async (event : React.ChangeEvent<HTMLSelectElement>)=>{
        const value=event.target.value;
        try {
            if(value !== "none") {
                await router.push(`/?sort=${value}`);
            }
            else
                await router.push('');
        }
        catch (err){
            console.log("can not make query!.")
        }
    }

    const clickHandler=()=>{
        let routerQuery=router.query?.sort;
        if(routerQuery === "ASC") {
            copyCountry.sort(  (a, b)=> {
                if(a.label > b.label)
                    return 1;

                if(a.label < b.label)
                    return -1;

                    return 0;
            });
        }
        else if(routerQuery === "DESC") {
                copyCountry.sort(  (a, b)=> {
                    if(a.label > b.label)
                        return -1;

                    if(a.label < b.label)
                        return 1;

                        return 0;
                });
        }

        setDataCountries(copyCountry);
    };

    const changeInputHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const valueInput=event.target.value.toLowerCase();
        const searchData=copyCountry.filter(item=>{
            if(item.label.toLowerCase().includes(valueInput))
                return item;
        });
        copyCountry=searchData;
        searchData && setDataCountries(copyCountry);

        !!searchData &&  setDataCountries(searchData);



    };


    return <Fragment>
                 <div className={classes.selectElement}>
                 <label htmlFor="search" className={classes.element_label}>Search: </label>
                 <input type="search" name="search" id="search" onChange={changeInputHandler} className={classes.element_search}/>
                     <SelectElement value="none" onChange={changeHandler} label="Sort: " name="sort"
                className={classes.element}
                />
                 <button onClick={clickHandler} className={classes.selectElement__button}>Filter</button>
             </div>

        <CountryList items={dataCountries}/>
    </Fragment>

};

export default Country;