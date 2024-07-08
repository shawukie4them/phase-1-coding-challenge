//student grade generator
//decided to use var as opposed to const and let for a change.
function grade(){
    var marks = prompt('Enter your results(should be between 0 and 100):');
    marks = parseInt(marks);

    if(isNaN(marks) || marks < 0 || marks > 100){
        alert('Invalid input. Please enter a number between 0 and 100.');
        return;
    }

    var grade;
    if(marks >= 79){
        grade = 'A';
    } else if(marks >= 60 && marks <= 79){
        grade = 'B';
    } else if(marks >= 50 && marks <=59){
        grade = 'C';
    }else if (marks >= 40 && marks <= 49){
        grade = 'D';
    } else {
        grade = 'E';
    }

    alert('Your grade is: '+ grade);
}

grade();
