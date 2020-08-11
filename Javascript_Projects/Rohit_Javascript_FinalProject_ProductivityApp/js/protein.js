     function myFunction() {
         var age = document.getElementById("age").value;
         var male = document.getElementById("male");
         var weight = document.getElementById("weight").value;
         var female = document.getElementById("female");
         var protein;

         if (isNaN(age) || isNaN(weight) || age == "" || weight == "" || !male.checked && !female.checked) {
             alert("Enter proper value");
         } else {
             if (age > 0 && age <= 3) {
                 protein = 13;
                 document.getElementById("result").innerHTML = protein;
                 document.getElementById("calories").innerHTML = protein * 4;
                 document.getElementById("foodList").innerHTML = "Aspargus, <br/>Cucumber, <br/>lettuce, <br/>Tomato";
                 
             } else if (age >= 4 && age <= 8) {
                 protein = 19;
                 document.getElementById("result").innerHTML = protein;
                 document.getElementById("calories").innerHTML = protein * 4;
                 document.getElementById("foodList").innerHTML = "Apple, <br/>Orange, <br/>Shrimp, <br/>Broccoli, <br/>Carrots";
             } else if (age >= 9 && age <= 13) {
                 protein = 34;
                 document.getElementById("result").innerHTML = protein;
                 document.getElementById("calories").innerHTML = protein * 4;
                 document.getElementById("foodList").innerHTML = "Pear, <br/>Pineapple, <br/>Tofu, <br/>Egg ,<br/> Grapse";
             } else if (age >= 14 && age <= 18 && male.checked) {
                 protein = 52;
                 document.getElementById("result").innerHTML = protein;
                 document.getElementById("calories").innerHTML = protein * 4;
                 document.getElementById("foodList").innerHTML = "Beef, <br/>Chiken , <br/>Fish, <br/> Catfish";
             } else if (age >= 14 && age <= 18 && female.checked) {
                 protein = 46;
                 document.getElementById("result").innerHTML = protein;
                 document.getElementById("calories").innerHTML = protein * 4;
                   document.getElementById("foodList").innerHTML = "Beef, <br/>Chiken , <br/>Fish, <br/>Catfish";
                
             } else if (age >= 19 && age <= 70 && male.checked) {
                 protein = 56;
                 document.getElementById("result").innerHTML = protein;
                 document.getElementById("calories").innerHTML = protein * 4;
                   document.getElementById("foodList").innerHTML = "Beef, <br/>Chiken , <br/>Fish, <br/>Catfish, <br/>Cheese Burger, <br/> Dark Choclet, <br/>Pizza";
             } else if (age >= 19 && age <= 70 && female.checked) {
                 protein = 46;
                 document.getElementById("result").innerHTML = protein;
                 document.getElementById("calories").innerHTML = protein * 4;
                   document.getElementById("foodList").innerHTML = "Beef, <br/>Chiken , <br/>Fish, <br/> Catfish, <br/> Cheese Burger, <br/> Dark Choclet, <br/>Pizza";
             }
         }
    
     }
     var i = 0;
     var list = "Eggs, Chicken Breast, Cottage cheese, Greek yogurt, Milk Lean beef, Tuna, Fish";
     var speed = 80;

     function typeWriter() {
         if (i < list.length) {
             document.getElementById("list").innerHTML += list.charAt(i);
             i++;
             setTimeout(typeWriter, speed);
         }
     }
function GG() {
    var x = document.getElementById("gg").value;
    if(x == 1200){
  document.getElementById("breakfast").innerHTML = "Cereal,<br/>Milk,<br/>Banana ";
         document.getElementById("lunch").innerHTML = "	Grilled cheese with tomato,<br/>   Salad";
      document.getElementById("dinner").innerHTML = "Grilled,<br/>  Chicken Brussel,<br/>  sprouts  Quinoa  ";
        } 
    else if(x == 1500){
        
   document.getElementById("breakfast").innerHTML = "Granola,<br/>Greek yogurt,<br/>Blueberrie";
         document.getElementById("lunch").innerHTML = "Chicken and vegetable soup,<br/> Bread";
      document.getElementById("dinner").innerHTML = "Steak,<br/>Mashed potatoes,<br/> Asparagus ";
        }  else{
   document.getElementById("breakfast").innerHTML = "Buttered toast,<br/> Egg,<br/>Banana,<br/>Almonds";
         document.getElementById("lunch").innerHTML = "	Grilled Chiken ,<br/>Pasta,<br/>Grilled vegetables ";
      document.getElementById("dinner").innerHTML = "Grilled Salmon,<br/> Brown rice,<br/>Green beans,<br/> Walnuts ";
        }
    
}
 
