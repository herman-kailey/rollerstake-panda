import { SERVICE_URL } from '../definitions/Config';


/**
 * Retrieve all stored items from the server
 * @returns {Promise<Array<{id: string, name: string, isComplete: boolean}>}
 */
export default async function fetchAllItems() {
    const response = await fetch(SERVICE_URL);

    const json = await response.json();

    // Expected return format:
    // [{ id: string, name: string, isComplete: boolean }]
    return json.body;
}