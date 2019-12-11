import React, { useState } from 'react';

const Form = () => {


  return (
    <form>
      <label htmlFor="name">Name </label>
      <input id="name" type="text" name="name" placeholder="Type your name" /><br />

      <label htmlFor="email">Email </label>
      <input id="email" type="email" name="email" placeholder="Type your email" /><br />

      <label htmlFor="role">Role </label>
      <select id="role" type="email" name="role" placeholder="Type your email">
        <option value='1'>Backend engineer</option>
        <option value='2'>Frontend engineer</option>
        <option value='3'>UX/UI Designer</option>
      </select>


    </form>
  )
}

export default Form;