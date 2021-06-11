import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form:{
                nome: '',
                email: '',
                cpf: '',
                dateOfBirth: ''
            }
        }

        this.dadosForm = this.dadosForm.bind(this)

    }

    dadosForm(e){
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    render() {
        return (
            <div>
                <h1>Formulário</h1>

                Nome:
                <input type='text' name='nome' value={this.state.form.nome} onChange={this.dadosForm} />
                
                E-mail:
                <input type='email' name='email' value={this.state.form.email} onChange={this.dadosForm} />
                
                CPF:
                <input type='text' name='cpf' value={this.state.form.cpf} onChange={this.dadosForm} />
                
                Data de Nascimento:
                <input type='date' name='dateOfBirth' onChange={this.dadosForm} />
                
                <div>
                    <h3> {this.state.form.nome} </h3>
                    <h3> {this.state.form.email} </h3>
                    <h3> {this.state.form.cpf} </h3>
                    <h3> {this.state.form.dateOfBirth} </h3>
                </div>
            </div>
        )
    }
}