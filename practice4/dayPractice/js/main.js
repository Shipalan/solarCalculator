// JavaScript Document
function myFunction() {
    let el = document.getElementById("chooseMe");
    let fortuneNum = el.options[el.selectedIndex].value;
    let fortuneMessage;
    

    

    switch (Number(fortuneNum)) {
        case 1:
        case 6:
            fortuneMessage = "You will inherit a fortune.";
            break;
        case 2:
        case 7:
            fortuneMessage = "You will become a JavaScript Ninja";
            break;
        case 3:
            fortuneMessage = "You will win a new car.";
            break;
        case 4:
        case 8:
            fortuneMessage = "A new computer will arrive at your house today.";
            break;
        
        default:
            fortuneMessage= "You have three hours to live so finish this course.";
    }

    document.getElementById("feedback").innerHTML = fortuneMessage;
}



// switch (dataShort) {
    //     case 'SUN':
    //         dayName = 'Sunday';
    //         break;
    //     case 'MON':
    //         dayName = 'Monday'
    //         break;
    //     case 'TUE':
    //         dayName = 'Tuesday'
    //         break;
    //     case 'WED':
    //         dayName = 'Wednesday'
    //         break;
    //     case 'THU':
    //         dayName = 'Thursday'
    //         break;
    //     case 'FRI':
    //         dayName = 'Friday'
    //         break;
    //     case 'SAT':
    //         dayName = 'Saturday'
    //         break;
    //     default:
    //         dayName = 'Out of Range'
    // }