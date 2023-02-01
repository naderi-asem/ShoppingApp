import styles from "./styles.module.css";

const SelectComponent = ({ options, title, ...rest }) => {
    return (
        <div className={styles.selectContainer}>
            <span>{title}</span>
            <select {...rest} >
                {
                    options.map(option => <option key={option.label} value={option.value}>{option.label}</option>)
                }
            </select>
        </div>
    );
}

export default SelectComponent;