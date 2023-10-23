import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Cadastros.module.css'

function Cadastros() {
    const [colaborador, setColaborador] = useState([])
    const location = useLocation()
    let message = ''
    if(location.state) {
        message.location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:3000/colaborador', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) 
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        setColaborador(data)
    })
    .catch((err) => console.log(err))
}, [])

return <div>
    <h1>Meus cadastros</h1>

    <message && <Message msg="{message}" type="success"/>
    {colaborador.length > 0 && colaborador.map(cadastro) => 
        <CadastroCard 
        id={cadastro.id}
        name={cadastro.name}
        setor={cadastro.setor}
        key={cadastro.id}
        />
)}
</div>

}

export default Cadastros
