# User Data Retriever and Viewer

This simple web app retrieves and displays randomly generated data kindly provided by [RandomUser.me](https://randomuser.me/).

You can check out the app in action [here](https://reactjs-random-users-20201209.netlify.app/).

## Technical notes

*   Here's how this small project evolved over time:
    *   It was built on [React](https://reactjs.org/) using [Create React App](https://github.com/facebook/create-react-app) as a starting point. Initially, all of its components and helper functions were written in JavaScript (ECMAScript 2015+). 
    *   Some [Material-UI](https://material-ui.com/) components were added to ensure a more uniform look and feel when the app is opened in different browsers. 
    *   All of the components and helper functions were rewritten in [TypeScript](https://www.typescriptlang.org/).
    *   Redux was added as part of [Redux Toolkit](https://redux-toolkit.js.org/).

*   When `id` is specified among the properties to be retrieved, some user IDs returned by RandomUser.me are empty/null:

    `id: {name: "", value: null}`

    In Data Viewer, each empty name is displayed as `<"">`, and each null value is displayed as `<null>`.

*   It is not advisable to select too many properties at once as the resulting table may be cluttered with retrieved data, and some indivisible pieces of data (e.g. a phone number, an email address, or a web address) may have to be forced to wrap.