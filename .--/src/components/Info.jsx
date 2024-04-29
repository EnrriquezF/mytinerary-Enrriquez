import React from 'react'

export default function Info() {
  return (
    <div className='infoCont'>
      <div className='infoPage'>
        <h1>Information about this webpage</h1>
        <p>
          This webpage was made as a project for a MERN Stack course, given by <a href='https://mindhubweb.com/' target='_blank' rel='noopener noreferrer'>MindHub Bootcamp</a>. It is completely safe to use it, as your data in encrypted
          before being saved in MongoDB.
        </p>
        <h3>
          Here is the list of the technologies used during the development of this website.
        </h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass (self taught)</li>
          <li>Responsive Design</li>
          <li>Figma (self taught)</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>React Router Dom</li>
          <li>Redux</li>
          <li>Vite</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>JSON Web Token (JWT)</li>
          <li>Postman</li>
          <li>Joi</li>
          <li>Passport</li>
          <li>.env</li>
          <li>Agile</li>
          <li>Problem Solving</li>
        </ul>
        <h3>
          Useful links:
        </h3>
        <ul>
          <li><a href='https://github.com/EnrriquezF/mytinerary-back-enrriquezFlorencia' target='_blank' rel='noopener noreferrer'>GitHub Repository Front End</a></li>
          <li><a href='https://github.com/EnrriquezF/mytinerary-Enrriquez' target='_blank' rel='noopener noreferrer'>GitHub Repository Back End</a></li>
          <li><a href='#' target='_blank' rel='noopener noreferrer'>Personal Website / Portfolio</a></li>
          <li><a href='https://www.linkedin.com/in/florencia-enrriquez-34bb61234/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
        </ul>
      </div> 
    </div>
  )
}
