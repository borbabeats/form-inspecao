import { useNavigate } from 'react-router-dom'
import FormCadastros from "./FormCadastros"


function Cadastros() {
    const navigate = useNavigate()


    function newRegister(register) {
        register.name = 0
        register.registration = 0
        register.sector = 0
        register.verifieds = []

        fetch("http://localhost:5000/colaborador", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(register),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
        <h1>E.P.I.'S verificados quanto ao uso e aplicacao adequada</h1>
            <FormCadastros handleSubmit={newRegister} />
        </>
    )
}

export default Cadastros