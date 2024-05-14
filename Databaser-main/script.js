let x;
let listWithLearned = []; // Laver variablen "listeMedValgte" til en liste. Markeret med []
let listLearnedNumber = [];
let data;
var theme = null // Sætter variablen til ingenting
var explanation = "Korrekt svar:" // Sætter variablen til ingenting
let trigger = 1; // Sætter variabel som checker om hvorvidt svaret er vist

function next() {
  if (trigger == 1) {
    var pic;
    FindNew()
    findText(x); // Kalder funktionen "genererTekst" med x som værdi
    pic = "https://github.com/mpsteenstrup/GCP4/blob/master/FN_maal/FN"+image+".jpg?raw=true" // Vælger billede baseret på x
    document.getElementById('theme').innerHTML = overskrift; // Returnere information til HTML og "variablen" "overskrift"
//  document.getElementById('question').src = pic; // Returnere information til HTML og "variablen" "myImage"
    document.getElementById('question').innerHTML = "Forklar "+image;
    document.getElementById('explanation').innerHTML = "Korrekt svar:";
    trigger = 0 // Sætter svarer til ikke vist
  } else {
    document.getElementById('explanation').innerHTML = "Korrekt svar: TRYK VIS SVAR FØRST";
  }
}

function learned() {
  if (trigger == 1) { //Kan kun "læres" vis svaret er vist
    listLearnedNumber.push(x) // Suplerer på listen
    listWithLearned.push(" "+image) // Tilføjer overskriften som det sidste i listen med variable
    document.getElementById('choose').innerHTML = "Lærte begreber: "+listWithLearned; // Returnere information til HTML og "variablen" "valg"
    next() // Kører "næste" funktionen
  } else {
    document.getElementById('explanation').innerHTML = "Korrekt svar: TRYK VIS SVAR FØRST"; // vis svaret ikke er vist, skal man trykke på vis korrekte svar
  }
}

function FindNew() {
  y = Math.floor(Math.random()*26+1); // Vælger tilfældig mellem 1 og 5. Math.random vælger mellem 0 og 1 og derfor ganges med antallet af muligheder og ligger en til for at starte ved 1. Math.floor runder ned til nærmeste hele tal.
  if (listLearnedNumber.includes(y)) { //Sikrer at den ikke vælger noget allerede lært, ved at tjekke om listen af lærte inkluderer x
    FindNew() //Hvis den er der, finder den en ny, indtil den kan finde en ny
  } else {
    x = y
  }
}

function reveal(){
  document.getElementById('explanation').innerHTML = "Korrekt svar: "+beskrivelse; // Returnere information til HTML og "variablen" "beskrivelse"
  trigger = 1 //Ved vis korrekte svar, sætter den variabelen til svaret er vist
}

function findText(x){
  for (var i = 0; i < data.length; i++) { // Starter med at sætte i til 0 og bliver ved med at køre indtil den bliver afbrudt
    if (data[i]["ID"] == x) { // Tjekker om i er det samme som den angivede x
      overskrift = data[i]['theme']; // Sætter "overskrift" til at være den returnede data fra databasen
      beskrivelse = data[i]['explanation']; // Sætter "beskrivelse" til at være den returnede data fra databasen
      image = data[i]['image']; // Sætter "beskrivelse" til at være den returnede data fra databasen

      break; // exit efter loop
    }
  }
}

window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "flashcards.csv", true); // Vælger data filen
  xhr.responseType = "text";
  xhr.onload = function() {
    data = Papa.parse(xhr.responseText, { // Bruger tidligere indlæst bibliotek
      header: true // set this to true if the first row contains the header names
    }).data;
  };
  xhr.send();
}
