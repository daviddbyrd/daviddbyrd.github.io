document.getElementById('userForm').addEventListener('submit', function(event){

        event.preventDefault();

        var nameValue = document.getElementById("nameInput").value;
        var emailValue = document.getElementById("emailInput").value;
        var userForm = document.getElementById("userForm");

        userForm.style.display = "none";

        document.getElementById("placeholder").innerHTML=nameValue+", thank you for your details. We will be in touch via "+emailValue+" shortly."


})