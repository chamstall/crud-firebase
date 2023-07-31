import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getDatabase, set, ref , get ,child ,update,remove} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyD6m8cyeQxqd-l50Z2qvSC3iwfb-XWDJTA",
    authDomain: "fir-crud1-js.firebaseapp.com",
    databaseURL: "https://fir-crud1-js-default-rtdb.firebaseio.com",
    projectId: "fir-crud1-js",
    storageBucket: "fir-crud1-js.appspot.com",
    messagingSenderId: "678171936987",
    appId: "1:678171936987:web:b873b30e0d7fbb21f2a4fe"
});

// cela me permet d'avoir l'acces a mes données de firebase
const db = getDatabase(firebaseApp);

// fonction pour ajouter un utilisateur (CREATE)
function ajouterUtilisateur() {
    let Name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    set(ref(db, "utilisateurs/"), {
        name: Name,
        age: age,
        address: address,
        email: email
    }).then(() => {
        alert("users stored successfully")
    }).catch((error) => {
        alert("err")
    })
}
document.getElementById("create").addEventListener("click", (e) => {
    e.preventDefault();
    ajouterUtilisateur();
})

// fonction pour recuperer tous les utilisateurs (READ)
function recupererUtilisateurs() {
    const dbRef = ref(db);
    get(child(dbRef, "utilisateurs/")).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
} 
document.getElementById("read").addEventListener("click", (e) => {
    e.preventDefault();
    recupererUtilisateurs();
})
// fonction pour update un utilisateur (UPDATE)
function modifierUtilisateur(modifications){
    update(ref(db,"utilisateurs"), modifications)
    .then(()=>console.log("utilisateurs mis à jour avec succes"))
    .catch((error)=>console.log("Erreur lors de la mise à jour de l'utilisateur :', error)"))
}
document.getElementById("update").addEventListener("click", (e) => {
    e.preventDefault();
    modifierUtilisateur({
        name: "ali jaber",
        age: "56",
        address: "arabie saudite",
        email: "jaber@gmail.com"
    });
})

// fonction pour delete un utilisateur (DELETE)
function supprimerUtilisateur(){
    remove(ref(db,"utilisateurs"))
    .then(()=>console.log("utilisateurs supprimer à jour avec succes"))
    .catch((error)=>console.log("Erreur lors de la suppression de l'utilisateur :', error)"))
}
document.getElementById("delete").addEventListener("click", (e) => {
    e.preventDefault();
    supprimerUtilisateur();
})

