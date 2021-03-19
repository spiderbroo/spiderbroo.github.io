/* скрываем и открываем форму */
var button = document.getElementById("recall");
button.addEventListener("click", showForm);

function showForm() {
    var form = document.getElementById("recall-me-form");
    form.style.display = "block";
    var closeButton = document.getElementById("close").addEventListener("click", function () {
        form.style.display = "none";
    });
}


jQuery(function ($) {
    $(document).mouseup(function (e) {
        var div = $("#recall-me-form");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.hide();
        }
    });
});

/*анимация для иконки меню*/
$(document).ready(function () {
    "use strict";
    var $menuIcon = $(".menu-icon");

    $menuIcon.click(function () {
        $(this).toggleClass("animate");
    });
});

/*карусель для баннера меню*/
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

/*карусель для баннера летнего меню*/
var summerslides = document.querySelectorAll('#summerslides .summerslide');
var currentSummerSlide = 0;
var summerslideInterval = setInterval(nextSummerSlide, 3000);

function nextSummerSlide() {
    summerslides[currentSummerSlide].className = 'summerslide';
    currentSummerSlide = (currentSummerSlide + 1) % summerslides.length;
    summerslides[currentSummerSlide].className = 'summerslide summershowing';
}

/*карусель для баннера акций и скидок*/
var sslides = document.querySelectorAll('#sslides .sslide');
var currentSSlide = 0;
var sslideInterval = setInterval(nextSSlide, 3000);

function nextSSlide() {
    sslides[currentSSlide].className = 'sslide';
    currentSSlide = (currentSSlide + 1) % sslides.length;
    sslides[currentSSlide].className = 'sslide sshowing';
}

/*открытие меню иконкой при мобильной версии сайта*/
function openbox(mobilemenu) {
    display = document.getElementById('mobilemenu').style.display;
    if (display == 'none') {
        document.getElementById('mobilemenu').style.display = 'block';
    } else {
        document.getElementById('mobilemenu').style.display = 'none';
    }
}



var buttonOpenCart = document.getElementById("cart-icon");
buttonOpenCart.addEventListener("click", showCart);

function showCart() {
    var cart = document.getElementById("cart");
    cart.style.display = "block";
    var closeCartButton = document.getElementById("close-cart").addEventListener("click", function () {
        cart.style.display = "none";
    });
}

jQuery(function ($) {
    $(document).mouseup(function (e) {
        var div = $("#cart");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.hide();
        }
    });
});

var buttonRecall = document.getElementById("recall");
buttonRecall.addEventListener("click", showBg);


function showBg() {
    var bg = document.getElementById("bg_layer");
    bg.style.display = "block";
    var closeButton = document.getElementById("close").addEventListener("click", function () {
        bg.style.display = "none";
    });
}

var cartButton = document.getElementById("cart-icon");
cartButton.addEventListener("click", showBgr);

function showBgr() {
    var bg = document.getElementById("bg_layer");
    bg.style.display = "block";
    var closeButton = document.getElementById("close-cart").addEventListener("click", function () {
        bg.style.display = "none";
    });
}

var background = document.getElementById("bg_layer");
background.addEventListener("click", hideBgr);

function hideBgr() {
    background.style.display = "none";
};

$(".cart-icon").click(function () {
    $(".cart").addClass("animate");
    setTimeout(function () {
        $(".cart").removeClass("animate");
    }, 500) //Animate time
});

// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];

    // Constructor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<tr>" +
            "<td>" + cartArray[i].name + "</td>" +
            "<td>(" + cartArray[i].price + ")</td>" +
            "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>" +
            "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" +
            "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>" +
            "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>" +
            " = " +
            "<td>" + cartArray[i].total + "</td>" +
            "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();



function setCartHeight() {
    $('#cart').css({
        height: $(window).height() + 'px'
    });
};
setCartHeight();
$(window).resize( setCartHeight );