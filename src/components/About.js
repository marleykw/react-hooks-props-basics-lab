import React from "react";
import Links from "./Links";
//console.log(user.links.github)


function About(user) {
 const bio = user.bio
 //const bioExist= bio.length
 //console.log(bio)
 //if (bio === undefined || bio === null || bio == ' ') {
  if (typeof bio != 'undefined' && bio) {
   console.log(`${bio} is not undefined or blank`)
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
  } else {
    console.log(`${bio} is undefined or blank`)
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={user.links.github} linkedin={user.links.linkedin}/>
      </div>
    );
  }
}

export default About;
