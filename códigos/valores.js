
// const firebaseConfig = {
//     apiKey: "AIzaSyCc3e3V-3mFcTHUfaFMX0L1l3NTH1Dg9WA",
//     authDomain: "pizzaria-bca46.firebaseapp.com",
//     projectId: "pizzaria-bca46",
//     storageBucket: "pizzaria-bca46.appspot.com",
//     messagingSenderId: "538730966606",
//     appId: "1:538730966606:web:0662649dcce23545cf1d1f",
//     measurementId: "G-YH83PCQE1L"
  
// };
// firebase.initializeApp(firebaseConfig);
// const pedido = "clientes"
// const db = firebase.firestore();

// //  //opcoes tamanho da pizza
// // let select = document.getElementById("tamanho")
// //  //opções da pizza salgada
// // let select1 = document.getElementById("salgada")
// //  //opcoes sobremesa
// // let select2 = document.getElementById("sobremesas")

//  //opcoes tamanho da pizza
// let select = document.getElementById("tamanho")
//  //opções da pizza salgada
// let select1 = document.getElementById("salgada")
//  //opcoes sobremesa
// let select2 = document.getElementById("sobremesas")



// let seila = function enviarPedido() {
//   let nome = document.querySelector("input[type=text]").value
//   let tamanho = select.options[select.selectedIndex]
//   let sabor = select1.options[select.selectedIndex]
//   let sobremesa = select2.options[select.selectedIndex]
//   let compl = document.querySelectorAll("input[type=radio]")
//   let check = document.querySelectorAll("input[type=check]")
//   let obs = document.querySelector("#textobs").value
   

//   db.collection(pedido).add({
//       name: nome,
//       tamanho: tamanho.getAttribute("number"),
//       sabor: sabor.getAttribute("number"),
//       sobremesa: sobremesa.getAttribute("number"),
//       compl: compl.getAttribute("number"),
//       check: check.getAttribute("number"),
//       obs: obs
//   }).then((doc) => {
//     console.log("Document successfully written!", doc);
//   })
//   .catch((error) => {
//     console.error("Error writing document: ", error);
//   });

// }