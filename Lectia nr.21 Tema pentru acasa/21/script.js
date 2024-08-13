// Varianta 1
let masaVadim1 = 78; // în kg
let inaltimeVadim1 = 1.69; // în metri
let masaAlex1 = 92; // în kg
let inaltimeAlex1 = 1.95; // în metri

// Calcularea BMI-ului pentru Vadim și Alex în varianta 1
let BMIVadim1 = masaVadim1 / (inaltimeVadim1 ** 2);
let BMIAlex1 = masaAlex1 / (inaltimeAlex1 ** 2);

// Compararea BMI-urilor
let vadimHigherBMI1 = BMIVadim1 > BMIAlex1;

console.log("Varianta 1 - BMI Vadim:", BMIVadim1.toFixed(2));
console.log("Varianta 1 - BMI Alex:", BMIAlex1.toFixed(2));
console.log("Varianta 1 - Vadim are un BMI mai mare decât Alex?", vadimHigherBMI1);

// Varianta 2
let masaVadim2 = 95; // în kg
let inaltimeVadim2 = 1.88; // în metri
let masaAlex2 = 85; // în kg
let inaltimeAlex2 = 1.76; // în metri

// Calcularea BMI-ului pentru Vadim și Alex în varianta 2
let BMIVadim2 = masaVadim2 / (inaltimeVadim2 ** 2);
let BMIAlex2 = masaAlex2 / (inaltimeAlex2 ** 2);

// Compararea BMI-urilor
let vadimHigherBMI2 = BMIVadim2 > BMIAlex2;

console.log("Varianta 2 - BMI Vadim:", BMIVadim2.toFixed(2));
console.log("Varianta 2 - BMI Alex:", BMIAlex2.toFixed(2));
console.log("Varianta 2 - Vadim are un BMI mai mare decât Alex?", vadimHigherBMI2);