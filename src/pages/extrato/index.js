import React, { useState } from "react";
import "./stlyeExtrato.css"
import Logo from "../../img/lontraLogo2.png"
import {Link} from "react-router-dom"

const App = () => {
    const [contas, setValor] = useState([{
        id: "1",
        valorExtrato: "1.299",
        descricaoExtrato: " Conta de água"
    }, {
        id: "2",
        valorExtrato: "300",
        descricaoExtrato: " Conta de luz"
    }, {
        id: "3",
        valorExtrato: "9,90",
        descricaoExtrato: " Amazon prime"
    }]);
    const [saldo,setSaldo] =useState("2.000")
    return (
        <div className="container">

            <div className="container-extrato">
                <div className="wrap-extrato">
                    <span className="extrato-title">
                        <img className="logo-extrato" src={Logo} />
                        Extrato
                    </span>
                    <div className="saldo-tela">
                        <span>Saldo: {saldo} R$</span>
                    </div>
                    <div className="historico-extrato">
                        <div className="historico-extrato-">
                            {contas.map(conta => <div className="historico-extrato-valores">  <p>ID: {conta.id}</p>
                                <p>Valor: {conta.valorExtrato} R$</p>
                                <p>Descrição: {conta.descricaoExtrato}</p></div>)}
                        </div>
                    </div>
                    <div className="container-button-0-extrato">
                        <Link to="/home" className="linkExtrato"><button className="container-button"> Voltar </button></Link>
                    </div>                </div>
            </div>
        </div>
    );
}
export default App