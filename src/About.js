import React from "react";

function About() {
  return (
    <div className="mx-3 px-3">
      <br />
      <h2>A propos de l'application :</h2>
      <p>
        Cette application est conçu pour appliqué les connaissances Fontend
        basées sur <strong>ReactJS</strong> et <strong>Bootstrap</strong>, c'est
        une sorte de logiciel de gestion de stocks des livres pour librairie.
      </p>
      <br />
      <h3>Features de l'application :</h3>
      <p>Les fonctionalitées sont : </p>
      <ul>
        <li>
          L'affichage des livres, avec toutes les info (Titre, category, auteur,
          prix, stock ...).
        </li>
        <li>
          Le filtrage de l'affichage des livres par catégorie, ou les buttons du
          filtre sont générés par les catégories existantes
        </li>
        <li>
          L'ajout, la modification, la suppression d'un livre (une sorte de
          CRUD)
        </li>
        <li>
          Un formulaire caché et qui s'affiche uniquement lorsqu'on veut ajouter
          ou modifier un livre avec les chargement automatique des données du
          livre à modifié sur le formulaire.
        </li>
        <li>
          La possibilité de modifié le Stock d'un livre directement sur la liste
          des livres
        </li>
      </ul>
      <br />
      <h3>Techno utilisé dans ce projet :</h3>
      <p>
        ReactJS : Props, UseState, UseEffect, props chiling, conditional
        rendering, controlled inputs, handle submit form, React Router, CSS in
        JS <br /> Design : CSS (Flexbox, Position, Color), Bootstrap (Cards,
        Navbar, Responsive, container, Form, Button, Imput, Utilities)
      </p>
      <hr />
      <footer>
        <h3>Contactez le Developeur :</h3>
        <h6>Email : ahmed_sadaoui@yahoo.com</h6>
        <h6>Github : https://github.com/medsada</h6>
        <h6>Linkedin : https://www.linkedin.com/in/ahmed-sadaoui-46b27219b/</h6>
        <br />
      </footer>
    </div>
  );
}

export default About;
