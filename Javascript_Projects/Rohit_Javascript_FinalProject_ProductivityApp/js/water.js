     function myFunction() {
         var age = document.getElementById("age").value;
         var male = document.getElementById("male");
         var female = document.getElementById("female");

         if (isNaN(age) || age == "" || !male.checked && !female.checked) {
             alert("Enter proper value");
         } else {
             if (age > 0 && age <= 3) {
                 document.getElementById("result").innerHTML = "800 milliliter";
             } else if (age >= 4 && age <= 8) {
                 document.getElementById("result").innerHTML = "1800 milliliter";
             } else if (age >= 9 && age <= 13) {
                 document.getElementById("result").innerHTML = "2100 milliliter";
             } else if (age >= 14 && age <= 18 && male.checked) {
                 document.getElementById("result").innerHTML = "3300 milliliter";
             } else if (age >= 14 && age <= 18 && female.checked) {
                 document.getElementById("result").innerHTML = "2300 milliliter";
             } else if (age >= 19 && age <= 30 && male.checked) {
                 document.getElementById("result").innerHTML = "3700 milliliter";
             } else if (age >= 19 && age <= 30 && female.checked) {
                 document.getElementById("result").innerHTML = "2700 milliliter";
             } else if (age >= 31 && female.checked) {
                 document.getElementById("result").innerHTML = "2700 milliliter";
             } else if (age >= 31 && male.checked) {
                 document.getElementById("result").innerHTML = "3700 milliliter";
             }
         }
     }
     var i = 0;
     var list = "Most healthy people can stay hydrated by drinking water and other fluids whenever they feel thirsty. For some people, fewer than eight glasses a day might be enough. But other people might need more.";
     var speed = 80;

     function typeWriter() {
         if (i < list.length) {
             document.getElementById("list").innerHTML += list.charAt(i);
             i++;
             setTimeout(typeWriter, speed);
         }
     }
var a;
     function reminder() {
        a= setInterval(function () {
             alert("Time To Drink Water!!!");
         }, 3000);

     }

     function myStopFunction() {
         clearInterval(a);
     }
