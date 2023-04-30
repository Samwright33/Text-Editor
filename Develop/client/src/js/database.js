import { openDB } from 'idb';

const initdb = async () =>
  await openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('a jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('a jate database has been created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('put request to database')

  const jateDb = await openDB('jateDB', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ jate: content });
  const result = await request;
  console.log('data added to the database', result);
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.log('get request to database')

const jateDB = await openDB('jate', 1);
const tx = jateDB.transaction('jate', 'readonly');
const request = store.getAll();
const result = await request;
console.log('data has been retrieved', result)
return result?.value;
}


initdb();
