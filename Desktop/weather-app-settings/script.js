function setinvinsible() {
    img= document.getElementById("Miles").setAttribute("class", "done_invinsible"); 
    img2 = document.getElementById("Kilometers").setAttribute("class", "done_invinsible"); 
    img3 = document.getElementById("Knotes").setAttribute("class", "done_invinsible"); 
    img4 = document.getElementById("second").setAttribute("class", "done_invinsible"); 
    img5 = document.getElementById("beaufort").setAttribute("class", "done_invinsible"); 
    document.getElementById("Kilometerstxt").setAttribute("class", "Kilometers1");
    document.getElementById("Milestxt").setAttribute("class", "Mile1");
    document.getElementById("windspeedtxt").innerHTML = "Wind speed Units"; 
    document.getElementById("Knotestxt").setAttribute("class", "Knotes1");
    document.getElementById("Secondtxt").setAttribute("class", "second1");
    document.getElementById("Beauforttxt").setAttribute("class", "beaufort1");
}

let windspeedtxt = document.getElementById("windspeedtxt"); 
let temperaturunitstxt = document.getElementById("temperaturunitstxt");

function celsiusclick() {
    img= document.getElementById("done1").getAttribute("class"); 
    img2 = document.getElementById("fahrenheit").getAttribute("class"); 

    if(img == "done_invinsible" && img2 == "Fahrenheit") {
        temperaturunitstxt.innerHTML = "Temperatur Units"; 
        Celsius = " (Celsius)"; 
        document.getElementById("done1").setAttribute("class", "done");
        document.getElementById("celsius").setAttribute("class", "celsius");
        document.getElementById("done2").setAttribute("class", "done_invinsible");
        document.getElementById("fahrenheit").setAttribute("class", "celsius_invinsible"); 
        temperaturunitstxt.innerHTML += Celsius;
    }

}

function fahrenheitclick() {
    img= document.getElementById("done1").getAttribute("class"); 
    img2 = document.getElementById("fahrenheit").getAttribute("class"); 

    if(img == "done" && img2 == "celsius_invinsible") {
        Fahrenheit = " (Fahrenheit)"; 
        temperaturunitstxt.innerHTML = "Temperatur Units"
        document.getElementById("done1").setAttribute("class", "done_invinsible");
        document.getElementById("celsius").setAttribute("class", "celsius_invinsible");
        document.getElementById("fahrenheit").setAttribute("class", "Fahrenheit"); 
        document.getElementById("done2").setAttribute("class", "done"); 
        temperaturunitstxt.innerHTML += Fahrenheit; 
    }
}

function clickmile() {
    Mile = " (Miles)"; 
    setinvinsible(); 
    document.getElementById("Miles").setAttribute("class", "done"); 
    document.getElementById("Milestxt").setAttribute("class", "miles");
    windspeedtxt.innerHTML += Mile; 
}

function clickkilometer() {
    Kilometers = " (km/h)"; 
    setinvinsible(); 
    document.getElementById("Kilometers").setAttribute("class", "done"); 
    document.getElementById("Kilometerstxt").setAttribute("class", "Kilometers");
    windspeedtxt.innerHTML += Kilometers; 
}

function clickknotes() {
    Knotes = " (Knotes)"; 
    setinvinsible(); 
    document.getElementById("Knotes").setAttribute("class", "done"); 
    document.getElementById("Knotestxt").setAttribute("class", "Knotes");
    windspeedtxt.innerHTML += Knotes; 
}

function clicksecondfunk() {
    second = " (m/s)"; 
    setinvinsible(); 
    document.getElementById("second").setAttribute("class", "done"); 
    document.getElementById("Secondtxt").setAttribute("class", "second");
    windspeedtxt.innerHTML += second; 
}

function clickbeaufort() {
    beaufort = " (Beaufort)"; 
    setinvinsible(); 
    document.getElementById("beaufort").setAttribute("class", "done"); 
    document.getElementById("Beauforttxt").setAttribute("class", "beaufort");
    windspeedtxt.innerHTML += beaufort; 
}

