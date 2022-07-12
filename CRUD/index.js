const { initializeApp } = require('firebase/app');
const { getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    query,
    deleteDoc }
    = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyBIceUNvjb9TXhaovoXlpZqV3GAdD9QC8U",
    authDomain: "atividade-biblioteca-matheus.firebaseapp.com",
    projectId: "atividade-biblioteca-matheus",
    storageBucket: "atividade-biblioteca-matheus.appspot.com",
    messagingSenderId: "36803754897",
    appId: "1:36803754897:web:2c43d354968fcb2dd2b830"
};

const app = initializeApp(firebaseConfig);

const bancoDados = getFirestore();

async function criar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(bancoDados, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(bancoDados, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function buscar(nomeTabela) {
    const tableRef = collection(bancoDados, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    });
    return lista;
}

async function buscarPorId(nomeTabela, id) {
    const docRef = doc(bancoDados, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Não encontrado!");
    }
}

async function deletar(nomeTabela, id) {
    const dado = await deleteDoc(doc(bancoDados, nomeTabela, id));
    return {
        message: `${id} deletado!`
    }
}


module.exports = {
    criar,
    buscar,
    buscarPorId,
    deletar
};