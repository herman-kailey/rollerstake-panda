import { SERVICE_URL } from "../definitions/Config"


/**
 * Create a new item on the server
 * @param {object} item 
 * @param {string} item.id
 * @param {string} item.name
 * @param {boolean} item.isComplete
 * @returns {Promise<void>}
 */
export default async function pushNewItem(item) {
    console.log(JSON.stringify(item)) //TODO remove
    return fetch(SERVICE_URL, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json",
        }
    })
}
