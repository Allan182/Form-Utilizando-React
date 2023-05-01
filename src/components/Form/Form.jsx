import './Form.css'

function Form({ nome, placeholder }) {

    return (

        <section>
            <form action="">
                <label htmlFor=""> {nome}</label>
                <input type="text" placeholder={placeholder} />
            </form>
          
        </section>
    )
}

export default Form;