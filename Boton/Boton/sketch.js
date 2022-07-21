var btn_rojo, btn_verde, btn_azul, btn_amarillo, btn_rosa;
var r=0;
var g=0;
var b=0;
function setup(){
    createCanvas (600,600);
    btn_rojo=createButton("ROJO");
    btn_rojo.position(80,50);
    btn_rojo.mousePressed(rojo_bg);

    btn_verde=createButton("VERDE");
    btn_verde.position(160,50);
    btn_verde.mousePressed(verde_bg);

    btn_azul=createButton("AZUL");
    btn_azul.position(240,50);
    btn_azul.mousePressed(azul_bg);

    btn_amarillo=createButton("AMARILLO");
    btn_amarillo.position(320,50);
    btn_amarillo.mousePressed(amarillo_bg);

    btn_rosa=createButton("ROSA");
    btn_rosa.position(430,50);
    btn_rosa.mousePressed(rosa_bg);

}

function draw (){
    background (r,g,b);
}

function rojo_bg(){
r=255;
g=0;
b=0;
}

function verde_bg(){
    r=0;
    g=255;
    b=0;
    }

    function azul_bg(){
        r=0;
        g=0;
        b=255;
        }
        
        function amarillo_bg(){
            r=255;
            g=255;
            b=0;
            }

            function rosa_bg(){
                r=255;
                g=0;
                b=255;
                }