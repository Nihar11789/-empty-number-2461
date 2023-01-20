async function getProduct (sort,filter){  
  console.log(sort,filter)
  let res = "";
  if(sort && filter){
     res = await fetch(`https://chiffon-clothing.onrender.com/product?_sort=${sort}&_rating=${filter}`)
  } else if(sort){
     res = await fetch(`https://chiffon-clothing.onrender.com/product?_sort=${sort}`)
  } else if(filter){
     res = await fetch(`https://chiffon-clothing.onrender.com/product?_rating=${filter}`)
  } else {
    res = await fetch(`https://chiffon-clothing.onrender.com/product`)
  }

  
  res = await res.json();
  //console.log(res,"hello")
  addProduct(res.message)
}
getProduct();
//map-for dynamic data---------------------------------
function addProduct(products){
    document.getElementById("product-container").innerHTML = "";
    products.map((item)=>{
    let div = document.createElement("div");
    div.setAttribute("id","products")

    let img = document.createElement("img");
    img.src = item.image
    img.setAttribute("id","product-img")

    let brand = document.createElement("h5");
    brand.innerText = item.brand;

    let desc = document.createElement("p");
    desc.innerText = item.description;
    
    let ratingdiv = document.createElement("div");
    ratingdiv.setAttribute("id","rating");

    let rating = document.createElement("p");
    rating.innerText = item.hidden_stars + "☆";

    let color = document.createElement("p");
    color.innerText = item.color;

// ------------------------------------------------------

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "price");

    let new_price = document.createElement("p");
    new_price.innerText = "₹" + item.new_price;

    let old_price = document.createElement("p");
    old_price.innerText = item.old_price;

    let discount = document.createElement("p");
    discount.innerText = item.discount + "% off";
    
    ratingdiv.append(rating)
    pricediv.append(new_price,old_price,discount)
    div.append(img,brand,desc,ratingdiv,color,pricediv)

    document.getElementById("product-container").append(div);
  })
}

//SORTING FUNCTIONALITY-------------------------------------------
let sort = undefined;
let filter = undefined;
document.getElementById("sorting").addEventListener("click",(e)=>{
     //console.log(e.target.value);
     sort = e.target.value;
     getProduct(e.target.value,filter);
})

//FILTER THE PRODUCT

document.getElementById("rating-filter").addEventListener("click",(e)=>{
    filter = +e.target.value;
     getProduct(sort,+e.target.value)
})
