import React, { Component } from "react";

export default class Tarefas extends Component{
    constructor(){
        super()
        this.state = {tarefa: "",
        tarefas: ["tarefa1", "tareda2", "tarefa3"]}
        this.handleChange = this.handleChange.bind(this)
        this.adicionarTarefa = this.adicionarTarefa.bind(this)
    }
    render(){
        return(<>
        <h1>teste</h1>
        <ul>
            <div>{this.state.tarefas.map(tarefa=> <div>{tarefa}</div>)}</div>
        </ul>
        <input onChange={this.handleChange} value={this.state.tarefa}></input>
        <button onClick={this.adicionarTarefa}>asdd</button>
        </>);
    }
    adicionarTarefa(){ 
        this.setState({ tarefa: "",tarefas: [].concat(this.state.tarefas, this.state.tarefa)})

    }
    handleChange(event){
        this.setState({tarefa:event.target.value})
    }
}