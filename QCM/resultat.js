var rep = new Array;
var questionF = new Array;
var score = 0;
 

rep[1] = "a";rep[2] = "b";rep[3] = "a";rep[4] = "a";rep[5] = "c";rep[6] = "b";rep[7] = "c";rep[8] = "b";rep[9] = "b";rep[10] = "c";
 

function testRep(question, reponse){

        if(reponse != rep[question]){

                if(!questionF[question]){
                        questionF[question] = -1;
                }

                else{
                        alert("Déjà faite...");
                }      
        }

        else{

                if(!questionF[question]){
                        questionF[question] = -1;
                        score++;
                }

                else{ 
                        alert("Déjà faite...");
                }
        }
}



function ResQuiz() {

        alert("Vous avez un score de " +score+ "/10");
        faite = new Array;
        score = 0;
}