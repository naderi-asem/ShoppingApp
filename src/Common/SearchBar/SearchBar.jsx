import { useState } from "react";
import { useProductsActions } from "../../Components/Providers/ProductProvider";
import Styles from "./Styles.module.css"

const SearchBar = ({filter, sort}) => {
    const dispatch = useProductsActions();
    const [value, setValue] = useState('');
    console.log(sort);

    const searchHandler = (e) => {
        dispatch({type: "filter", value: filter});
        dispatch({type: "search", event: e});
        dispatch({type: "sort", value: sort})
        setValue(e.target.value);
    }
    
    return ( 
        <div className={Styles.formControl}>
            <span>search for</span>
            <input type="text" placeholder="search for..." onChange={searchHandler} value={value} />
        </div>
     );
}
 
export default SearchBar;