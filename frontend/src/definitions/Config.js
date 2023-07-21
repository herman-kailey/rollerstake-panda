/** Protocol to talk to the service with */
export const SERVICE_PROTOCOL = "http"

/** Host the service is listening on */
export const SERVICE_HOST = `${SERVICE_PROTOCOL}://localhost`;

/** Path on the host to the backend service */
export const SERVICE_PATH = "/api";

/** What port number the service is listening on */
export const SERVICE_PORT = 3000;
// NOTE: backend is ACTUALLY listening on port 3001; this relies on a "proxy" entry within our package.json.
//       done this way to avoid CORS issues within the exercise

/** Full URL to the backend service */
export const SERVICE_URL = `${SERVICE_HOST}:${SERVICE_PORT}${SERVICE_PATH}`;