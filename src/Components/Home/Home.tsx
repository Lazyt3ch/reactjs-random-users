import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1>Users Data Retriever and Viewer</h1>
      <p>You can use this simple web app to retrieve and view users data from RandomUser.me</p>

      <p><strong>Technical notes</strong></p>
      <ul>
        <li>
          <p>For some reason, when a <strong>user id</strong> is requested, RandomUser.me may return 
          an invalid name&mdash;value pair like this:</p>
          <p><strong>id: &#x7B;name: "", value: null&#x7D;</strong></p>
          <p>In such cases, when data is displayed in Data Viewer, each empty name will be replaced 
            with <strong>&lt;""&gt;</strong>, and each null value will be replaced 
            with <strong>&lt;null&gt;</strong>.</p>
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