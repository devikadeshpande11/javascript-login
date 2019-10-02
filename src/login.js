function testlogin(){
   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "cichlid" && password == "cichlid123"){
    window.location="imgGallery.html";
    
    return false;
    }
    else{
        alert("login was unsuccessful");
    }
    
}