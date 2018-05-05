function Categories(store) {
  this.store = store;
  this.init();
  this.initEvents();
}

Categories.prototype.creer = function () {
  const newCategory = prompt("saisir le nom d'une rubrique");
  this.store.addCategory(newCategory);
  $('<option value=' + newCategory + '>' + newCategory + '</option>').appendTo($('select[id="categories"]'));
  $('<option value=' + newCategory + '>' + newCategory + '</option>').appendTo($('select[id="categoriesFooter"]'));
};

Categories.prototype.init = function () {
  const categories = this.store.getCategories();
  //TODO Mettre à jour le HTML en fonction des catégories récupérées depuis localStorage
};

Categories.prototype.initEvents = function(){
  $('select[id="categoriesFooter"]').on('change', function () {
    const deadCategory = $(this).val();
    const response = confirm(`Voulez-vous vraiment supprimer ${deadCategory} ?`);
    if (response) {
      $(`option[value=${deadCategory}]`).remove();
    }
  });
};
