//// Challenge 1:
var MarkHeight = 1.7;
var MarkMass = 72;

var JohnHeight = 1.9;
var JohnMass = 71;

    var markBMI = MarkMass / (MarkHeight * MarkHeight);
    var johnBMI = JohnMass / (JohnHeight * JohnHeight);

    if (markBMI > johnBMI)
    {
        console.log("Mark's BMI is higher than John's");
    }
    else
    {
        console.log("John's BMI is higher than Mark's");
    }


/*********************************************************/
//// Chalenge 2:
var johnTeam = (110 + 90 + 180) / 3;
var mikeTeam = (116 + 170 + 69) / 3;
var maryTeam = (97 + 134 + 150) / 3;
console.log("john team score: " + johnTeam.toFixed(2) + "<br />", "mike team score: " + mikeTeam.toFixed(2) + "<br />", "mary team score: " + maryTeam.toFixed(2));

if (johnTeam > mikeTeam && johnTeam > maryTeam)
{
    console.log("john team is the winner and the average score is: " + johnTeam.toFixed(2));
}
else if (mikeTeam > maryTeam && mikeTeam > johnTeam)
{
    console.log("mike team is the winner and the average score is: " + mikeTeam.toFixed(2));

}
else if (maryTeam > johnTeam && maryTeam > mikeTeam)
{
    console.log("mary team is the winner and the average score is: " + maryTeam.toFixed(2));
}
else
{
    console.log("There is a draw");
}
 
/*********************************************************/
//// Chalenge 3:
var restaurantBill = [124, 480, 268, 250];


function tipCalculator(bill)
{
    if (bill < 50)
    {
        var tip = (bill * 20 / 100);

    }
    else if (50 < bill < 200)
    {
        var tip = (bill * 15 / 100);
    }
    else
    {
        var tip = (bill * 10 / 100);
    }
    return tip;
    
}


var Tips = [];
var finalBills = [];

for (var i = 0; i < restaurantBill.length; i++)
{
    Tips[i] = tipCalculator(restaurantBill[i]);
    finalBills[i] = restaurantBill[i] + Tips[i];
}

console.log(Tips);
console.log(finalBills);

/**************************************************/
var string = ("swetha", "rakesh");
var string1 = [2, 3, 5];
if (string == [])
{
     console.log(string);
}
 else
{
    console.log(string1);
}

/************************************************** */
////Challenge 4:

var mark = {
    fullName:'mark miller',
    mass: 72,
    height: 1.72,
    calcBMI: function ()
{
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}
}

var john = {
    fullName:'john smith',
    mass: 71,
    height: 1.95,
    calcBMI: function ()

{
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}
}

if(mark.calcBMI() > john.calcBMI())
{
  console.log(mark.fullName + ' is greater than john ' + mark.bmi.toFixed(2));
}
else if(mark.bmi < john.bmi)
{
    console.log(john.fullName + ' is greater than john' + john.bmi.toFixed(2));
}
else
{
    console.log("markBMI and johnBMI are both are same");
}
 
 



