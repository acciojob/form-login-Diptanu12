function getFormvalue() {

    var firstName = document.getElementById("firstName").value;
    
    var lastName = document.getElementById("lastName").value;


    var fullName;
    if (lastName.includes(" ")) {
        fullName = firstName + " " + lastName;
    } else {
        fullName = firstName + " " + lastName;
    }

    alert(fullName);
}
