import { useState } from "react";
import SelectComponent from "../../Common/SelectComponent/SelectComponent";
import { useProductsActions } from "../Providers/ProductProvider"
import Styles from "./Styles.module.css";
import SearchBar from '../../Common/SearchBar/SearchBar';


const Filter = () => {
    const dispatch = useProductsActions();
    const [value, setValue] = useState("");
    const [sort, setSort] = useState("");

    const filterOptions = [
        { value: "", label: "All" },
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "X", label: "X" },
        { value: "XL", label: "XL" },
        { value: "XXL", label: "XXL" },
    ];

    const sortByPriceOptions = [
        { value: "Default", label: "Default" },
        { value: "Additive", label: "Additive" },
        { value: "Decreasing", label: "Decreasing" },
    ];

    const sizeFilterHandler = (e) => {
        const value = e.target.value;
        dispatch({ type: "filter", value });
        dispatch({ type: "sort", value: sort });
        setValue(value);
    }

    const sortHandler = (e) => {
        const value = e.target.value;
        dispatch({ type: "sort", value });
        setSort(value);
    }

    return (
        <section className={Styles.container}>
            <SearchBar filter={value} sort={sort} />
            <div className={Styles.selectElements}>
                <span>filtered product based on: </span>
                {/* <div>
                <span>filter by size:</span>
                <select
                    className={Styles.selectBox}
                    onChange={(e) => sizeFilterHandler(e)}
                    value={value}
                >
                    <option value="">All</option>
                    <option value="S">S</option>
                    <option value="X">X</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div> */}


                {/* <div>
                <span>sort by price:</span>
                <select
                    className={Styles.selectBox}
                    onChange={sortHandler}
                    value={sort}
                >
                    <option value="Default">Default</option>
                    <option value="Additive">Additive</option>
                    <option value="Decreasing">decreasing</option>
                </select>
            </div> */}



                <SelectComponent
                    value={value}
                    onChange={sizeFilterHandler}
                    options={filterOptions}
                    title="filter by size"
                />

                <SelectComponent
                    value={sort}
                    onChange={sortHandler}
                    options={sortByPriceOptions}
                    title="sort by price"
                />

            </div>
        </section>
    );
}

export default Filter;