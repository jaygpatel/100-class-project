function addUser(){


    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
    window.location ="info.html";
}

function b1(){

    window.location= "total_no_of_case.html";
}

function back(){

    window.location="info.html"
}


function b5(){

    window.location ="index.html";

}

