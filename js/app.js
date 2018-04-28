/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) { // constructeur
		this.storage = new app.Store(name); // CRUD on execute la fonction Store avec name - on ne passe pas d'arg callbak comme le demande la fte dans store.js ??
		this.model = new app.Model(this.storage); // tous les éléments que l'on a besoin d'afficher dansd la vue == interagir avec le model qui agit lui même avec le localstorage
		this.template = new app.Template(); // dom
		this.view = new app.View(this.template); // affichage
		this.controller = new app.Controller(this.model, this.view); // interagir avec la view
	}

	var todo = new Todo('todos-vanillajs'); // declarer todo dans le scope de la fonction
	console.log(todo);

	function setView() { //=notion de routeur
		todo.controller.setView(document.location.hash); // = methode document.location // on appelle setview dans controller
	}

	// POINT D'ENTREE DE L'APPLI 
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);


})();
