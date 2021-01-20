import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1>User Data Retriever and Viewer</h1>
      <p>This simple web app retrieves and displays fake (that is, randomly generated) 
        user data kindly provided
        by <a href="https://randomuser.me/">RandomUser.me</a>.</p>
      <p>You can find the app 
        repo <a href="https://github.com/lazyt3ch/reactjs-random-users">here</a>.</p>

      <p><strong>Technical notes</strong></p>
      <ul>
        <li>
          <p>This web app is built on <a href="https://reactjs.org/">React</a> using <a href="https://github.com/facebook/create-react-app">facebook/create-react-app</a> as a starting point. Initially, all of its components and helper functions were written in JavaScript (ECMAScript 2015+). Later, some <a href="https://material-ui.com/">Material-UI</a> components were added to the project to ensure a more uniform look and feel when the app is opened in different browsers. Even later, all of the components and helper functions were rewritten in TypeScript.</p>
        </li>

        <li>
          <p>When <strong>id</strong> is specified among the properties to be retrieved, some user IDs returned by RandomUser.me are empty/null:</p>
          <p><strong>id: &#x7B;name: "", value: null&#x7D;</strong></p>
          <p>In Data Viewer, each empty name is displayed as <strong>&lt;""&gt;</strong>, and each null value is displayed as <strong>&lt;null&gt;</strong>.</p>
        </li>

        <li>
          <p>It is not advisable to select too many properties at once as the resulting table 
            may be cluttered with retrieved data, and some indivisible pieces of data 
            (e.g. a phone number, an email address, or a web address) 
            may have to be broken up and displayed in a few rows.</p>
        </li>
      </ul>
    </div>
  )
}

export default Home; 