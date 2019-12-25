//import React from "react";
import ReactDOM from "react-dom";
///import { Timer } from "./components/timer";

import React, { useState } from 'react'
const PrintRows = (props) => {
    return (
      <div style={{color:'CadetBlue'}}>
        <li>{props.name} : {props.phone}</li>
      </div>)
  }
  const Print = (props) => {
    return props.person.map(person => <PrintRows key={person.phoneNumber} name={person.name} phone={person.phoneNumber} />)
  }

const App = () => {
const addName = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const personObject = {
        name: newName,
        phoneNumber:newNum ,
    }
    setPerson(person.concat(personObject))
}
const [person, setPerson]  = useState([
    { name: 'Zahava Fineberg', phoneNumber:'1234' }
  ]) 
const [ newName, setNewName] = useState('')
const [ newNum, setNewNum] = useState('')
const [newSearch, setNewSearch] = useState()
const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
}
const handleNumChange = (event) => {
    //console.log(event.target.value)
    setNewNum(event.target.value)
}
const handleSearch = (event) => {
    setNewSearch(event.target.value)
}
let namesToShow=person.filter(person=>person.name.startsWith(newSearch))
return (
    <div style={{margin: '1%',padding: 100, background:'PaleTurquoise',textAlign:'center'}}>
        <h2 style={{color:'white',background:'DeepPink'}}>Phonebook</h2>
            <form onSubmit={addName}>
                <div style={{color:'DeepPink',background:'lavender'}}>
                    Name:<br/> <input value={newName} onChange={handleNameChange} />
                    <br/>
                    <br/>
                    Phone Number: <br/><input value={newNum} onChange={handleNumChange} />
                    <br/>
                    <br/>
                    <button type="submit">add</button>
                </div>
            </form>
        <h2 style={{color:'white',background:'DeepPink'}}>Numbers</h2>
        <div>
        {<Print person={person}/>}
        </div>
        <br/>
        <form style={{color:'DeepPink',background:'lavender'}}><br/>
        Search:<br/> <input value={newSearch} onChange={handleSearch} /> 
        <br/> 
        <br/> 
        {<Print person={namesToShow}/>}
        </form>
    </div>
  )
}
export default App
ReactDOM.render(<App />, document.getElementById("root"));