# Users Data Retriever and Viewer

You can use this simple web app to retrieve and view users data from RandomUser.me

## Technical notes

*   This web app is built on [React](https://reactjs.org/) using [facebook/create-react-app](https://github.com/facebook/create-react-app) as a starting point. Initially, all of the components were written in JavaScript (ECMAScript 2015+). Later, some components from [Material-UI](https://material-ui.com/) were added to the project to ensure the same look and feel when the app is opened in different browsers. Even later, all of the components were rewritten in TypeScript.

*   For some reason, when a `user id` is requested, RandomUser.me may return an invalid name—value pair like this:

    `id: {name: "", value: null}`

    In such cases, when data is displayed in Data Viewer, each empty name will be replaced with `<"">`, and each null value will be replaced with `<null>`.

*   It is not advisable to select too many properties at once as the resulting table may be cluttered with retrieved data, and some indivisible pieces of data (e.g. a phone number, an email address, or a web address) may have to be broken up and displayed in a few rows.