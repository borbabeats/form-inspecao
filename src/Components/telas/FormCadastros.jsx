import styles from './FormCadastros.module.css'
import SubmitButton from '../layout/form/SubmitButton'
import Input from '../layout/form/Input'
import TextArea from '../layout/form/TextArea'

function FormCadastros({ handleSubmit, registerData }) {
    return (
        <form>
            <div className={styles.form_header}> 
            <Input type='text' name='nomeColabrador' id='nomeColaborador' placeholder='Insira o nome do colaborador'/>
            <Input type='number' name='numeroColaborador' id='numeroColaborador' placeholder='Insira o numero da matricula'/>
           
           </div>
           <div className={styles.form_body}>
            <Input type='checkbox' name='oculosProtecao' id='oculosProtecao' text='Oculos de Protecao'/>
            <Input type='checkbox' name='botinaSeguranca' id='botinaSeguranca' text='Botina de seguranca'/>
            <Input type='checkbox' name='cintoSeguranca' id='cintoSeguranca' text='Cinto de seguranca'/>
            <Input type='checkbox' name='protetorFacial' id='protetorFacial' text='Protetor Facial'/>
            <Input type='checkbox' name='cremeProtecao' id='cremeProtecao' text='Creme de protecao'/>
            <Input type='checkbox' name='capacete' id='capacete' text='Capacete'/>
            <Input type='checkbox' name='protetorAuditivoPlug' id='protetorAuditivoPlug' text='Protetor auditivo plug'/>
            <Input type='checkbox' name='luvaImpermeavel' id='luvaImpermeavel' text='Luva impermeavel'/>
            <Input type='checkbox' name='aventalImpermeavel' id='aventalImpermeavel' text='Avental impermeavel'/>
            <Input type='checkbox' name='protetorAuditivoConcha' id='protetorAuditivoConcha' text='Protetor auditivo concha'/>
            <Input type='checkbox' name='luvaRaspaCouro' id='luvaRaspaCouro' text='Luva de raspa de couro'/>
            <Input type='checkbox' name='aventalRaspaCouro' id='aventalRaspaCouro' text='Avental de raspa de couro'/>
            <TextArea name='campoOutros' id='campoOutros' text='Outros' placeholder="Escreva aqui outros e.p.i.'s usados..." />
        </div>
            <SubmitButton text='Salvar' type='submit' />

        </form>
    )
}

export default FormCadastros