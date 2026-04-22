const firebaseConfig = {
  apiKey: "AIzaSyAVGSWMm5GbhtjH95l8DJK0DkJgO1Zv04Q",
  authDomain: "ds-tts-experiment.firebaseapp.com",
  databaseURL: "https://ds-tts-experiment-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ds-tts-experiment",
  storageBucket: "ds-tts-experiment.firebasestorage.app",
  messagingSenderId: "2627176558",
  appId: "1:2627176558:web:02c824589f63eaf9a67e7f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
