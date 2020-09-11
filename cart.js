
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i]
    button.addEventListener("click", function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.parentElement.remove()
        updatecart()
    })
}

// update cart 
function updatecart() {
    var cart_item = document.getElementsByClassName("products")[0];
    var cart_rows = cart_item.getElementsByClassName("firstProduct");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i]
        var price_item = cart_row.getElementsByClassName("price")[0].innerText.match(/\$(\d+)/)[1]
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(price_item)// chuyển một chuổi string sang number để tính tổng tiền.
        var quantity = quantity_item.value // lấy giá trị trong thẻ input
        total += (price * quantity)
    }
    document.getElementsByClassName("cart-total-price1")[0].textContent = '$' + total
    document.getElementsByClassName("cart-total-price2")[0].textContent = '$' + total
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}

if (!localStorage.getItem('prd')) {
    localStorage.setItem('prd', JSON.stringify([]));
}
let bag1 = JSON.parse(localStorage.getItem('prd'));
var cartItems = document.getElementsByClassName('products')[0]
// var cartRow = document.createElement('div')
// cartRow.classList.add('products')
cartItems.innerHTML = '';
for (let i = 0; i < bag1.length; i++) {
    console.log(bag1[i]);
    var cartRowContents = `
                            <div class="firstProduct">
                                <div class="prdImg"><img style="height: 150px; width: 150px"
                                        src = '${bag1[i].img1}'
                                        alt=""></div>
                                <div class="manage">
                                    <div class="name-price">
                                        <div class="name">${bag1[i].title1}</div>
                                        <div class="price">$${bag1[i].price1}</div>
                                    </div>
                                    <div class="prdType">Men's Shoe</div>
                                    <div class="size-amount">
                                        <div class="size">Size:<input id="amount" class="cart-size-input" type="number"
                                                value="7"></div>
                                        <div class="size">Quantity: <input id="amount" class="cart-quantity-input"
                                                type="number" value="${bag1[i]['quantity'] ?? 1}"></div>
                                    </div>
                                    <div class="removePrd">
                                        <a class="btn-danger" href="##">Remove</a>
                                    </div>
                                </div>
                            </div>`;
    cartItems.insertAdjacentHTML('beforeend', cartRowContents);
}

var remove_cart1 = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart1.length; i++) {
    var button = remove_cart1[i]
    button.addEventListener("click", function () {
        var button_remove1 = event.target
        button_remove1.parentElement.parentElement.parentElement.remove()
        updatecart()
    })
}
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
    var input1 = quantity_input[i];
    input1.addEventListener("change", function (event) {
        var input1 = event.target
        if (isNaN(input1.value) || input1.value <= 0) {
            input1.value = 1;
        }   
        updatecart()
    })
}

//Vừa tải trang xong thì chạy updateCart
window.onload = () => {
    updatecart()
}

//Thanh toán
var check_out = document.getElementById('order');
check_out.addEventListener('click', function (){
    alert('Thanks for your trust in shopping at NikeRetailer')
})

var localStorageSpace = function(){
    var data = '';

    console.log('Current local storage: ');

    for(var key in window.localStorage){

        if(window.localStorage.hasOwnProperty(key)){
            data += window.localStorage[key];
            console.log( key + " = " + ((window.localStorage[key].length * 16)/(8 * 1024)).toFixed(2) + ' KB' );
        }

    }

    console.log(data ? '\n' + 'Total space used: ' + ((data.length * 16)/(8 * 1024)).toFixed(2) + ' KB' : 'Empty (0 KB)');
    console.log(data ? 'Approx. space remaining: ' + (5120 - ((data.length * 16)/(8 * 1024)).toFixed(2)) + ' KB' : '5 MB');
};
// localStorageSpace()
