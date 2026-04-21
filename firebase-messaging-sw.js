importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAdz7MAFTT8LB73jYPNNAE3RehHbKIkRyI",
  authDomain: "ps5vipe-8d4f0.firebaseapp.com",
  projectId: "ps5vipe-8d4f0",
  storageBucket: "ps5vipe-8d4f0.firebasestorage.app",
  messagingSenderId: "553118527899",
  appId: "1:553118527899:web:11d53485375c7907a6f13e",
  databaseURL: "https://ps5vipe-8d4f0-default-rtdb.firebaseio.com"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'PS5 ViPe';
  const body = payload.notification?.body || '';
  self.registration.showNotification(title, {
    body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200]
  });
});
