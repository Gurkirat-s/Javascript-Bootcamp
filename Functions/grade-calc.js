//Arg: student's score, and total possible Score
//Generate letter grade and percentage of grade
//15/20 -> You got a C (75%)!

const grade = function (studentScore, totalScore) {
    const percent = (studentScore / totalScore) * 100
    let gradeLetter

    if (percent <= 59) {
        gradeLetter = 'F'
    } else if (percent <= 69) {
        gradeLetter = 'D'
    } else if (percent <= 79) {
        gradeLetter = 'C'
    } else if (percent <= 89) {
        gradeLetter = 'B'
    } else {
        gradeLetter = 'A'
    }

    return `You got a ${gradeLetter} (${percent}%)!`
}

console.log(grade(15, 20))
console.log(grade(18, 20))
console.log(grade(19, 20))
console.log(grade(9, 20))