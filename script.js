let cart = JSON.parse(localStorage.getItem("cart")) || [];

function login(){
let role=document.getElementById("role").value;

if(role=="Admin"){
alert("Admin Login Successful");
window.location="admin.html";
}
else{
alert("User Login Successful");
window.location="products.html";
}
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert(name+" added to cart");
}

if(document.getElementById("cartItems")){

let output="";

let total=0;

cart.forEach((item,index)=>{
output+="<h3>"+item.name+" - ₹"+item.price+"</h3>";
total+=item.price;
});

output+="<h2>Total : ₹"+total+"</h2>";

document.getElementById("cartItems").innerHTML=output;

}

function placeOrder(){
alert("Order Placed Successfully!");
localStorage.removeItem("cart");
window.location="index.html";
}

function adminProduct(){

let name=document.getElementById("pname").value;

let price=document.getElementById("price").value;

alert("Product Added\n\n"+name+"\n₹"+price);

}
