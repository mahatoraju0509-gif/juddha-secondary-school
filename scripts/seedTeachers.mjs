import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import readline from "readline";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (answer) => { rl.close(); resolve(answer); }));
}

async function seedTeachers() {
  const email = await ask("Admin Email: ");
  const password = await ask("Admin Password: ");

  await signInWithEmailAndPassword(auth, email, password);
  console.log("✅ Login सफल भयो, अब teacher slots बनाउँदैछु...");

  for (let i = 1; i <= 30; i++) {
    await addDoc(collection(db, "juddha_teachers"), {
      name: "",
      position: "",
      subject: "",
      phone: "",
      photo: "",
      order: i,
      createdAt: new Date(),
    });
    console.log(`Teacher slot ${i}/30 बन्यो`);
  }
  console.log("✅ 30 खाली teacher slot Firestore मा तयार भयो");
  process.exit(0);
}

seedTeachers().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});