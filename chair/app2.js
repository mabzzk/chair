

function setup() {

    const canvas = createCanvas(280, 200, WEBGL);
    canvas.parent("canvas2parent");
    
    angleMode(DEGREES)
}







function draw() {
    background(43, 63, 155)

    rotateX(50)
    rotateY(0)

    noFill(0)
    stroke(10)
    strokeWeight(7)

    //prøv å sette inn rbg med følgend: !!!!! 
    "rgb(233, 206, 56)"

    for (var i = 0; i < 50; i ++) {

        var ritu = map(cos(frameCount), 25, 233, 206, 55)
        var gitu = map(i, 10, 233, 206, 56)
        var bitu = map(sin(frameCount), 250, 233, 206, 56)

        stroke(ritu, gitu, bitu)




        beginShape()
        for (var j= 0; j <360; j +=10) {
            var rad = i * 10
            var x = rad * cos(j) 
            var y = rad * sin(j) 
            var z = sin(frameCount * 2 + i * 4) * 150

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}


