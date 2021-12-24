import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBPQnQfUhVj_cTRNCUOkgQOy437G1cHHgE",
  authDomain: "portfolio-umanga.firebaseapp.com",
  projectId: "portfolio-umanga",
  storageBucket: "portfolio-umanga.appspot.com",
  messagingSenderId: "1000900222918",
  appId: "1:1000900222918:web:3eb5a0ae65af57e66e9cc7",
  measurementId: "G-GFK4G9ZKJC",
};

initializeApp(firebaseConfig);

export default getFirestore();

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import { doc } from "firebase/firestore";
// import { ref, onUnmounted } from "vue";

// const config = {
//   apiKey: "AIzaSyBPQnQfUhVj_cTRNCUOkgQOy437G1cHHgE",
//   authDomain: "portfolio-umanga.firebaseapp.com",
//   projectId: "portfolio-umanga",
//   storageBucket: "portfolio-umanga.appspot.com",
//   messagingSenderId: "1000900222918",
//   appId: "1:1000900222918:web:3eb5a0ae65af57e66e9cc7",
//   measurementId: "G-GFK4G9ZKJC",
// };

// const firebaseApp = initializeApp(config);

// const db = getFirestore(firebaseApp);
// const userCollection = db.collection("users").doc();

// console.log(userCollection);

// export const createUser = async (user) => {
//   await userCollection.set(user);
// };

// export const getUser = async (id) => {
//   const user = await userCollection.doc(id).get();
//   return user.exists ? user.data() : null;
// };

// export const updateUser = (id, user) => {
//   return userCollection.doc(id).update(user);
// };

// export const deleteuser = (id) => {
//   return userCollection.doc(id).delete();
// };

// export const useLoadUsers = () => {
//   const users = ref([]);
//   const close = userCollection.onSpanshot((spanshot) => {
//     users.value = spanshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return users;
// };
