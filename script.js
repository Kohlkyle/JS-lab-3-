"use strict"

let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "A date",
        passed: true,
        
    },
    {
        name: "Joe",
        score: 77,
        date: "A date",
        passed: true

    },
    {
        name: "Jack",
        score: 59,
        date: "a date",
        passed: false,
        
    },
    {
        name: "Jill",
        score: 88,
        date: "a date",
        passed: true
    },
];

const addSubmission = (array, newName, newScore, newDate) => {
    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    array.push(newSubmission);
}
// addSubmission(submissions, `kyle`, 75, `a date`);
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1)
}
// deleteSubmissionByIndex(submissions, 4)


const deleteSubmissionsByName = (array, name) => {
    const index = array.findIndex((item) => item.name === name)
    array.splice(index, 1)
}

// deleteSubmissionsByName(submissions, "jane")
    


const editSubmission = (array, index, score) => {
    array[index].score = score
    array[index].passed = score >= 60
}


const findSubmissionByName = (array, name) => {
    return array.find((subByName) => {
        return subByName.name === name
    })
}


const findLowestScore = (array) => {
    let currentLowest = array[0];
    array.foreach((item) => {
        if(item.score< currentLowest.score){
            currentLowest = item
        }
    })
    return currentLowest
}

console.log(findLowestScore(submissions));


// REDUCE METHOD WAYYYYYYY BETTER THAN FIRST METHOD
// const findLowestScore = (array) => {
//     return array.reduce((accumulator, currentValue) => {
//         return currentValue.score < accumulator.score ? currentValue : accumulator
//     })
// }

 
const findAverageScore = (array) => {
    let total = 0;
    for(let item of array){
        total += item.score
    }
    return total/array.length
}

// REDUCE METHOD!!!!! SEEMS HARD lol but efficent 
// const findAverageScore = (array) => {
//     return array.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0 )/array.length
// }


const filterPassing = (array) => {
    return array.filter((array)=> {
        return item.passed 
    })
}

const filterPassing90AndAbove = (array) => {
    return array.filter((array)=> {
        return item.passed >= 90 
    })
}


const filter90AndAbove = (array) => {
    return array.filter((aboveOrEqual90) =>{
        return aboveOrEqual90 >=90
    })
}
console.log(filter90AndAbove(submissions))

