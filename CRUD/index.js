const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyBIceUNvjb9TXhaovoXlpZqV3GAdD9QC8U",
    authDomain: "atividade-biblioteca-matheus.firebaseapp.com",
    projectId: "atividade-biblioteca-matheus",
    storageBucket: "atividade-biblioteca-matheus.appspot.com",
    messagingSenderId: "36803754897",
    appId: "1:36803754897:web:2c43d354968fcb2dd2b830"
};

const app = initializeApp(firebaseConfig);

const bd = getFirestore();

async function dados(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(bd, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(bd, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

module.exports = {
    dados
};