import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleChange, value }) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleChange}
            defaultValue={value}/>
        </div>
    )
}

export default Input