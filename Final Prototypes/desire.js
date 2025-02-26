let myFont;
let points = [];
let word = "DESIRE";
let time = 0;

let stars = [];
let numStars = 500;

function preload() {
    myFont = loadFont("../comicSans.ttf");
}

function setup() {
    createCanvas(500, 250).parent("sketch-container");
    let x = width / 2;
    let y = height / 2;

    // Adjusting fonts and visibility
    let textPoints = myFont.textToPoints(word, x - 210, y + 50, width / 4.5, { sampleFactor: 0.2 });

    // Store each point using a for loop and push
    for (let i = 0; i < textPoints.length; i++) {

        let p = textPoints[i];
        let pt = new Point(p.x, p.y, i); 
        points.push(pt);

    }

    // random stars
    for (let i = 0; i < numStars; i++) {

        stars.push(new Star(random(width), random(height)));

    }
}

function draw() {
  
    background(0);

    // Draw the galaxy stars in the background
    for (let star of stars) {
        star.update();
        star.display();
    }

    time += 0.02;

    // Update and display each point of the text
    for (let i = 0; i < points.length; i++) {
        points[i].update(time);
        points[i].display();
    }
}

class Point {
    constructor(x, y, index) {

        this.x = x;
        this.y = y;
        this.index = index;

        // Random colors to create a glowing effect
        this.baseColor = color(random(150, 255), random(150, 255), random(150, 255)); 
        this.glowStrength = random(5, 10);
        this.depth = random(1, 1.5);

    }


    update(time) {
        //sin and cos for smooth wave
        this.xOffset = sin(time + this.index * 0.3) * 10 * this.depth;
        this.yOffset = cos(time + this.index * 0.3) * 2 * this.depth;
        this.zOffset = sin(time + this.index * 0.3) * 5 * this.depth;

        //to make movement more smooth
        this.xOffset += random(-0.5, 0.5);
        this.yOffset += random(-0.3, 0.3);

    }

    display() {

        // glowing effect [move around]
        let pulseColor = color(
            (this.baseColor.levels[0] + sin(time * 0.3) * 30) % 255,
            (this.baseColor.levels[1] + cos(time * 0.3) * 30) % 255,
            (this.baseColor.levels[2] + sin(time * 0.3) * 30) % 255
        );

        // Glowing effect with gradual fading
        for (let i = 0; i < this.glowStrength; i++) {

            let alpha = map(i, 0, this.glowStrength, 100, 0); 
            let offset = i * 0.3;
            strokeWeight(3);
            stroke(pulseColor.levels[0], pulseColor.levels[1], pulseColor.levels[2], alpha);
            point(this.x + this.xOffset + offset, this.y + this.yOffset + offset);

        }

        if (random(1) < 0.02) {

            this.createParticles();

        }
    }

    createParticles() {
        // random particles surrounding texts
        for (let i = 0; i < 3; i++) {

            let particleX = this.x + random(-4, 4);
            let particleY = this.y + random(-4, 4);
            let particleSize = random(2, 3);
            let particleColor = color(random(150, 255), random(150, 255), random(150, 255), 100);

            fill(particleColor);
            noStroke();

            // Particle fade effect
            ellipse(particleX, particleY, particleSize);

        }
    }
}

// another class for bg effect 
class Star {
    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.size = random(1, 3); 
        this.alpha = random(100, 255); 
        this.speed = random(0.1, 0.3); 

    }

    update() {

        // star movemement slowly
        this.x += cos(time * this.speed) * 0.5;
        this.y += sin(time * this.speed) * 0.5;

        //constrain the star in the canavs
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

    }

    display() {

        //fading effect
        noStroke();
        fill(255, 255, 255, this.alpha);
        ellipse(this.x, this.y, this.size);
        
    }
}
