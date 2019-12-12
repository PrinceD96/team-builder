import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MemberForm = () => {

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="name">Name </Label>
        <Input id="name" type="text" name="name" placeholder="Type your name" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email </Label>
        <Input id="email" type="email" name="email" placeholder="member@gmail.com" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="role">Role </Label>
        <Input type="select" id="role" name="role" multiple>
          <option value='1'>Backend engineer</option>
          <option value='2'>Frontend engineer</option>
          <option value="3">Full Stack engineer</option>
          <option value='4'>UX/UI Designer</option>
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default MemberForm;