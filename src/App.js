import React, {Component} from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";
import "./index.css"

class App extends Component {

  state = {
    livros: [
      {
        id: "123-456-789-99 LEIAUTE",
        titulo: "CSS Grid Layout",
        autor: "Mauricio Samy"
      },
      {
        id: "123-456-689-99",
        titulo: "Node Essencial",
        autor: "Ricardo Lecheta"
      },
      {
        id: "123-456-589-99",
        titulo: "Aprendendo Material Design",
        autor: "Kyle Mew"
      }
    ]
  };

  state = {
    livros: [ ]
  }

  componentDidMount() {
    fetch("./livros.json")
    .then(Response => Response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error){
      console.log("erro na requisição");
  })
  .finally(function() {
    console.log("Sempre retorna")
  })
  };

  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot />
        <TabelaBody livros={this.state.livros} />
      </table>
    );
  }}
  
  export default App;