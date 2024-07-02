//speed detector.
//decided to use var as opposed to const and let for a change.
function speed(){
    var speed = prompt('Enter the speed of the car(Prefarebly in km/s):');
    speed = parseInt(speed);
    if(isNaN(speed) || speed < 0){
        alert("Please enter a valid number for the speed.");
        return;
    }

    var limit = 70;
    var kmperpoint = 5;

    if(speed <= limit){
        alert('ok');
    }else{
        var points = Math.floor((speed - limit) / kmperpoint);
        if (points > 12){
            alert('License suspended');
        }else{
            alert('Points: ' + points);
        }
    }
}

speed();