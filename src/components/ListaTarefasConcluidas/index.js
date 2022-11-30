import React from "react";
import {Tarefa, ListaContainer} from "./styled"

function ListaTarefasConcluidas(props) {
  const completas = props.completas;

  return (
    <ListaContainer> 
        <ul>
            {completas.map((tarefasConcluidas) => {
                return (
                    <Tarefa key={tarefasConcluidas}>{tarefasConcluidas}</Tarefa>
                )
            })}
        </ul>
    </ListaContainer>)
}

export default ListaTarefasConcluidas;
