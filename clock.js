//Access the html elements using DOM
let hour = document.querySelector(".hourDiv");
let minute = document.querySelector(".minuteDiv");
let second = document.querySelector(".secondDiv");
let today = document.querySelector(".day");
let date = document.querySelector(".date");
let wish = document.querySelector(".message");
let bgimg = document.getElementById("bg");

//current date
let x = new Date();
let z = x.getHours();

//backgroundimage dynamically changing on sun rise to sun set
if (z < 12) {
  bgimg.style.backgroundImage = "url('../digiclock/images/morning.png')";
  bgimg.style.backgroundSize = "cover";
} else if (z < 16) {
  bgimg.style.backgroundImage = "url('../digiclock/images/afternoon.jpg')";
  bgimg.style.backgroundSize = "cover";
} else if (z < 19) {
  bgimg.style.backgroundImage = "url('../digiclock/images/evening.jpg')";
  bgimg.style.backgroundSize = "cover";
} else {
  bgimg.style.backgroundImage = "url('../digiclock/images/night.png')";
  bgimg.style.backgroundSize = "cover";
}

//greetings functionality
let y = x.getHours();
function txt() {
  if (y < 12) {
    return "Good morning ";
  } else if (y < 16) {
    return "Good afternoon";
  } else if (y < 19) {
    return "Good evening";
  } else {
    return "Good night";
  }
}
let daysFunc = txt();

//greets
wish.innerHTML = daysFunc;

//Lets add functionality to clock
function clockFunc() {
  var nowDate = new Date();
  hour.innerHTML = nowDate.getHours();
  minute.innerHTML = nowDate.getMinutes();
  second.innerHTML = nowDate.getSeconds();
}
setInterval(clockFunc, 1000);

//days functionality
let currentDate = () => {
  switch (new Date().getDay()) {
    case 0:
      return "SUNDAY";
      break;
    case 1:
      return "MONDAY";
      break;
    case 2:
      return "TUESDAY";
      break;
    case 3:
      return "WEDNESDAY";
      break;
    case 4:
      return "THURSDAY";
      break;
    case 5:
      return "FRIDAY";
      break;
    default:
      return "SATURDAY";
  }
};
let day = currentDate();

//days
today.innerHTML = day;

//date
date.innerHTML = x.toLocaleDateString();
