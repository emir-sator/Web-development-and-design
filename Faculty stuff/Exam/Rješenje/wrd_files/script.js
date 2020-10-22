function ValidacijaIme(id) {
    var element = document.getElementById(id);
    var provjera = true;
    var regex = /^[A-Za-z]+$/;
    if (regex.test(element.value) == false) {
        provjera = false;
    }
    if (provjera == false) {

        element.classList.add("error");
    } else {
        element.classList.remove("error");
    }
}





function ValidacijaAdresa(id) {
    var element = document.getElementById(id);
    var provjera = true;
    var regex = /^[A-Za-z]+$/;
    if (regex.test(element.value) == false) {

        provjera = false;
    }
    if (provjera == false) {
        element.classList.add("error");
    } else {
        element.classList.remove("error");
    }

}

function ValidacijaPostanskiBroj(id) {
    var element = document.getElementById(id);
    var provjera = true;
    var regex = /^\d+$/;
    if (regex.test(element.value) == false) {

        provjera = false;
    }
    if (provjera == false || element.value.length != 5) {
        element.classList.add("error");
    } else {
        element.classList.remove("error");
    }

}
/*-	Broj telefona – format: +111-11-111-1111*/
function ValidacijaTelefon(id) {
    /*     var element = document.getElementById(id);
        var provjera = true;
        var prvi = element.value.slice(0, 1);
        if (prvi != "+")
            provjera = false;
        var peti = element.value.slice(4, 5);
        if (peti != "-")
            provjera = false;
        var osmi = element.value.slice(7, 8);
        if (osmi != "-")
            provjera = false;
        var dvanaesti = element.value.slice(11, 12);
        if (dvanaesti != "-")
            provjera = false;
        var treci = element.value.slice(1, 4);
        var treciRegex = /^\d+$/;
        if (treciRegex.test(treci) == false)
            provjera = false;
        var cetvrti = element.value.slice(6, 8);
        var cetvrtiRegex = /[0-9]/;
        if (cetvrtiRegex.test(cetvrti) == false)
            provjera = false;
        var peti = element.value.slice(8, 11);
        var petiRegex = /^\d+$/;
        if (petiRegex.test(peti) == false)
            provjera = false;
        var sesti = element.value.slice(13, 16);
        var sestiRegex = /^\d+$/;
        if (sestiRegex.test(sesti) == false)
            provjera = false;

        if (provjera == false || element.value.length != 16)
            element.classList.add("error")
        else
            element.classList.remove("error") */



    var element = document.getElementById(id);
    var regex = /\+[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{4}/;
    if (regex.test(element.value) == false) {
        element.classList.add("error");
    } else {
        element.classList.remove("error");
    }





}


function klik1(id) {

    var element = document.getElementById(id);
    if (element.style.border == "none")
        element.style.border = "3px solid yellow";
    else {
        element.style.border = "none";
    }

}

/*var elementi = document.getElementsByClassName('VilaKolonaOkvir');

for (var i = 0; i < elementi.length; i++) {

    elementi[i].onmouseover = hoveruj;
    elementi[i].onmouseout = iskljuciHover;
}

function hoveruj() {
    this.style.border = '3px solid yellow';
}

function iskljuciHover() {
    this.style.border = 'none';
}*/

function show_hide() {

    var element = document.getElementById("Izbornik");

    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

//service

function Dodaj() {
    //prvo pravimo objekat koji dodajemo, prikupljamo vrijednosti koje korisnik unese
    var kupac = new Object();
    kupac.dostavaIme = document.getElementById("dostavaIme").value;
    kupac.dostavaAdresa = document.getElementById("dostavaAdresa").value;
    kupac.dostavaPostanskiBroj = document.getElementById("dostavaPostanskiBroj").value;
    kupac.dostavaTelefon = document.getElementById("dostavaTelefon").value;
    kupac.napomena = document.getElementById("napomena").value;

    var strJson = JSON.stringify(kupac);

    var url = 'http://onlineshop.wrd.app.fit.ba/api/ispit20190622/Narudzba/Dodaj';
    zahtjev = new XMLHttpRequest();

    zahtjev.onload = function() {
        if (zahtjev.status === 200) {
            var x = zahtjev.responseText;
            var r = JSON.parse(x);
            btnDownloadSve();
        } else {
            alert("Server javlja grešku: " + zahtjev.statusText);
        }
    }

    zahtjev.onerror = downloadGreska;

    zahtjev.open("POST", url, true);
    zahtjev.setRequestHeader("Content-Type", "application/json");
    zahtjev.send(strJson);
}

function downloadUspjesno() {
    if (zahtjev.status === 200) {
        var x = zahtjev.responseText; //preuzimamo text
        var n = JSON.parse(x); //parsiramo ga iz jsona u js objekt

        for (var i = 0; i < n.length; i++) {
            var r = n[i];

            var red = document.createElement('tr'); //kreiramo jedan red
            document.getElementById("tabelaID").appendChild(red); // dodajemo ga u tabelu

            var kolona1 = document.createElement('td'); //kreiramo 7 kolona
            var kolona2 = document.createElement('td');
            var kolona3 = document.createElement('td');
            var kolona4 = document.createElement('td');
            var kolona5 = document.createElement('td');
            var kolona6 = document.createElement('td');
            var kolona7 = document.createElement('td');

            red.appendChild(kolona1); //dodajemo ih u red koji smo prethodno napravili
            red.appendChild(kolona2);
            red.appendChild(kolona3);
            red.appendChild(kolona4);
            red.appendChild(kolona5);
            red.appendChild(kolona6);
            red.appendChild(kolona7);

            //preko innertext dodajemo vrijednosti u kolone
            kolona1.innerText = r.narudzbaId;
            kolona2.innerText = r.datumNarudzbe;
            kolona3.innerText = r.dostavaIme;
            kolona4.innerText = r.dostavaAdresa;
            kolona5.innerText = r.dostavaPostanskiBroj;
            kolona6.innerText = r.dostavaTelefon;
            kolona7.innerText = r.napomena;
        }
    }
    else {
        alert("Server javlja grešku: " + zahtjev.statusText);
    }
}

function downloadGreska() { alert('Greška u komunikaciji sa serverom.'); };

function btnDownloadSve() {

    var mojUrl = 'http://onlineshop.wrd.app.fit.ba/api/ispit20190622/Narudzba/GetAll';
    zahtjev = new XMLHttpRequest();

    zahtjev.onload = downloadUspjesno;
    zahtjev.onerror = downloadGreska;

    zahtjev.open("GET", mojUrl, true);
    zahtjev.send(null);
}