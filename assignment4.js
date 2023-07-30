
// ---4 no answer---
function calculateGrade(score) {
    var grade;

    switch (true) {
        case (score <= 100 && score >= 90):
            grade = 'A';
            break;
        case (score <= 89 && score >= 80):
            grade = 'B';
            break;
        case (score <= 79 && score >= 70):
            grade = 'C';
            break;
        case (score <= 69 && score >= 60):
            grade = 'D';
            break;
        case (score <= 59 && score >= 0):
            grade = 'F';
            break;

        case (score > 100 && score < 0):
            grade = 'INVALID SCORE';
            break;
        default:
            return 'INVALID SCORE';
    }

    return grade;
}

var output = calculateGrade(99);
console.log(output); 