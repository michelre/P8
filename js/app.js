/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) { // constructeur
		this.storage = new app.Store(name); 
		this.model = new app.Model(this.storage); 
		this.template = new app.Template(); 
		this.view = new app.View(this.template); 
		this.controller = new app.Controller(this.model, this.view); 
	}

	var todo = new Todo('todos-vanillajs'); // declarer todo dans le scope de la fonction

	function setView() { //=notion de routeur
		todo.controller.setView(document.location.hash); // = methode document.location // on appelle setview dans controller
	}

	// POINT D'ENTREE DE L'APPLI 
	$on(window, 'load', setView); // event, selector, data
	$on(window, 'hashchange', setView);


})();
