offMessage = "把滑鼠放在選單上面"
function boxOn(which,message) {
if (document.all||document.getElementById) {
which.className = 'BorderOn';
if (document.getElementById) {
document.getElementById("Message").innerHTML = message
}
else {
Message.innerHTML = message;
      }
   }
}
function boxOff(which) {
if (document.all||document.getElementById) {
which.className = 'BorderOff';
if (document.getElementById) {
document.getElementById("Message").innerHTML = offMessage
}
else {
Message.innerHTML = offMessage;
      }
   }
}
