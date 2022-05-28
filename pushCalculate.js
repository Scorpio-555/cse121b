//This is a probability calculator for the Yu-Gi-Oh! card game. It calculates the chances of having at
//least 1 card from a given card group in your starting hand. Your starting hand has six cards. Yugi-
//Calc! can tell you the chances that at least one of those cards in your hand is a dragon, or a card 
//that gives an attack boost, and anything else you can think of. Just enter the total number of cards 
//in your deck, the number of cards of a target group that are in your deck (if you wanted to know the
//probability for dragons and you have 5 dragons in the deck you would enter the number 5) and 
//optionally you can give the target group a name such as "dragons"

//To illustrate what happens when you push the "Calculate" button, let's use the following example.
//You enter 40 for the total number of cards in your deck and you enter 5 for the number of cards 
//in your target group. The function pushCalculate() will find the percent chance that you don't 
//end up with zero cards from your target group in your hand. So we start off by calculating the chance
//that you actually do end up with zero target cards. For your first turn you will have drawn 6
//cards. Draw card 1: there is a 35 out of 40 chance it is not a target card. Continue until you
//have drawn all six: 

//Card 1 -> 35/40, Card 2 -> 34/39, Card 3 -> 33/38, Card 4 -> 32/37, Card 5 -> 31/36, Card 6 -> 30/35. 

//Now multiply all the numerators and all the denominators and calculate the float. This is the chance 
//that zero target cards are drawn. Now perform 1 - float and multiply the result by 100 and you have 
//the percent chance that 1 or more target cards are in your starting hand.

groupName = "";
deckTotal = 0;
groupCount = 0;
nonGroupCount = 0;
numerator = 0;
denominator = 0;
percentChance = 0.0;

function setUserImputs (){
    groupName = document.getElementById("groupName").value;
    if(groupName == ""){
        groupName = "target";
    } else{
        groupName = "\"" + groupName + "\"";
    }
    deckTotal = parseInt(document.getElementById("deckTotal").value);
    groupCount = parseInt(document.getElementById("groupCount").value);
    nonGroupCount = deckTotal - groupCount;
}

function getNumeratorAndDenominator(){
    if(nonGroupCount > 5){                  //Since you draw 6 cards in your first turn,
        numeratorTotal = 1;                 //if you only have 5 or less cards in your
        numeratorFactor = nonGroupCount;    //nonGroupCount then you automatically know
        denominatorTotal = 1;               //there is a 100% chance of drawing at least
        denominatorFactor = deckTotal;      //1 card from the target group and you can skip
                                            //to the else statement
        for(i = 0; i < 6; i++){
            numeratorTotal = numeratorTotal * numeratorFactor;          //By the end this will multiply all the numerators
            numeratorFactor = numeratorFactor - 1;                      //This decrements to the next numerator to be multiplied
            denominatorTotal = denominatorTotal * denominatorFactor;    //By the end this will multiply all the denominators
            denominatorFactor = denominatorFactor - 1;                  //This decrements to the next denominator to be multiplied
        }

        numerator = numeratorTotal;
        denominator = denominatorTotal;
    } else{
        numerator = 0;
        denominator = 1;
    }
}

function getPercentChance(){
    getNumeratorAndDenominator();                           //get the numerator and denominator, this is the chance that you get zero target cards
    percentChance = (1 - numerator / denominator) * 100;    //1 - float is the chance you get 1 or more target cards
    percentChance = percentChance.toFixed(2);               //multiply by 100 makes it a percent
}

function pushCalculate(){
    allInputsValid = true;
    errorMessage = "";

    setUserImputs();

    if(deckTotal < 40 || deckTotal > 60 || isNaN(deckTotal)){                   //validate deck total
        allInputsValid = false;
        errorMessage = errorMessage + "(deck total must be between 40-60) ";
    }

    if(groupCount < 1 || groupCount > deckTotal || isNaN(groupCount)){          //validate group count
        allInputsValid = false;
        errorMessage = errorMessage + "(group count must be bigger than 0 and less than deck total) ";
    }

    resultsElement = document.getElementById("results");

    if(allInputsValid){                                 //If everything checks out, display percentChance
        getPercentChance();
        resultsElement.innerText = "the chances of having at least one card from the " + groupName + " group (count: " + groupCount + ") in your starting hand using a " + deckTotal + " card deck is " + percentChance + "%.";
    } else{
        resultsElement.innerText = errorMessage;        //otherwise display error message
    }

}


