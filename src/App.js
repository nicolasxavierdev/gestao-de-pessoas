import React, { Component } from 'react'
import Form from './components/Form'

export default class App extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            dateOfBirth: ''
        }
    }

    render() {

        return (
            <div>
                <h1>Formulário</h1>

                <div>
                    <label>Nome:</label> <br />
                    <input type='text' value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
                </div>

                <div>
                    <label>E-mail:</label> <br />
                    <input type='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                </div>

                <div>
                    <label>CPF:</label> <br />
                    <input type='text' value={this.state.cpf} onChange={(e) => this.setState({ cpf: e.target.value })} />
                </div>

                <div>
                    <label>Data de Nascimento:</label> <br />
                    <input type='date' onChange={(e) => this.setState({ dateOfBirth: e.target.value })} />
                </div>
                <hr/>
                <Form dados={this.state} />
            </div>
        );
    }

}