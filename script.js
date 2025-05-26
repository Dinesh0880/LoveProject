
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyBwKBN21ZDcQeJgDUFK7_wEVFOwa_CFg64",
  authDomain: "my-project-bbb62.firebaseapp.com",
  databaseURL: "https://my-project-bbb62-default-rtdb.firebaseio.com",
  projectId: "my-project-bbb62",
  storageBucket: "my-project-bbb62.firebasestorage.app",
  messagingSenderId: "566215784008",
  appId: "1:566215784008:web:a4508fbf855cd13e5f0a7d",
  measurementId: "G-2GB4W6BPRN"
};
initializeApp(firebaseConfig);

document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;

  const birthDate = new Date(dob);
  const age = new Date().getFullYear() - birthDate.getFullYear();
  document.getElementById("age").textContent = "Your Age: " + age;

  const userData = { name, email, dob, age };
  localStorage.setItem("userData", JSON.stringify(userData));
  setTimeout(() => window.location.href = "love.html", 1500);
});
