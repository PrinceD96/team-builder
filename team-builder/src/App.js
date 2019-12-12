import React, { useState } from 'react';
import './App.css';
import Members from './Components/teamMembers';
import MemberForm from './Components/MemberForm';


function App() {
  const [teamMembers, setTeamMembers] = useState([{
    id: 1,
    name: "Daniel Morales",
    age: 23,
    email: "danielmorales@gmail.com",
    role: "Full Stack engineer"
  }]);

  const addNewTeamMember = (teamMember) => {
    console.log("addNewTeamMember", teamMember);
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      age: teamMember.age,
      email: teamMember.email,
      role: teamMember.role
    }

    setTeamMembers([...teamMembers, newTeamMember])
  }

  const deleteTeamMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Members teamMembers={teamMembers} deleteTeamMember={deleteTeamMember} />
      <h2>Join our Team</h2>
      <MemberForm addNewTeamMember={addNewTeamMember} />
    </div>
  );
}

export default App;
