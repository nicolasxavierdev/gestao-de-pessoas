import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                nome: '',
                email: '',
                cpf: '',
                dataDeNascimento: '',
                error: ''
            }
        }

        this.dadosForm = this.dadosForm.bind(this)
        this.cadastrar = this.cadastrar.bind(this)

    }

    dadosForm(e) {
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    cadastrar(e) {
        const { nome, email, cpf, dataDeNascimento } = this.state

        if (nome !== '' && email !== '' && cpf !== '' && dataDeNascimento !== '') {
            alert(`Nome: ${nome} \nE-mail: ${email} \nCPF: ${cpf} \nData de Nascimento: ${dataDeNascimento}`)
        } else {
            this.setState({ error: 'Ops, Parece que está faltando algo!' })
        }

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Formulário.</h1>

                {this.state.error && <p>{this.state.error}</p>}
                
                <form onSubmit={this.cadastrar}>
                    
                    <label>Nome:</label>
                    <input type='text' value={this.state.form.nome} onChange={this.dadosForm} />
                    
                    <label>E-mail:</label>
                    <input type='email' value={this.state.form.email} onChange={this.dadosForm} />
                    
                    <label>CPF:</label>
                    <input type='text' value={this.state.form.cpf} onChange={this.dadosForm} />
                    
                    <label>Data de Nascimento:</label>
                    <input type='date' value={this.state.form.dataDeNascimento} onChange={this.dadosForm} />
                    
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}


