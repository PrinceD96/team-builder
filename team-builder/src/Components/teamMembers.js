import React from 'react';
import { Row, Col, Card, CardBody, CardHeader, CardText } from 'reactstrap';

const Members = ({ teamMembers }) => {
  console.log("TeamMembers", teamMembers);
  return (
    <div className="teamMember-list">
      {
        teamMembers.map(teamMember => (

          <Card className="member-card" key={teamMember.id}>
            <CardHeader className="header">{teamMember.name}</CardHeader>
            <CardBody>
              <CardText><span className="member-inputs">Age:</span> {teamMember.age}</CardText>
              <CardText><span className="member-inputs">Email:</span> {teamMember.email}</CardText>
              <CardText><span className="member-inputs">Role:</span> {teamMember.role}</CardText>
            </CardBody>
          </Card>

        ))}
    </div >

  )
}

export default Members;