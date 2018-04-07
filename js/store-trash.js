 // Generate an ID
    var newId = "";
    var charset = "0123456789";

    for (var i = 0; i < 6; i++) {
      newId += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    

       /* Solution pour remplacer l'id si deja existant ou générer un id unique*/
    const todoAlreadyExists = !!todos.find((t) => t.id === parseInt(newId, 10)); // on renvoie un booléen false 
    if(todoAlreadyExists){ //  if true est true coprendre que todoAlreadyExists est false
      id = parseInt(newId, 10)
    }