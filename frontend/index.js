// sign up

document.querySelector('#signupform').addEventListener('submit', async(e) => {
    let obj = {
        "name":document.getElementById("name").value ,
        "gender":document.getElementById("gender").value ,
        "email":document.getElementById("signemail").value ,
        "password":document.getElementById("signpass").value
    }
    e.preventDefault();
    let req = await fetch('https://chiffon-clothing.onrender.com/users/register',{
        "method":"POST",
        "body":JSON.stringify(obj),
        "headers":{
            "content-type":"application/json"
        }
    })
    req = await req.json()
    console.log(obj,"obj")
    console.log(req,"req")
    if(req.success) {
        alert("Signup successful")
    } else {
        alert(req.message)
    }
    
});

document.getElementById("loginform").addEventListener("submit",async(e) => {
    e.preventDefault();
    let obj={
        "email":document.getElementById("loginemail").value,
        "password":document.getElementById("loginpass").value
    }
    let req = await fetch('https://chiffon-clothing.onrender.com/users/login',{
        "method":"POST",
        "body":JSON.stringify(obj),
        "headers":{
            "content-type":"application/json"
        }
    })
    req = await req.json();
    console.log(obj,"obj")
    console.log(req,"req")
    if(req.success) {
        alert("login successful")
        let dec= jwt_decode(req.message)
        console.log(dec,"dec")
        localStorage.setItem("token",JSON.stringify(req.message));
    } else {
        alert(req.message)
    }
})