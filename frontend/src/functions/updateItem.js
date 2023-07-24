import { SERVICE_URL } from "../definitions/Config"


/**
 * Create a new item on the server
 * @param {object} item 
 * @param {string} item.id
 * @param {string} item.name
 * @param {boolean} item.isComplete
 * @returns {Promise<void>}
 */
export default async function updateItem(item) {
    return fetch(`${SERVICE_URL}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json",
        } //NOTE: added this as it didnt make sense for our frontend to be sending 
          //      the backend a json body as a plain/text string
    })
}