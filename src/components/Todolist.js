//importoidaan järjestelmä olio
import React, { useState } from "react";
import '../App.css';

//Jokaisessa tiedostossa pitää olla yksi export default
export default function Todolist() {
  //state yksittäisen todo-itemin sisällöksi
  //state vaihtoehdot "" tai []
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const[date, setDate] = useState("");

  const addTodo = () => {
    //console.log("add todo");
    const newTodo = { date: date, description: todo };
    //Spread notaatiolla pystyy lisäämään taulukkoon yhden solun
    setTodos([...todos, newTodo]);
    setTodo("");
    setDate("");
  };

  return (
    <div>
      <h2>Add todo:</h2>
      <div className="otsikko1">
        Date: 
        <input
        placeholder="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}>
         

        </input>
        

      </div>
      <div className="otsikko">
        Description:
        <input
          placeholder="description"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>
      <table>
        <thead>
          <th>Date</th>
          <th>Description</th>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
