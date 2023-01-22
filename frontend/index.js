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
       
        localStorage.setItem("token",JSON.stringify(req.message));
        let req2 = await fetch('https://chiffon-clothing.onrender.com/users/decode',{
            "method":"POST",
            "body":JSON.stringify({token:req.message}),
            "headers":{
                "content-type":"application/json"
            }
        })
        req2 = await req2.json();
        localStorage.setItem("userDetails",JSON.stringify(req2.message));
        alert("login successful")
    } else {
        alert(req.message)
    }
})