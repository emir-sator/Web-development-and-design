
//function klik() {

//    var Izbornik = document.getElementById("Izbornik");
//    //Izbornik.style.height = "0px";
//    if (Izbornik.style.height == "0px") {
//        Izbornik.style.height = Izbornik.scrollHeight + "px";
//    } else {
//        Izbornik.style.height = "0";
//    }
//    }
//};



function klik() {
    var Izbornik = document.getElementById("Izbornik");
    Izbornik.style.height = "0";

    if (Izbornik.style.height == "0px") {
        Izbornik.style.height = Izbornik.scrollHeight + "px";
    } else {
        Izbornik.style.height = "0";
    }
};