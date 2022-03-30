import React, { Component, useState } from "react";
import "./stlyeContasPagar.css"
import Logo1 from "../../img/lontraLogo2.png"
import { Link } from "react-router-dom";
export default class App extends Component {
    constructor() {
        super();
        this.state = {conta:
            {
            id: "",
            valor: "",
            descricao: "",
            saldo: ""
        },contas: [{
                id: "0",
                valor: "0",
                descricao: "",
                saldo: "1000"
            },{
                id: "2",
                valor: "500",
                descricao: "",
                saldo: "500"
            },{
                id: "9",
                valor: "100",
                descricao: "",
                saldo: "400",
                data: ""
            }]
        }
        this.handleChange = this.handleChange.bind(this)
        this.adicionarConta = this.adicionarConta.bind(this)
    }
    adicionarConta() {
        this.setState({conta:"", contas: [].concat(this.state.contas, this.state.conta) })

    }
    handleChange(event) {
        this.setState({conta:event.target.value})
    }
   
    render() {
        const contaPos = this.state.contas.length-1
        return (
            <div className="container">
                <div className="container-ContasPagar">
                    <div className="saldo">
                        <div className="saldo-titulo">Saldo
                            <div className="valor-Saldo-Div"> {this.state.contas[contaPos].saldo}  R$</div>
                        </div>
                    </div>

                    <div className="wrap-ContasPagar">
                        <span className="contasPagar-title">
                            <img src={Logo1} className="logo-ContasPagar" />
                            Pagar
                        </span>
                        <div className="wrap-input-ContasPagar">
                            <h1 className="input-valor-text"> valor</h1>
                            <input className="input-ContasPagar" type={"text"}  onChange={this.handleChange} />
                        </div>
                        <div className="wrap-input-ContasPagar">
                            <h1 className="input-valor-text"> Descrição</h1>
                            <input className="input-ContasPagarDesc" type={"text"} onChange={this.handleChange}  />
                        </div>
                        <div className="container-button-0-ContasPagar">
                            <button className="container-button" onClick={this.adicionarConta}> Registrar</button>
                            <Link to="/home" className="linkButtContaPagar"><button className="container-button"> Voltar </button></Link>
                        </div>
                    </div>
                    <div className="extrato">
                        <div className="extrato-titulo">Extrato
                            <div className="valor-extrato-div"> 
                            {this.state.contas.map(conta => <div>
                                <p>=-=-=-=-=-=-=-</p>
                                <p>Id:{conta.id}</p>
                                <p>Valor:{conta.valor} R$</p>
                                <p>Descrição:{conta.desc}</p>
                                <p>Data:{conta.data} </p>
                                <p>=-=-=-=-=-=-=-</p>

                                 </div>)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
