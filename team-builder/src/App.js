import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {
  const [teamMember, setTeamMember] = useState({ id: 1, name: "Daniel Morales", age: 23 })

  const Member = ({ teamMember }) => {
    return (
      <div>
        <p>{teamMember.name}</p>
        <p>{teamMember.age}</p>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Member teamMember={teamMember} />
      <Form />
    </div>
  );
}

export default App;
