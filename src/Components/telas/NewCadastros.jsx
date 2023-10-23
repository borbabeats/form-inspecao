import { useNavigate } from "react-router-dom"
import FormCadastros from "./FormCadastros"

function NewCadastros() {

    const navigate = useNavigate()

    fetch('http://localhost:3000/colaboradores', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(colaborador),
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    navigate('/cadastros', {message: 'Colaborador registrado com sucesso.'})
    })
    .catch(err => console.log(err))
}

return (
    <div>
        <h1>Cadastrar colaborador</h1>
        <p>Cadastre os epis que cada colaborador utiliza</p>
        <FormCadastros handleSubmit={createRegister} btnText='Cadastrar colaborador'/>
    </div>
)