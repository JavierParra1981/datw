/**
 * Created by aissa on 3/7/17.
 */


// Exercice 1

var Form1Values = new Array(2);

function saveForm1Value() {

    Form1Values[0] = document.getElementsByName('name-form-1')[0].value;
    Form1Values[1] = document.getElementsByName('age-form-1')[0].value;
    Form1Values[2] = document.getElementsByName('status-form-1')[0].value;

    return Form1Values;
}

function readForm1(){
    document.getElementById("name-showing-1").innerHTML= "Nombre: "+Form1Values[0];
    document.getElementById("age-showing-1").innerHTML= "Edad: "+Form1Values[1];
    document.getElementById("status-showing-1").innerHTML="Estado Civil: "+ Form1Values[2];
}

// Exercice 2

var Form2Values = new Array(1);

function saveForm2Value() {

    Form2Values[0] = document.getElementsByName('salary-form-2')[0].value;
    Form2Values[1] = document.getElementsByName('name-form-2')[0].value;

    return Form2Values;
}


function readForm2(){
    document.getElementById("salary-showing-2").innerHTML= "Salario : "+Form2Values[0] + " €";
    document.getElementById("name-showing-2").innerHTML= "Nombre: "+Form2Values[1];
}

// Exercice 3

var Form3Values = new Array(1);

function saveForm3Value() {

    Form3Values[0] = document.getElementsByName('username-form-3')[0].value;
    Form3Values[1] = document.getElementsByName('email-form-3')[0].value;

    return Form3Values;
}

//Todo : Add function to validate email and username

function readForm3(){
    document.getElementById("username-showing-3").innerHTML= "Nombre de usuario : "+Form3Values[0] ;

    document.getElementById("email-showing-3").innerHTML= "Email : "+Form3Values[1];
}

