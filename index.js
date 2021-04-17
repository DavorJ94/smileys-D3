const width = 300;
const height = 300;
const eyeRadius = 20;
const eyeHeightPosition = 45;
const eyeWidthPosition = 50;
const svg = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);

const face = svg.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEye = svg.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadius)
                .style("fill", "black")

const rightEye = svg.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadius)
                .style("fill", "black")

const g = svg.append("g")
.attr('transform', `translate(${width/2},${height/2})`)
const mouth = g.append("path")
    .attr("d", d3.arc()
    .innerRadius(75)
    .outerRadius(90)
    .startAngle(Math.PI/2 + 0.3)
    .endAngle(Math.PI*3/2 - 0.3));

const eyeRadiusSmiling = 30;
const eyeBallsRadiusSmiling = 8;
const svgSmiling = d3.select("svg").clone()
const faceSmiling = svgSmiling.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeSmiling = svgSmiling.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusSmiling)
                .style("fill", "white")
                .attr("stroke", "black")

const rightEyeSmiling = svgSmiling.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusSmiling)
                .style("fill", "white")
                .attr("stroke", "black")
const leftEyeBallSmiling = svgSmiling.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusSmiling)
                .style("fill", "black")

const rightEyeBallSmiling = svgSmiling.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusSmiling)
                .style("fill", "black")
const gSmiling = svgSmiling.append("g")
.attr('transform', `translate(${width/2},${height/2})`)
const mouthSmiling = gSmiling.append("path")
    .attr("d", d3.arc()
    .innerRadius(0)
    .outerRadius(90)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI*3/2))
    .attr("fill", "white")
    .attr("stroke", "black");
    
var svgSad = d3.select("svg").clone()
const faceSad = svgSad.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeSad = svgSad.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadius)
                .style("fill", "black")

const rightEyeSad = svgSad.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadius)
                .style("fill", "black")
const gSad = svgSad.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthSad = gSad.append("path")
    .attr("d", d3.arc()
    .innerRadius(70)
    .outerRadius(80)
    .startAngle(-Math.PI/2 + 0.5)
    .endAngle(Math.PI/2 - 0.5));


var svgFlat = d3.select("svg").clone()
const faceFlat = svgFlat.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeFlat = svgFlat.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadius)
                .style("fill", "black")

const rightEyeFlat = svgFlat.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadius)
                .style("fill", "black")
const gFlat = svgFlat.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthFlat = svgFlat.append('line')
                        .attr("x1", width/2 - 50)
                        .attr("y1", height/2 + 50)
                        .attr("x2", width/2 + 50)
                        .attr("y2", height/2 + 50)
                        .attr("stroke-width", 10)
                        .attr("stroke", "black");




const eyeRadiusConfused  = 30;
const eyeBallsRadiusConfused = 8;
var svgConfused = d3.select("svg").clone()
const faceConfused = svgConfused.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeConfused = svgConfused.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusConfused)
                .style("fill", "white")
                .attr("stroke", "black")

const rightEyeConfused = svgConfused.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusConfused)
                .style("fill", "white")
                .attr("stroke", "black")
const leftEyeBallConfused = svgConfused.append("circle")
                .attr("cx", width/2 - eyeWidthPosition + 6)
                .attr("cy", height/2 - eyeHeightPosition + 6)
                .attr("r", eyeBallsRadiusConfused)
                .style("fill", "black")

const rightEyeBallConfused = svgConfused.append("circle")
                .attr("cx", width/2 + eyeWidthPosition + 6)
                .attr("cy", height/2 - eyeHeightPosition + 6)
                .attr("r", eyeBallsRadiusConfused)
                .style("fill", "black")

const gConfused = svgConfused.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthConfused = svgConfused.append('line')
                        .attr("x1", width/2 - 50)
                        .attr("y1", height/2 + 50)
                        .attr("x2", width/2 + 50)
                        .attr("y2", height/2 + 50)
                        .attr("stroke-width", 10)
                        .attr("stroke", "black");


