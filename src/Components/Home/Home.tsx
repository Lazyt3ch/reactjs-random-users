import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1>User Data Retriever and Viewer</h1>
      <p>This simple web app retrieves and displays randomly generated 
        data kindly provided
        by <a href="https://randomuser.me/">RandomUser.me</a>.</p>
      <p>If you want to see the app's insides, check out its <a href="https://github.com/lazyt3ch/reactjs-random-users">GitHub repository</a>.</p>

      <p><strong>Technical notes</strong></p>
      <ul>
        <li>
          Here's how this small project evolved over time:
          <ul>
            <li>It was built on <a href="https://reactjs.org/">React</a> using <a href="https://github.com/facebook/create-react-app">Create React App</a> as a starting point. Initially, all of its components and helper functions were written in JavaScript (ECMAScript 2015+).</li>
            <li>Some <a href="https://material-ui.com/">Material-UI</a> components were added to ensure a more uniform look and feel when the app is opened in different browsers.</li>
            <li>All of the components and helper functions were rewritten in <a href="https://www.typescriptlang.org/">TypeScript</a>.</li>
            <li>Redux was added as part of <a href="https://redux-toolkit.js.org/">Redux Toolkit</a>.</li>
          </ul>
        </li>

        <li>
          <p>When <span className="home-page__gray-bg">id</span> is specified among the properties to be retrieved, some user IDs returned by RandomUser.me are empty/null:</p>
          <p><span className="home-page__gray-bg">id: &#x7B;name: "", value: null&#x7D;</span></p>
          <p>In Data Viewer, each empty name is displayed as <span className="home-page__gray-bg">&lt;""&gt;</span>, and each null value is displayed as <span className="home-page__gray-bg">&lt;null&gt;</span>.</p>
        </li>

        <li>
          <p>It is not advisable to select too many properties at once as the resulting table 
            may be cluttered with retrieved data, and some indivisible pieces of data 
            (e.g. a phone number, an email address, or a web address) 
            may have to be forced to wrap.</p>
        </li>
      </ul>
    </div>
  )
}

export default Home; 