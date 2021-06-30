//Arg: student's score, and total possible Score
//Generate letter grade and percentage of grade
//15/20 -> You got a C (75%)!

const grade = function (studentScore, totalScore) {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please enter a number')
    } 

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
try {
    const result = grade(true,20)
    console.log(result)
} catch (e) {
    console.log(e.message)
}
