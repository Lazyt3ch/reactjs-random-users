# User Data Retriever and Viewer

This simple web app retrieves and displays fake (that is, randomly generated) user data kindly provided by [RandomUser.me](https://randomuser.me/).

You can check out the app in action [here](https://reactjs-random-users-20201209.netlify.app/).

## Technical notes

*   This web app is built on [React](https://reactjs.org/) using [facebook/create-react-app](https://github.com/facebook/create-react-app) as a starting point. Initially, all of its components and helper functions were written in JavaScript (ECMAScript 2015+). Later, some [Material-UI](https://material-ui.com/) components were added to the project to ensure a more uniform look and feel when the app is opened in different browsers. Even later, all of the components and helper functions were rewritten in TypeScript.

*   For some reason, when a `user id` is requested, RandomUser.me may return an invalid name—value pair like this:

    `id: {name: "", value: null}`

    In such cases, when data is displayed in Data Viewer, each empty name will be replaced with `<"">`, and each null value will be replaced with `<null>`.

*   It is not advisable to select too many properties at once as the resulting table may be cluttered with retrieved data, and some indivisible pieces of data (e.g. a phone number, an email address, or a web address) may have to be broken up and displayed in a few rows.