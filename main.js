let age = Number(prompt("Veuillez saisir votre âge :"));
let seniority = Number(prompt("Veuillez saisir votre ancienneté :"));
let lastSalary = Number(prompt("Veuillez saisir votre dernier salaire :"));
let indemnity;

if (seniority >= 1 && seniority <=10 ) {
    indemnity = lastSalary/2 * seniority;
} 
else {
    indemnity = lastSalary * seniority;    
}

if(age >= 46 && age <= 49) {
    indemnity = indemnity + 2*lastSalary
} else if (age >= 50){
    indemnity = indemnity + 5*lastSalary
}

alert(`L'indemnité de licenciement est de : ${indemnity}€`)