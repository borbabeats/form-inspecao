function TextArea({ text, name, placeholder, value, handleChange, id }) {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <textarea
                name={name}
                id={id}
                rows='5'
                placeholder={placeholder}
                defaultValue={value}
                onChange={handleChange}

            />
        </div>
    )
}

export default TextArea