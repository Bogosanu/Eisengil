window.onload = function(){

    var form= document.getElementById("formular");
    let button = document.getElementById("submit_button");
    let calcbutton = document.getElementById("calculate_button");
    button.addEventListener("click", function(e) {
        var name = form.elements[3].value;
        var product = form.elements[0].value;
        localStorage.setItem(name, product);
    })

    calcbutton.addEventListener("click", function(e) {
        const date = new Date();
        var product = form.elements[0].value;

        //demonstratie localStorage
        //let nume_cautat = prompt();
        //alert(localStorage.getItem(nume_cautat));


        e.preventDefault();
        if(product == "gard"){
            date.setDate(date.getDate() + 14);
        }
        if(product == "scari"){
            date.setDate(date.getDate() + 7);
        }
        if(product == "balustrada"){
            date.setDate(date.getDate() + 21);
        }
        if(product == "custom"){
            document.getElementById("est").value = "Nu se poate estima";
        }
        else{
            date.setMonth(date.getMonth() + 1); // nu stiu de ce crede ca data curenta e cu o luna in urma asa ca o fortez eu sa fie corecta manual
            document.getElementById("est").value = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        }
    })





}