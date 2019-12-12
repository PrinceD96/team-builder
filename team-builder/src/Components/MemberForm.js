import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MemberForm = ({ addNewTeamMember }) => {
  const [teamMember, setTeamMember] = useState({ id: "", name: "", age: "", email: "", role: "" });

  const handleChanges = (e) => {
    // console.log("event", e.target.value);
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    addNewTeamMember(teamMember);

    setTeamMember({ id: "", name: "", age: "", email: "", role: "" });
  }

  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label htmlFor="name">Name </Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Type your name"
          onChange={handleChanges}
          value={teamMember.name} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="age">Age </Label>
        <Input
          id="age"
          type="number"
          name="age"
          placeholder="Type your age"
          onChange={handleChanges}
          value={teamMember.age} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="member@gmail.com"
          onChange={handleChanges}
          value={teamMember.email} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="role">Role </Label>
        <Input
          id="role"
          type="select"
          name="role"
          onChange={handleChanges}
          value={teamMember.role}>
          <option disabled></option>
          <option>Backend engineer</option>
          <option>Frontend engineer</option>
          <option>Full Stack engineer</option>
          <option>UX/UI Designer</option>
        </Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default MemberForm;