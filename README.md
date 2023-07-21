# Ratehub Backend Exercise

## Goal
Create a simple `express`-based Node.js service to serve the needs of a basic TODO frontend.

## Requirements
1. Server must be in Node.js, using `express` and placed within the `backend` folder of this repository.
1. Data must be persisted within a locally installed database; ideally MongoDB.
1. The frontend is expecting the following:
    1. `localhost:3001/api` (`GET`) - return all saved items
    1. `localhost:3001/api` (`POST`) - create a new item
    1. `localhost:3001/api/:id` (`PUT`) - update an existing item
    1. `localhost:3001/api/:id` (`DELETE`) - remove an existing item
    1. For details on the format of each payload, please take a look within `frontend/src/functions`
1. The resulting server code should demonstrate an understanding of clean code and microservice best-practices.
1. Create a `Dockerfile` to containerize your service.
1. Please provide a `README.md` in the `backend` folder with instructions for how to start your service.
1. If you have questions, feel free to ask!

## How to start the frontend 
1. navigate to `frontend`
1. `npm install`
1. `npm start` which will start the React app
