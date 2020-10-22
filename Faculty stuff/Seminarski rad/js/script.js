var cijene = { "V1": 4, "V2": 3, "V3": 3, "V4": 5, "V5": 2.5, "V6": 3, "V7": 2, "V8": 2, "V9": 4, "V10": 4, "V11": 3, "V12": 3.5, "V13": 2, "V14": 2 };



function getCijenu() {
    var tempNiz = [];

    var v = document.getElementsByName("izbor");
    for (var i = 0; i < v.length; i++) {
        if (v[i].checked) {
            tempNiz.push(cijene[v[i].value]);
        }

    }

    return tempNiz;


}

function izracunajUkupno() {
    var x = document.getElementById("UkupnoDiv");
    x.style.display = "block";
    var ukupno = 0;


    var values = getCijenu();

    for (var i = 0; i < values.length; i++)
        ukupno += values[i];

    document.getElementById("UkupnoDiv").innerHTML = "Ukupno za platiti " + ukupno + " KM";
    document.getElementById("formaa").reset();

}

function klik() {

    var nav = document.getElementById("lista");

    if (nav.style.display === "block") {
        nav.style.display = "none";

    } else {
        nav.style.display = "block";
    }
}


function klik1() {
    var izbori = document.getElementById("child");

    if (izbori.style.display === "block") {
        izbori.style.display = "none";
    } else
        izbori.style.display = "block";
}


function hide() {
    var x = document.getElementById("UkupnoDiv");
    x.style.display = "none";
}


function VratiIndex() {
    var index = localStorage.getItem('index');
    if (index == undefined)
        return 0;
    return index;
}


function snimiPodatke() {
    var index = VratiIndex();

    var ime = document.getElementById('Ime').value;
    var prezime = document.getElementById('Prezime').value;
    var adresa = document.getElementById('Adresa').value;
    var telefon = document.getElementById('Telefon').value;


    if (adresa == "" || ime == "" || prezime == "" || telefon == "") {
        alert("Molimo unesite vase podatke");
        return;
    }


    localStorage.setItem('ime_' + index, ime);
    localStorage.setItem('prezime_' + index, prezime);
    localStorage.setItem('adresa_' + index, adresa);
    localStorage.setItem('telefon_' + index, telefon);

    document.getElementById('Ime').value = " ";
    document.getElementById('Prezime').value = " ";
    document.getElementById('Adresa').value = " ";
    document.getElementById('Telefon').value = " ";



    index++;
    localStorage.setItem('index', index);
    alert('Podaci uspjesno pohranjeni');
    hide();

}