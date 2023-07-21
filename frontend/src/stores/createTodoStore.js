import { observable } from 'mobx';
import { v4 as uuid} from 'uuid';

import deleteItem from '../functions/deleteItem'
import pushNewItem from '../functions/pushNewItem'
import updateItem from '../functions/updateItem'
import fetchAllItems from '../functions/fetchAllItems'


/** Holds the state for the TODO app */
export default function createTodoStore() {
    const self = observable({
        items: [],

        /** The subset of our TODO items which are not complete */
        get activeItems() {
            return self.items.filter(i => !i.isComplete);
        },

        /** The subset of our TODO items which are complete */
        get completedItems() {
            return self.items.filter(i => i.isComplete);
        },

        /** Retrieve all items from the server */
        async initialize() {
            self.items = await fetchAllItems();
        },

        /** Create a new item (empty) and send it to the server */
        async createItem() {
            self.items.push({
                id: uuid(),
                name: `Item ${self.items.length}`,
            });

            const item = self.items[self.items.length - 1];

            // Also push to the backend.
            await pushNewItem(item)
        },

        /** Update the text for a TODO item and update on the server */
        async setItemName(id, name) {
            const item = self.items.find(i => i.id === id);
            item.name = name;

            // Also push the update to the backend.
            await updateItem(item);
        },

        /** Set a TODO item to completed and update it on the server*/
        async setCompleted(id) {
            const item = self.items.find(i => i.id === id);
            item.isComplete = true;

            // Also push the update to the backend.
            await updateItem(item);
        },

        /** Remove a TODO item and ask the server to delete it */
        async delete(id) {
            self.items = self.items.filter(i => i.id !== id);

            // Also delete the item from the backend
            await deleteItem(id)
        }
    })

    // When it first loads, fetch all existing items.
    // NOTE: we don't wait for it to complete, but an async process HAS started.
    // Normally a real frontend would wait and show a spinner or something.
    self.initialize();

    return self;
}
