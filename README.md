# cse121b
Week six personal project

To illustrate what happens when you push the "Calculate" button, let's use the following example.
You enter 40 for the total number of cards in your deck and you enter 5 for the number of cards 
in your target group. The function pushCalculate() will find the percent chance that you don't 
end up with zero cards from your target group in your hand. So we start off by calculating the chance
that you actually do end up with zero target cards. For your first turn you will have drawn 6
cards. Draw card 1: there is a 35 out of 40 chance it is not a target card. Continue until you
have drawn all six: 

Card 1 -> 35/40, Card 2 -> 34/39, Card 3 -> 33/38, Card 4 -> 32/37, Card 5 -> 31/36, Card 6 -> 30/35. 

Now multiply all the numerators and all the denominators and calculate the float. This is the chance 
that zero target cards are drawn. Now perform 1 - float and multiply the result by 100 and you have 
the percent chance that 1 or more target cards are in your starting hand.
