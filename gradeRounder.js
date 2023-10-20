const gradeRounding = (grade)=>{
    if(grade > 37){
        let rounding = 5 - grade % 5;
        console.log('rounding', rounding);
        if(rounding <= 2){
            console.log(grade+rounding);
            return grade + rounding;
        } 
    }
    return grade;
}

function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = grades.map(gradeRounding);
    
    return roundedGrades;

}

console.log(gradingStudents([12,34,78,87])); 