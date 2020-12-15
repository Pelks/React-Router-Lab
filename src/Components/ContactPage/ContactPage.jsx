import React from 'react';
import Header from '../Header/Header';

function ContactPage(props) {
  return (
    <div>
    <Header/>
      <h1>Contact</h1>
      <p>Sorry {props.Username}, We are not accepting messages at this time</p>
    </div>
  )
}

export default ContactPage
