/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) { // constructeur
		this.storage = new app.Store(name); // on execute la fonction Store avec name - on ne passe pas d'arg callbak comme le demande la fte dans store.js ??
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	var todo = new Todo('todos-vanillajs'); // declarer todo dans le scope de la fonction

	
	function setView() {
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);

	console.log(todo);

})();