const eyeRadiusABitSad  = 30;
const eyeBallsRadiusABitSad = 8;
var svgABitSad = d3.select("svg").clone()
const faceABitSad = svgABitSad.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeABitSad = svgABitSad.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusABitSad)
                .style("fill", "white")
                .attr("stroke", "black")

const rightEyeABitSad = svgABitSad.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusABitSad)
                .style("fill", "white")
                .attr("stroke", "black")
const leftEyeBallABitSad = svgABitSad.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusABitSad)
                .style("fill", "black")

const rightEyeBallABitSad = svgABitSad.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusABitSad)
                .style("fill", "black")

const gABitSad = svgABitSad.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthABitSad = svgABitSad.append('line')
                        .attr("x1", width/2 - 40)
                        .attr("y1", height/2 + 50)
                        .attr("x2", width/2 + 40)
                        .attr("y2", height/2 + 30)
                        .attr("stroke-width", 10)
                        .attr("stroke", "black");


const svgWinking = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);

const faceWinking = svgWinking.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeWinking = svgWinking.append('line')
                        .attr("x1", width/2 - eyeWidthPosition - 10)
                        .attr("y1", height/2 - eyeHeightPosition - 10)
                        .attr("x2", width/2 - eyeWidthPosition + 30)
                        .attr("y2", height/2 - eyeHeightPosition + 10)
                        .attr("stroke-width", 5)
                        .attr("stroke", "black");
const leftEyeWinking2 = svgWinking.append('line')
                        .attr("x1", width/2 - eyeWidthPosition - 15)
                        .attr("y1", height/2 - eyeHeightPosition + 10)
                        .attr("x2", width/2 - eyeWidthPosition + 31.5)
                        .attr("y2", height/2 - eyeHeightPosition  + 10)
                        .attr("stroke-width", 5)
                        .attr("stroke", "black");
const rightEyeWinking = svgWinking.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadius)
                .style("fill", "black")

const gWinking = svgWinking.append("g")
.attr('transform', `translate(${width/2},${height/2})`)
const mouthWinking = gWinking.append("path")
    .attr("d", d3.arc()
    .innerRadius(75)
    .outerRadius(90)
    .startAngle(Math.PI/2 + 0.3)
    .endAngle(Math.PI*3/2 - 0.3));



const svgSatisfied = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);

const faceSatisfied = svgSatisfied.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");
const gLeftEyeSatisfied = svgSatisfied.append("g")
.attr('transform', `translate(${width/2 - eyeWidthPosition},${height/2 - eyeHeightPosition + 15})`)

const leftEyeSatisfied = gLeftEyeSatisfied.append("path")
.attr("d", d3.arc()
.innerRadius(eyeRadius)
.outerRadius(eyeRadius + 5)
.startAngle(-Math.PI/2)
.endAngle(Math.PI/2));

const gRightEyeSatisfied = svgSatisfied.append("g")
.attr('transform', `translate(${width/2 + eyeWidthPosition},${height/2 - eyeHeightPosition + 15})`)

const RightEyeSatisfied = gRightEyeSatisfied.append("path")
.attr("d", d3.arc()
.innerRadius(eyeRadius)
.outerRadius(eyeRadius + 5)
.startAngle(-Math.PI/2)
.endAngle(Math.PI/2));



const gSatisfied = svgSatisfied.append("g")
.attr('transform', `translate(${width/2},${height/2})`)
const mouthSatisfied = gSatisfied.append("path")
    .attr("d", d3.arc()
    .innerRadius(75)
    .outerRadius(90)
    .startAngle(Math.PI/2 + 0.3)
    .endAngle(Math.PI*3/2 - 0.3));


