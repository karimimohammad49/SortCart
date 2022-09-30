import {Fragment} from "react";

import Cart from "../Shaired/UI/Cart";
import {CountryType} from "../pages/country";

type countryItem={
  readonly items: CountryType[];
}

const CountryItem=(props:countryItem)=>{

    const countryData=props.items.map((item,index)=>(
        <Cart header={
            <Fragment>
                <div>
                     <img src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 1x`}
                          alt="pic"
                          width="40"
                          height="40"
                          loading="lazy"
                     />
                </div>
                <h2 style={{fontSize:'18px',textTransform:'capitalize'}}>{`${item.label} (${item.code})`}</h2>
            </Fragment>
        }
              content={`CODE: +${item.phone}`} key={index}/>
    ));

    return <Fragment>
        {countryData}
    </Fragment>
};

export default CountryItem;