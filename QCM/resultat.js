var rep = new Array;
var faite = new Array;
var score = 0;
 

rep[1] = "a";
rep[2] = "a";
rep[3] = "a";
rep[4] = "a";
rep[5] = "a";
rep[6] = "a";
rep[7] = "a";
rep[8] = "a";
rep[9] = "a";
rep[10] = "a";
 

function testRep(question, reponse){

        if(reponse != rep[question]){

                if(!faite[question]){
                        faite[question] = -1;
                }

                else{
                        alert("Tu as déjà répondu à cette question !");
                }      
        }

        else{

                if(!faite[question]){
                        faite[question] = -1;
                        score++;
                        alert("Bonne réponse !! ");
                }

                else{ 
                        alert("Tu as déjà répondu à cette question !");
                }
        }
}

function score(){
        alert(score + "/10");
}