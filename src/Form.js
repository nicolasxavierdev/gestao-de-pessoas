import React, { Component } from 'react'

class Form extends Component {

    state = {
        name: '',
        email: '',
        cpf: '',
        dateOfBirth: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let { name } = this.state
        name = this.setState.name

        let { email } = this.state
        email = email

        let { cpf } = this.state
        cpf = cpf

        let { dateOfBirth } = this.state
        dateOfBirth = dateOfBirth

        console.log(name ,email ,cpf ,dateOfBirth)
    }

    handleInputChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleInputChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handleInputChange = (e) => {
        this.setState({ cpf: e.target.value })
    }

    handleInputChange = (e) => {
        this.setState({ dateOfBirth: e.target.value })
    }

    render() {

        const { name } = this.state
        return (
            <section>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Nome:
                            <input onChange = {this.handleInputChange} type = 'text' />
                    </label>
                    <label>
                        E-mail:
                            <input onChange = {this.handleInputChange} type = 'email' />
                    </label>
                    <label>
                        CPF:
                            <input onChange = {this.handleInputChange} type = 'text' />
                    </label>
                    <label>
                        Data de Nascimento:
                            <input onChange = {this.handleInputChange} type = 'date' />
                    </label>
                    <button type = 'submit'> Enviar </button>
                </form>
                <h3> {name} </h3>
            </section>
        )
    }
}


export default Form