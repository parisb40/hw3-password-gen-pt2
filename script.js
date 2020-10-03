//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").vaule;

    //possible password values
    let values = "ABSDEFGHIJKLNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz134567890!@#$%^&*()_=-+";

    let password ="";

    //create for loop to choose password characters
    for(var i = 0; i<= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
}
//add password to textbox/display area
document.getElementsByClassName("display").value = password;

//add passwor to previously generated password secation
document.getElementById("lastNums").innerHTML += password + "br />";

}

//set default length display of 25
document.getElementById("length").innerHTML = "length: 25";

//funcation to set length based on slider position
document.getElementById("slider").oninput = funcation(){
    if(document.getElementById("slider").value >0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;

    }
    else{
        document.getElementById("length").innerHTML = "length: 1"
    }

}

//funcation to copy password to clipboard
funcation copypassword(){

    document.getElementById("display").select();

    document.exeCommand("copy");

    alert("password copied to clipboard!");
}