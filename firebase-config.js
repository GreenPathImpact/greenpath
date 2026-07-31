const firebaseConfig = {
    apiKey: "AIzaSyA5F4qISdeh_zkzAMCy1kmuJOr9C9_4W6I",
    authDomain: "greenpath-impact.firebaseapp.com",
    projectId: "greenpath-impact",
    storageBucket: "greenpath-impact.firebasestorage.app",
    messagingSenderId: "63835129702",
    appId: "1:63835129702:web:50dca0bcc1e62d875deaa7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

async function signInVisitor() {
    if (auth.currentUser) {
        return auth.currentUser;
    }

    const result = await auth.signInAnonymously();
    return result.user;
}