var svgFlatEyes = d3.select("svg").clone()
const faceFlatEyes = svgFlatEyes.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeFlatEyes = svgFlatEyes.append('line')
.attr("x1", width/2 - eyeWidthPosition - 25)
.attr("y1", height/2 - eyeHeightPosition + 10)
.attr("x2", width/2 - eyeWidthPosition + 25)
.attr("y2", height/2 - eyeHeightPosition  + 10)
.attr("stroke-width", 8)
.attr("stroke", "black");

const rightEyeFlatEyes = svgFlatEyes.append('line')
.attr("x1", width/2 + eyeWidthPosition - 25)
.attr("y1", height/2 - eyeHeightPosition + 10)
.attr("x2", width/2 + eyeWidthPosition + 25)
.attr("y2", height/2 - eyeHeightPosition  + 10)
.attr("stroke-width", 8)
.attr("stroke", "black");
const gFlatEyes = svgFlatEyes.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthFlatEyes = svgFlatEyes.append('line')
                        .attr("x1", width/2 - 50)
                        .attr("y1", height/2 + 50)
                        .attr("x2", width/2 + 50)
                        .attr("y2", height/2 + 50)
                        .attr("stroke-width", 10)
                        .attr("stroke", "black");

const eyeRadiusAngry = 30;
const eyeBallsRadiusAngry = 8;
const svgAngry = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);

const faceAngry = svgAngry.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "red")
                .attr('stroke', "black");
const leftEyeAngry = svgAngry.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusAngry)
                .style("fill", "white")
                .attr("stroke", "black")

const rightEyeAngry = svgAngry.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusAngry)
                .style("fill", "white")
                .attr("stroke", "black")
const leftEyeBallAngry = svgAngry.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusAngry)
                .style("fill", "black")

const rightEyeBallAngry = svgAngry.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusAngry)
                .style("fill", "black")
const leftEyeEyebrowAngry = svgAngry.append('line')
.attr("x1", width/2 - eyeWidthPosition - 10)
.attr("y1", height/2 - eyeHeightPosition - 50)
.attr("x2", width/2 - eyeWidthPosition + 35)
.attr("y2", height/2 - eyeHeightPosition  -20)
.attr("stroke-width", 8)
.attr("stroke", "black");
const RightEyeEyebrowAngry = svgAngry.append('line')
.attr("x1", width/2 + eyeWidthPosition + 10)
.attr("y1", height/2 - eyeHeightPosition - 50)
.attr("x2", width/2 + eyeWidthPosition - 35)
.attr("y2", height/2 - eyeHeightPosition  -20)
.attr("stroke-width", 8)
.attr("stroke", "black");

const gAngry = svgAngry.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthAngry = gAngry.append("path")
    .attr("d", d3.arc()
    .innerRadius(70)
    .outerRadius(80)
    .startAngle(-Math.PI/2 + 0.5)
    .endAngle(Math.PI/2 - 0.5));



const eyeRadiusConfusedOneEyebrow = 30;
const eyeBallsRadiusConfusedOneEyebrow = 8;
const svgConfusedOneEyebrow = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);




const faceConfusedOneEyebrow = svgConfusedOneEyebrow.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");
const leftEyeConfusedOneEyebrow = svgConfusedOneEyebrow.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusConfusedOneEyebrow)
                .style("fill", "white")
                .attr("stroke", "black")

const rightEyeConfusedOneEyebrow = svgConfusedOneEyebrow.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusConfusedOneEyebrow)
                .style("fill", "white")
                .attr("stroke", "black")
const leftEyeBallConfusedOneEyebrow = svgConfusedOneEyebrow.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusConfusedOneEyebrow)
                .style("fill", "black")

const rightEyeBallConfusedOneEyebrow = svgConfusedOneEyebrow.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusConfusedOneEyebrow)
                .style("fill", "black")




const g0ConfusedOneEyebrow = svgConfusedOneEyebrow.append("g")
.attr('transform', `translate(0,-20)`)
const leftEyeEyebrowConfusedOneEyebrow = svgConfusedOneEyebrow.append('line')
.attr("x1", width/2 - eyeWidthPosition - 30)
.attr("y1", height/2 - eyeHeightPosition - 35)
.attr("x2", width/2 - eyeWidthPosition + 35)
.attr("y2", height/2 - eyeHeightPosition  -35)
.attr("stroke-width", 8)
.attr("stroke", "black");

