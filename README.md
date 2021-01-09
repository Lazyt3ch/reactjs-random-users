# Users Data Retriever and Viewer

You can use this simple web app to retrieve and view users data from RandomUser.me

## Technical notes

*   For some reason, when a **user id** is requested, RandomUser.me may return an invalid name—value pair like this:

    **id: {name: "", value: null}**

    In such cases, when data is displayed in Data Viewer, each empty name and null value will be replaced with a `""`—`null` pair.

*   It is not advisable to select too many properties at once as the resulting table may be cluttered with retrieved data, and some indivisible pieces of data (e.g. a phone number, an email address, or a web address) may have to be broken up and displayed in a few rows.