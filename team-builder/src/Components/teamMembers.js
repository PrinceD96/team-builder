import React from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Members = ({ teamMembers, deleteTeamMember }) => {
  // console.log("TeamMembers", teamMembers);
  return (
    <div className="teamMember-list">
      {
        teamMembers.map(teamMember => (

          <Card className="member-card" key={teamMember.id}>
            <CardHeader className="header">
              <CardTitle>{teamMember.name}</CardTitle>
              <FontAwesomeIcon className="faIcon" icon={faEdit} />
              <FontAwesomeIcon className="faIcon" onClick={() => deleteTeamMember(teamMember.id)} icon={faTrashAlt} />
            </CardHeader>
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