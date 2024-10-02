function IntoHome(){
    des();

    document.querySelector(".welcome").classList.add("aparecer_dr");
};

function IntoOlimpiadas(){
    des();

    document.querySelector(".tela").classList.add("aparecer_db");
};

/*      */
function IntoChat(){
    des();
    document.querySelector(".telachat").classList.add("apdr");
}

function des(){
    document.querySelector(".welcome").classList.remove("aparecer_dr");
    document.querySelector(".tela").classList.remove("aparecer_db");

    document.querySelector(".videotela").classList.remove("aparecer_db2");
    document.querySelector(".videotela").classList.remove("aprecer_db2");

    document.querySelector(".telachat").classList.remove("apdr");
};


function IntoOlimpiada1(){
    des();

    document.querySelector(".videotela").classList.add("aparecer_db2");
};

IntoHome();