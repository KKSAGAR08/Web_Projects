const date = new Date();
const currentDate = date.toString()
const value = currentDate.split(" ")

const newDate = value[0]+" "+value[1]+" "+value[2]+" "+value[3];
document.querySelector(".date").innerHTML = newDate;


