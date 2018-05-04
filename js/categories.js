

function creer() {
  const newCategory = prompt("saisir le nom d'une rubrique");
  $('<option value=' + newCategory + '>' + newCategory + '</option>').appendTo($('select[id="categories"]'));
  $('<option value=' + newCategory + '>' + newCategory + '</option>').appendTo($('select[id="categoriesFooter"]'));

}


$('select[id="categoriesFooter"]').on('change', function () {
  const deadCategory = $(this).val();
  const response = confirm(`Voulez-vous vraiment supprimer ${deadCategory} ?`);
  if (response) {
    $(`option[value=${deadCategory}]`).remove();
  }
});
