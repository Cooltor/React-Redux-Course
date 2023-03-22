// Importer les outils react
import React from "react";
import ReactDOM from "react-dom/client";

//Importer notre premier composant
import { App } from "./App";

// Cible l'id root de notre index.html
const divRoot = document.querySelector("#root");

// Créer un noeud racine React à partir de la div root
const reactRoot = ReactDOM.createRoot(divRoot);

// Injecter notre composant App dans le noeud racine
reactRoot.render(<App />);
