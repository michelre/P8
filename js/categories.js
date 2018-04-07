/*function categoryBox () {
    const cate=document.getElementById("cat");
    const selectedValue=cate.options[cat.selectedIndex].value;
    if (selectedValue=="creer"){
        creer();
    } else {
        supprimer();
    }
    
}*/

function creer() {
    const newCategory=prompt("saisir le nom d'une rubrique");
    $('<option/>').html('<option value='+newCategory+'>'+newCategory+'</option>').appendTo($('select[id="categories"]'));
    $('<option/>').html('<option value='+newCategory+'>'+newCategory+'</option>').appendTo($('select[id="categoriesFooter"]'));
    
}


$('select[id="categoriesFooter"]').on('click',function (){
   const deadCategory=$(this).val()
    alert(deadCategory+" va être supprimée");
   $('option[val=deadCategory]').html(""); // selecteur déconne
});