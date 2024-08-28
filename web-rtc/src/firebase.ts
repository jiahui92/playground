import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, onValue } from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-mcbpPjtb-4SY3_zZu9TJ1mIM305nc9I",
  authDomain: "file-transfer-f8c3c.firebaseapp.com",
  databaseURL: "https://file-transfer-f8c3c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "file-transfer-f8c3c",
  storageBucket: "file-transfer-f8c3c.appspot.com",
  messagingSenderId: "416307105024",
  appId: "1:416307105024:web:fafc2fdb35e7cfc3f877e5",
  measurementId: "G-7MCW6QEW11"
};

const app = initializeApp(firebaseConfig);

const url = 'https://file-transfer-f8c3c-default-rtdb.asia-southeast1.firebasedatabase.app/';

const database = getDatabase(app, url)
export async function getData(key) {
  const userRef = ref(database, key);
  try {
    const snapshot = await get(userRef);
    return snapshot.exists() ? snapshot.val() : ''
  } catch(e) {
    console.error(e.message);
  }
}

export async function setData(key, value) {
  const userRef = ref(database, key);
  try {
    await set(userRef, value);
  } catch(e) {
    console.error(e.message);
  }
}

export function onDataChange(key, cb) {
  const userRef = ref(database, key);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    cb(data);
  });
}
