import React, { Component } from 'react'

class Form extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }


    render() {
        let { nome, email, cpf, dateOfBirth } = this.props.dados
        return (
            <div>
                <h3>Nome: {nome} </h3>
                <h3>E-mail: {email} </h3>
                <h3>CPF: {cpf} </h3>
                <h3>Data de Nascimento: {dateOfBirth} </h3>
            </div>
        )
    }
}

export default Form;