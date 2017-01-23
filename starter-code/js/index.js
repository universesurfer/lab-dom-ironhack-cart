function deleteItem(e){

}




function getPriceByProduct(index){

    var stringPrice = document.getElementsByClassName("item-cost")[index].innerHTML;   //Currently getting span id, not all elements
    var numberPrice = Number(stringPrice);

    return numberPrice;

}


function createQuantityInput(index){

    var quantity = document.getElementsByClassName("input-quantity")[index].value;      //retrieve quantity of item from form
    return quantity;
}




function updatePriceByProduct(index){


    var updatedPrice =  getPriceByProduct(index) * createQuantityInput(index);
    var itemTotal = document.getElementsByClassName("item-total-price")[index].textContent = updatedPrice;


    return itemTotal;

}




function getTotalPrice() {

}



function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
