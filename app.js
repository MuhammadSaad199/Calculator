function getNumber(num){
var enter = document.getElementById("values");
values.value += num;
}
 function getClear(){
     var remove = document.getElementById("values");
values.value = "";
 }
 function getResult(){
     var result = document.getElementById("values");
     values.value = eval(values.value)
 }