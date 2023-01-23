let Price = 0;
let totalDiscount = 0;
let totalPrice = 0;
let user =  JSON.parse(localStorage.getItem("userDetails"));
async function getCart(){
    console.log(user.id)
    let req = await fetch(`http://localhost:3300/cart/${user.id}`)
    req = await req.json();
    // console.log(req)
    if(req.success){
        appendData(req.message)
    }
}
getCart() 



function appendData(data){

    document.getElementById("cart-holder").innerHTML = "";
    data.map((item)=>{
        Price += item.old_price;
        totalDiscount += item.discount;
        totalPrice += item.new_price;

        document.getElementById("cart-holder").innerHTML+=
        `<div id="cart-container">
        <div id="cart">
        <div id="cart-img">
            <img src=${item.image} alt="kawai">
        </div>
        <div id="cart-details">
            <p>${item.description}</p>
            <h3>₹${item.new_price}</h3>
            <button>+</button>
            <span>${item.quantity}</span>
            <button>-</button>
            <button onclick=${removeproduct(item._id)} >REMOVE</button>

        </div>
    </div>
    
       

    </div>`
    });
    document.getElementById("payment").innerHTML =  `
       <div>
       <h5>PAYMENT DETAILS</h5><hr>
       <p>PRICE : ₹${Price}</p>
       <p>TOTAL DISCOUNT : ₹${totalDiscount}</p>
       <p>TOTAL AMOUNT : ₹${totalPrice}</p>
       <button onclick = handleclick()> CHECKOUT </button>
       </div>
`
}

function handleclick() {
    alert("Purchase successfull!!!")
    window.location.href = "index.html"
}

async function removeproduct(id){
    let req = await fetch(`http://localhost:3300/cart/deleteCart/${id}`,{
        method: "DELETE",
    })
    req = await req.json();
    // console.log(req)
    getCart();

}




