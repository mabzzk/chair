function setup() {
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(30)

    rotateX(60)

    noFill()
    stroke(255)

    for (var i = 0; i < 20; i ++) {
        beginShape()
        for (var j= 0; j <360; j +=10) {
            var rad = i * 5
            var x = rad * cos(j)
            var y = rad * sin(j)
            var z = sin(frameCount + i * 10) * 50

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}



////// RITU LIKES THIS ONE! 

// hva er vertex ?
// hva er frameCount
//hva heter objektet mitt her...???? 



function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(30, 50, 160)

    rotateX(45)
    rotateY(0)

    noFill()
    stroke(5)


    for (var i = 0; i < 40; i ++) {

        var r = map(sin(frameCount / 2), -1, 255, 1, 1)
        var g = map(i, 0, 50, 1, 1)
        var b = map(cos(frameCount), -1, 100, 1, 1)

        stroke(r, g, b)

        rotate(1)


        beginShape()
        for (var j= 0; j <360; j +=10) {
            var rad = i * 9
            var x = rad * cos(j) 
            var y = rad * sin(j) 
            var z = sin(frameCount *2 + i * 5) * 10

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}



