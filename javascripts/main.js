// "use strict";

$(document).ready(function() {
  var contentEl = $("#storefront");
  var dropdownShow = $("#dropdownItems");
  var categoriesArray = [];
  var typesArray = [];
  var productsArray = [];
  var categoryID;


///////Grabbing Data
  function getCategories(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../data/categories.json"
      }).done(function(categories){
        resolve(categories);
      }).fail(function(xhr, status, error){
        reject(error);
      });
    });
  }

  function getTypes(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../data/types.json"
      }).done(function(types){
        resolve(types);
      }).fail(function(xhr2, status2, error2){
        reject(error2);
      });
    });
  }

  function getProducts(resultOfTypes){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../data/products.json"
      }).done(function(products){
        resolve(products);
      }).fail(function(xhr3, status3, error3){
        reject(error3);
      });
    });
  }

  function dropDownMaker() {
    for (var i = 0; i < categoriesArray.length; i++) {
      dropdownShow.append(`<li id='category${categoriesArray[i].id}'><a href='#'>${categoriesArray[i].name}</a></li>`);
      categoryID = `category${categoriesArray[i].id}`;
    }
      $("#category0").click(function () {
        // console.log("testing");
        callProducts();
      });
      $("#category1").click(function () {
        // console.log("testing");
        callProducts();
      });
  }

  function callProducts () {
    console.log("test456");
  }

  getCategories().then((categoriesPass)=>{
    categoriesArray = categoriesPass.categories;
    dropDownMaker();

    console.log("categories", categoriesArray);
    return getTypes();
  }).then((typesPass)=>{
    console.log("typesPass", typesPass);
    return getProducts(typesPass);
  }).then((productsPass)=>{
    console.log("productsPass", productsPass);
  });

});