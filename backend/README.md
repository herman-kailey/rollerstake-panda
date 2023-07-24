## How to start
1. `docker compose up` to start both the mongodb and backend service containers
1. then navigate to the /frontend.README for the next steps

## Notes
1. If you want to tear down the backend service use the command `docker compose down --volumes`, additionally if you have the docker desktop app then use that to delete any images/containers/volumes leftover
1. Data in the mongoDB database will persist between runs even if the docker image is removed as it is kept in a docker volume, if you wish to make changes to the mongodb database then you will need to connect to the mongo db session on port 2717, if you want to delete It wholly then use the docker desktop app to remove the backend_mongo_db volume/image/container
1. if you run into an error saying “Error: Cannot find module…” when using `docker compose up` do the following inside the /backend folder:
    1. Delete the node_modules directory
    2. Delete the package-lock.json file
    3. Run npm ci (Short for clean install)
    4. re-run `docker compose up`
