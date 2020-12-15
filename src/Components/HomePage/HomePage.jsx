import React from 'react';
import Header from '../Header/Header';


function HomePage(props) {
  return (
    <div>
      <Header/>
      <h1>HOME</h1>
      <p>Welcome to our shop {props.Username}! We hope you find what you are looking for </p>
    </div>
  )
}

export default HomePage
