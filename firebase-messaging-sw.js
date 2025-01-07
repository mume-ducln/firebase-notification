/// <reference lib="webworker" />
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDtUYtn_zStu4V_j2FkbE0QWctFIvok8kg",
  authDomain: "test-firebase-c7123.firebaseapp.com",
  projectId: "test-firebase-c7123",
  storageBucket: "test-firebase-c7123.firebasestorage.app",
  messagingSenderId: "359247485594",
  appId: "1:359247485594:web:886d6d21e2f107e1711d23",
  measurementId: "G-NB6EFWBXR9",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});
