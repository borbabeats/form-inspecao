import styles from './SubmitButton.module.css'

function SubmitButton({text, type, to}) {
    return (
        <>
           <button type={type} className={styles.btn}><a href={to}>{text}</a></button>
        </>
    )
}

export default SubmitButton