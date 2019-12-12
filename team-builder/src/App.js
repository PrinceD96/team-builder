import React, { useState } from 'react';
import './App.css';
import MemberForm from './Components/MemberForm';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

function App() {
  const [teamMember, setTeamMember] = useState({
    id: 1,
    name: "Daniel Morales",
    age: 23,
    email: "danielmorales@gmail.com", role: "Full Stack engineer"
  })

  const Member = ({ teamMember }) => {
    return (

      <Card className="member-card">
        <CardHeader className="header">{teamMember.name}</CardHeader>
        <CardBody>
          <CardText><span className="member-inputs">Age:</span> {teamMember.age}</CardText>
          <CardText><span className="member-inputs">Email:</span> {teamMember.email}</CardText>
          <CardText><span className="member-inputs">Role:</span> {teamMember.role}</CardText>
        </CardBody>
      </Card>

    )
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <div className="member-list"><Member teamMember={teamMember} /></div>
      <h1>Join our Team</h1>
      <MemberForm />
    </div>
  );
}

export default App;
