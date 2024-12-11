

import { useState } from 'react';
import { useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { type } from '@testing-library/user-event/dist/type';



const ListComponent = () => {


  const [list, setList] = useState([])
  const [text, setText] = useState("")

  // Definition of the function for add item to list
  function addItemToList(text) {

    const task = {
      label: text,
      is_done: false
    }
    fetch('https://playground.4geeks.com/todo/todos/Pedro', { method: "POST", body: JSON.stringify(task), headers: { "Content-Type": "application/json" } })
      .then(() => refreshList())

  }

  //Definition of the function for refreshing my list

  function refreshList() {
    fetch('https://playground.4geeks.com/todo/users/Pedro', { method: "GET" })
      .then((resp) => {


        return resp.json()
      })
      .then((data) => {
        setList(data.todos)
      })
      .catch((error) => { console.log("La cagaste") })}



    //Definition of the function for deleting my list

    function deleteItem(task_id) {
      fetch(`https://playground.4geeks.com/todo/todos/${task_id}`, { method: "DELETE" })
        .then(() => refreshList())

    }
    //First call for refreshing the list
    useEffect(() => {
      refreshList()
    }, []);





    return (<>

      <InputGroup className="mb-3">
        <Form.Control value={text} onChange={(e) => { setText(e.target.value) }} onKeyDown={(e) => {
          if (e.key === "Enter") {
            addItemToList(text);
            setText("");

          }
        }}
          placeholder={'Tip something to do'}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      {list.map((element) => {
        return (
          <div style={{ width: "100% ", display: "flex", justifyContent: "space-between" }} id={element.id}>{element.label}

            <Button variant="outline-secondary" onClick={() => deleteItem(element.id)}> X </Button>
          </div>
        )

      })}

    </>
    )
  }

  export default ListComponent