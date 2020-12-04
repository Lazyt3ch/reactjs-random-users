import React from "react";

function Home() {
  return (
    <div className="home-page">
      <h1>Hello!</h1>
      <p>You can use this simple web app to retrieve specific users data from RandomUser.me</p>

      <p><strong>Technical notes</strong></p>
      <ul>
        <li>
          <p>For some reason, when <strong>user id</strong> is requested, RandomUser.me may return 
          an invalid name&mdash;value pair like this:</p>
          <p><strong>id: &#x7B;name: "", value: null&#x7D;</strong></p>
          <p>In such cases, when displayed in the Data Viewer, the empty name and null value are replaced 
          with a &lt;null&gt;&mdash;&lt;/null&gt; pair.</p>
        </li>
      </ul>
    </div>
  )
}

export default Home; 