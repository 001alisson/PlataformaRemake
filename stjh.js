function IntoHome(){
    des();
    buton1();

    document.querySelector(".welcome").classList.add("aparecer_dr");
    document.getElementById('listaV2').classList.add("sumir");
};

function IntoOlimpiadas(){
    des();
    buton2();

    document.querySelector(".tela").classList.add("aparecer_db");
};


function IntoQuizzes(){
    des();
    buton3();    
}

function IntoChat(){
    des();
    buton4();
    document.querySelector(".telachat").classList.add("apdr");
}

function IntoExposicao(){
    des();
    buton5();
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
    document.getElementById('listaV1').classList.remove("sumir");
    document.getElementById('listaV2').classList.add("sumir");
};

function IntoOlimpiada2(){
    IntoOlimpiada1();

    document.getElementById('listaV1').classList.add("sumir");
    document.getElementById('listaV2').classList.remove("sumir");
}

var botoes = document.querySelectorAll(".menu button");

function buton1(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[0].classList.add("btclick");
}
function buton2(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[1].classList.add("btclick");
}
function buton3(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[2].classList.add("btclick");
}
function buton4(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[3].classList.add("btclick");
}
function buton5(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[4].classList.add("btclick");
}
IntoHome();


var video = document.getElementById('videoaula');
var material = document.getElementById('material');

function Pausar(){
    video.pause();
}

function Aula1Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 1";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";

    Pausar();
}

function Aula2Olimp1(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 2";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula3Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 3";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

function Aula4Olimp1(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 4";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula5Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 5";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

/* */

function Aula1Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 1";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

function Aula2Olimp2(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 2";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula3Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 3";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

function Aula4Olimp2(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 4";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula5Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 5";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}
