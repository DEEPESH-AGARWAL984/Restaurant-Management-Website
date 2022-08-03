// To validate the information given by the customer.

function validate(){
    var name = document.getElementById("custname").value;
    var contact = document.getElementById("custcontact").value; 
    if(name == "" || contact == ""){
        alert("No blank fields are allowed");
    }
    else{
        alert("Please enter the details.");
    }
}