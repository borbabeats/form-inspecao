import Input from '../layout/form/Input'
import styles from './FormLogin.module.css'
import SubmitButton from '../layout/form/SubmitButton'
import { useEffect, useState } from 'react'
import Select from '../layout/form/Select'


function FormLogin({ text }) {
    const [setores, setSetores] = useState([]);
    


    useEffect(() => {
        fetch("http://localhost:3000/setores", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSetores(data)
        })
        .catch((err) => console.log(err))
    }, [])

     

    const submit = (e) => {
        e.preventDefault()
    }

    function handleChange(e) {

    }

    function handleArea(e) {

    }

    return (
    <>
    <form onSubmit={submit} className={styles.form}>
        {/*Nome do avaliador*/}
        <Input 
            type='text' 
            name='nomeAvaliador'
            text="Nome do Avaliador" 
            id='nomeAvaliador'
            placeholder="Insira o seu nome" 
            onChange={handleChange}
            value={''}
            />
        
        {/*Matrícula do avaliador*/}
        <Input 
            type='number' 
            name='matriculaAvaliador'
            text="Matrícula do Avaliador" 
            placeholder="Insira a sua matrícula"
            id='matriculaAvaliador' 
            onChange={handleChange}
            value={''}
            />
       
        {/*Setor a ser avaliado*/}
        <Select name="setor_id"
                text="Selecione o setor"
                options={setores}
                handleChange={handleChange}
                value={''}
                >

        </Select>
      
        <SubmitButton text="Entrar" type='submit' to='/cadastros' />
        
    </form>
    </>
    )
}

export default FormLogin