const RightEyeEyebrowConfusedOneEyebrow = g0ConfusedOneEyebrow.append('line')
.attr("x1", width/2 + eyeWidthPosition + 10)
.attr("y1", height/2 - eyeHeightPosition - 45)
.attr("x2", width/2 + eyeWidthPosition - 35)
.attr("y2", height/2 - eyeHeightPosition  -10)
.attr("stroke-width", 8)
.attr("stroke", "black");

const gConfusedOneEyebrow = svgConfusedOneEyebrow.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthConfusedOneEyebrow = svgConfusedOneEyebrow.append('line')
                        .attr("x1", width/2 - 50)
                        .attr("y1", height/2 + 50)
                        .attr("x2", width/2 + 50)
                        .attr("y2", height/2 + 50)
                        .attr("stroke-width", 10)
                        .attr("stroke", "black");



const eyeRadiusBored  = 30;
const eyeBallsRadiusBored = 8;
var svgBored = d3.select("svg").clone()
const faceBored = svgBored.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");
const g0Bored = svgBored.append("g")
.attr('transform', `translate(${width/2 - eyeWidthPosition},${height/2 - eyeHeightPosition})`)
const leftEyeBored = g0Bored.append("path")
    .attr("d", d3.arc()
    .innerRadius(0)
    .outerRadius(30)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI*3/2))
    .attr("fill", "white")
    .attr("stroke", "black");
const g1Bored = svgBored.append("g")
.attr('transform', `translate(${width/2 + eyeWidthPosition},${height/2 - eyeHeightPosition})`)
const rightEyeBored = g1Bored.append("path")
    .attr("d", d3.arc()
    .innerRadius(0)
    .outerRadius(30)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI*3/2))
    .attr("fill", "white")
    .attr("stroke", "black");
const leftEyeBallBored = svgBored.append("circle")
                .attr("cx", width/2 - eyeWidthPosition + 20)
                .attr("cy", height/2 - eyeHeightPosition + 8)
                .attr("r", eyeBallsRadiusBored)
                .style("fill", "black")

const rightEyeBallBored = svgBored.append("circle")
                .attr("cx", width/2 + eyeWidthPosition + 20)
                .attr("cy", height/2 - eyeHeightPosition + 8)
                .attr("r", eyeBallsRadiusBored)
                .style("fill", "black")

const gBored = svgBored.append("g")
.attr('transform', `translate(${width/2},${height/2 + 100})`)
const mouthBored = svgBored.append('line')
                        .attr("x1", width/2 - 50)
                        .attr("y1", height/2 + 50)
                        .attr("x2", width/2 + 50)
                        .attr("y2", height/2 + 50)
                        .attr("stroke-width", 10)
                        .attr("stroke", "black");


const eyeRadiusShocked  = 30;
const eyeBallsRadiusShocked = 8;
var svgShocked = d3.select("svg").clone()
const faceShocked = svgShocked.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeShocked = svgShocked.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusShocked)
                .style("fill", "white")
                .attr("stroke", "black")

const rightEyeShocked = svgShocked.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusShocked)
                .style("fill", "white")
                .attr("stroke", "black")
const leftEyeBallShocked = svgShocked.append("circle")
                .attr("cx", width/2 - eyeWidthPosition +10)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusShocked)
                .style("fill", "black")

const rightEyeBallShocked = svgShocked.append("circle")
                .attr("cx", width/2 + eyeWidthPosition -10)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusShocked)
                .style("fill", "black")
const mouthShocked = svgShocked.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2 + 80)
                .attr("r", 18)
                .style("fill", "black")




const svgLOL = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);

