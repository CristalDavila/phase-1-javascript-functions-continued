function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(work1= "go to the office", work2= "work from home"){
    return `This Monday, I will ${work1}.`
}
function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`}
    }