function calculate(){
    /Calcul de la Quantitée 1 et du prix unitaire 1/
    var p1= Number(document.getElementById("p1").value);
    var q1= Number(document.getElementById("q1").value);
    var r1=document.getElementById("r1").value=(p1*q1);

    /Calcul de la Quantitée 2 et du prix unitaire 2/
    var p2=Number(document.getElementById("p2").value);
    var q2=Number(document.getElementById("q2").value);
    var r2=document.getElementById("r2").value=(p2*q2);

    /Calcul de la Quantitée 3 et du prix unitaire 3/
    var p3=Number(document.getElementById("p3").value);
    var q3=Number(document.getElementById("q3").value);
    var r3=document.getElementById("r3").value=(p3*q3);

    /Calcul de la Quantitée 4 et du prix unitaire 4/
    var p4=Number(document.getElementById("p4").value);
    var q4=Number(document.getElementById("q4").value);
    var r4=document.getElementById("r4").value=(p4*q4);

    /Calcul de la Quantitée 5 et du prix unitaire 5/
    var p5=Number(document.getElementById("p5").value);
    var q5=Number(document.getElementById("q5").value);
    var r5=document.getElementById("r5").value=(p5*q5);

    /Calcul de la Quantitée 6 et du prix unitaire 6/
    var p6=Number(document.getElementById("p6").value);
    var q6=Number(document.getElementById("q6").value);
    var r6=document.getElementById("r6").value=(p6*q6);

    /Calcul de la Quantitée 7 et du prix unitaire 7/
    var p7=Number(document.getElementById("p7").value);
    var q7=Number(document.getElementById("q7").value);
    var r7=document.getElementById("r7").value=(p7*q7);

    /Calcul de la Quantitée 8 et du prix unitaire 8/
    var p8=Number(document.getElementById("p8").value);
    var q8=Number(document.getElementById("q8").value);
    var r8=document.getElementById("r8").value=(p8*q8);

    /Calcul de la Quantitée 9 et du prix unitaire 9/
    var p9=Number(document.getElementById("p9").value);
    var q9=Number(document.getElementById("q9").value);
    var r9=document.getElementById("r9").value=(p9*q9);

    /Calcul de la Quantitée 10 et du prix unitaire 10/
    var p10=Number(document.getElementById("p10").value);
    var q10=Number(document.getElementById("q10").value);
    var r10=document.getElementById("r10").value=(p10*q10);

    


    /Calcul du sous-total/
    var Remise =Number(document.getElementById("Remise").value);
    var SousTotal= Number(document.getElementById("SousTotal").value);
    document.getElementById("SousTotal").value=(r1+r2+r3+r4+r5+r6+r7+r8+r9+r10);

    /Calcul de la remise/
    var SousTotal_Resultat=Number(document.getElementById("SousTotal_Resultat").value);
    document.getElementById("SousTotal_Resultat").value=(SousTotal-Remise);

    /On récupère le taux d'imposition/
    var TauxImposition=parseInt(document.getElementById("TauxImposition").value+"%");
    /Calcul de la taxe totale/
    var taxetotale=parseInt(document.getElementById("taxetotale").value);
    document.getElementById("taxetotale").value=Math.round((SousTotal*TauxImposition)/100);

    /On récupère le prix de l'expédition de la marchandise/
    var Expedition=Number(document.getElementById("Expedition").value);

    /Calcul du prix total/
    var PrixFinal=Number(document.getElementById("PrixFinal").value);
    document.getElementById("PrixFinal").value=(SousTotal_Resultat+taxetotale+Expedition);
}