const faceLOL = svgLOL.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeLOL = svgLOL.append('line')
                        .attr("x1", width/2 - eyeWidthPosition - 15)
                        .attr("y1", height/2 - eyeHeightPosition - 30)
                        .attr("x2", width/2 - eyeWidthPosition + 30)
                        .attr("y2", height/2 - eyeHeightPosition + 10)
                        .attr("stroke-width", 5)
                        .attr("stroke", "black");
const leftEyeLOL2 = svgLOL.append('line')
                        .attr("x1", width/2 - eyeWidthPosition - 10)
                        .attr("y1", height/2 - eyeHeightPosition + 30)
                        .attr("x2", width/2 - eyeWidthPosition + 32.5)
                        .attr("y2", height/2 - eyeHeightPosition  + 10)
                        .attr("stroke-width", 5)
                        .attr("stroke", "black");
const rightEyeLOL = svgLOL.append('line')
                        .attr("x1", width/2 + eyeWidthPosition  + 15)
                        .attr("y1", height/2 - eyeHeightPosition - 30)
                        .attr("x2", width/2 + eyeWidthPosition - 30)
                        .attr("y2", height/2 - eyeHeightPosition + 10)
                        .attr("stroke-width", 5)
                        .attr("stroke", "black");
const rightEyeLOL2 = svgLOL.append('line')
                        .attr("x1", width/2 + eyeWidthPosition + 10)
                        .attr("y1", height/2 - eyeHeightPosition + 30)
                        .attr("x2", width/2 + eyeWidthPosition - 32.5)
                        .attr("y2", height/2 - eyeHeightPosition  + 10)
                        .attr("stroke-width", 5)
                        .attr("stroke", "black");

const gLOL = svgLOL.append("g")
.attr('transform', `translate(${width/2},${height/2})`)
const mouthLOL = gLOL.append("path")
    .attr("d", d3.arc()
    .innerRadius(0)
    .outerRadius(90)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI*3/2))
    .attr("fill", "white")
    .attr("stroke", "black");



const eyeHeightPositionMonocle = 45;
const eyeWidthPositionMonocle = 50;
const eyeRadiusMonocle = 30;
const eyeBallsRadiusMonocle = 8;
const svgMonocle = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);

const faceMonocle = svgMonocle.append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", "120")
                .attr("fill", "yellow")
                .attr('stroke', "black");


const leftEyeMonocle = svgMonocle.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusMonocle)
                .style("fill", "white")
                .attr("stroke", "black")

const rightEyeMonocle = svgMonocle.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusMonocle)
                .style("fill", "white")
                .attr("stroke", "black")
const leftEyeBallMonocle = svgMonocle.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusMonocle)
                .style("fill", "black")

const rightEyeBallMonocle = svgMonocle.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeBallsRadiusSmiling)
                .style("fill", "black")

const rightEyeMonocle2 = svgMonocle.append("circle")
                .attr("cx", width/2 + eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusMonocle + 10)
                .style("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", "5px")
const leftEyeMonocle2 = svgMonocle.append("circle")
                .attr("cx", width/2 - eyeWidthPosition)
                .attr("cy", height/2 - eyeHeightPosition)
                .attr("r", eyeRadiusMonocle + 10)
                .style("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", "5px")
const glassesHolderMonocle = svgMonocle.append('line')
                        .attr("x1", width/2 - 12)
                        .attr("y1", height/2 - eyeHeightPosition)
                        .attr("x2", width/2 + 12)
                        .attr("y2", height/2 - eyeHeightPosition)
                        .attr("stroke-width", 5)
                        .attr("stroke", "black");
const gMonocle = svgMonocle.append("g")
.attr('transform', `translate(${width/2},${height/2})`)
const mouthMonocle = gMonocle.append("path")
    .attr("d", d3.arc()
    .innerRadius(75)
    .outerRadius(90)
    .startAngle(Math.PI/2 + 0.3)
    .endAngle(Math.PI*3/2 - 0.3));