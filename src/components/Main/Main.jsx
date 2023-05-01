import Submit from '../Submit/Submit.jsx';
import Form from '../Form/Form.jsx'
import './Main.css'

function Main() {


    return (

        <section className='main'>

            <div className='form'>

                <h1> Preencha os Dados para Criar a Categoria do Exame</h1>

                <Form nome="Título" placeholder="Digite aqui o Título" />

                <Form nome="Descrição" placeholder="Digite aqui a descrição" />

                <Form nome="Cor" placeholder="Digite aqui a cor" />

                <Submit nome="Criar" />

            </div>
        </section>

    )
}

export default Main