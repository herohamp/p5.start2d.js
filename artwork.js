function setup() {
    
    createCanvas({

        // size: ['297', '210'],
        // size: ['297mm', '210mm'],
        // size: ['8.268in', '11.693in'],
        // size: ['29.7cm', '21cm'],
        size: 'A4',
        
        orientation: 'landscape',
        units: 'mm',
        exportPPI: 300,

        // *** the above size parameters, all have the same result.
        // *** ==> canvas of size 297mm by 210mm @ 300 dpi

        wallpaperImage: './assets/wallpaper.png',

        maxZoom: 2.0,
        minZoom: 0.1,

        seed: 1234,

        outputFileName: 'Artwork-@date-@seed',

        screenPPI: 96,
        screenPadding: '1cm'

    });

    // testing
    resizeCanvas(300, 200);

    background(255);

    // !!!!! TEST SCALING IN SETUP & DRAW   !!!!!
    strokeWeight(10);
    stroke(255, 0, 0, 100);
    diagonal();
    // !!!!! ------------------------------ !!!!!
}

function diagonal() {
    
    line(width * 0.5, height * 0.5, width * 0.75, height * 0.75);
}

function draw() {
    
    // !!!!! TEST SCALING IN SETUP & DRAW   !!!!!
    strokeWeight(1);
    stroke(0, 100);
    diagonal();
    // !!!!! ------------------------------ !!!!!

    strokeWeight(1);
    noFill();
    
    for (let i = 0; i < 100; i++) {
        
        let cx = random(width);
        let cy = random(height);
        let r = random(width / 8);

        stroke(random(255), random(255), random(255), 50);

        circle(cx, cy, r);
    }

    __draw();
}

function __draw() {

    // simple measurement lines

    strokeWeight(0.5);
    textAlign(CENTER);
    textSize(7);
    fill(0);
    
    stroke(0);
    drawArrow('left');
    line(0, height / 2, width / 3 - 16, height / 2);
    line(width / 3 + 8, height / 2, width, height / 2);
    drawArrow('right');
    noStroke();
    text(`${round(width)}${units} @ ${exportPPI}ppi => ${pixelWidth}px :: ${window.devicePixelRatio}`, width / 2 + 10, height / 2 - 5);
    
    stroke(0);
    drawArrow('top');
    line(width / 3, 0, width / 3, height);
    drawArrow('bottom');
    noStroke();

    push();
    translate(width / 3, height / 2);
    rotate(PI * 1.5);
    text(`${round(height)}${units} @ ${exportPPI}ppi => ${pixelHeight}px`, 0, - 5);
    pop();
}

function drawArrow(dir) {

    // simple arrow drawing :)

    const as = 6;

    push();

    noStroke();
    fill(0);

    if (dir === 'left') {

        let x = 0;
        let y = height / 2;

        triangle(x, y, x + as, y - as/2, x + as, y + as/2);

    } else if (dir === 'right') {

        let x = width;
        let y = height / 2;

        triangle(x, y, x - as, y - as/2, x - as, y + as/2);

    } else if (dir === 'top') {

        let x = width / 3;
        let y = 0;

        triangle(x, y, x - as/2, y + as, x + as/2, y + as);

    } else if (dir === 'bottom') {

        let x = width / 3;
        let y = height;

        triangle(x, y, x - as/2, y - as, x + as/2, y - as)
    }

    pop();
}

