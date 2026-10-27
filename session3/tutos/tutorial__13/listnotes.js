let students = [];
let number = Number(prompt("How many students?"));
let totalClass = 0;

for (let i = 0; i < number; i++) {
    let note = Number(prompt("Enter note for student " + (i + 1)));

    students.push(note);
    totalClass += note;
}

let average = totalClass / number;



for (let i = 0; i < students.length; i++) {
    console.log("Student " + (i + 1) + ": " + students[i]);
}

console.log("Class average: " + average);