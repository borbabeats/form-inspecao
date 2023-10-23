function Select({ text, name, options, handleChange, value }) {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                id={name}
                onChange={handleChange}
                defaultValue={value || ''}>
                    <option>Selecione um setor</option>
                    {options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
        </>
    )
}

export default Select