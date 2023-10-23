import FormLogin from './FormLogin.jsx'
import styles from './Login.module.css'

function Login() {

    



    return ( 
    <section className={styles.login}> 
    <h1>Login</h1>
    <p>Favor, inserir seu usuário e senha de rede para cadastrar as avaliações.</p>
    <FormLogin  />
    </section>

)
}

export default Login