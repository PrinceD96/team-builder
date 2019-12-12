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
      <div>
        <Card>
          <CardHeader>{teamMember.name}</CardHeader>
          <CardBody>
            <CardText>Age: {teamMember.age}</CardText>
            <CardText>Email: {teamMember.email}</CardText>
            <CardText>Role: {teamMember.role}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Member teamMember={teamMember} />
      <h1>Join our Team</h1>
      <MemberForm />
    </div>
  );
}

export default App;
