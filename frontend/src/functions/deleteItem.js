import { SERVICE_URL } from '../definitions/Config';


/**
 * Delete an Item on the server
 * @param {string} id 
 * @returns {Promise<void>}
 */
export default async function deleteItem(id) {
    return fetch(`${SERVICE_URL}/${id}`, {
        method: 'DELETE'
    })
}
