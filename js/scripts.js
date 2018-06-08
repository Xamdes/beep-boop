$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    var inputString = $("#input").val();
    var userName = $("#user-name").val().trim();
    var direction = (parseInt($("input:radio[name=direction]:checked").val()));
    //If user-name is left blank default to using Dave as userName
    if(userName === "")
    {
      userName = "Dave";
    }

    //Start back-end logic
    var output = processInput(inputString,userName,direction);
    $("#output").html(output);
    $("#output-input").html(inputString);
  });
});

//Check if value is contained in the array
function contains(value,ptrArray)
{
  var returnValue = false;
  ptrArray.forEach(function(temp)
  {
    if(value === temp)
    {
      returnValue = true;
    }
  })
  return returnValue;
}

//start checking the input to figure out what to do
//Add sanity check for NaN and if input is less than 0
function processInput(inputString,userName,direction)
{
  var input = parseInt(inputString);
  var output = "";
  // Check for blank input
  if(isNaN(input))
  {
    output = "";
  }
  else if(input < 0)
  {
    output = wrapper("li","Please enter a positive number.");
  }
  else
  {
    //takes direction of which way to output numbers either starting from 0 to input or input to 0
    if(direction)
    {
      output = largeToSmallLoop(input,userName);
    }
    else
    {
      output = smallToLargeLoop(input,userName);
    }
  }
  return output;
}

function wrapper(what,input)
{
  return ("<"+what+">"+input+"</"+what+">");
}

//Starts out at 0 and runs for loop all the way to input
function smallToLargeLoop(input,userName)
{
  var output = [];
  for(var index = 0; index <= input; index++)
  {
    var temp = branchInput(index,userName);
    output.push(wrapper("li",temp));
  }
  return output;
}

//Starts for loop at input and runs until it hits 0
function largeToSmallLoop(input,userName)
{
  var output = [];
  for(var index = input; index >= 0; index--)
  {
    var temp = branchInput(index,userName);
    output.push(wrapper("li",temp));
  }
  return output;
}

//Branching logic used with loops for determing output for a given number
function branchInput(index,userName)
{
  var indexArray = index.toString().split("");
  var temp = ("Input: " + index.toString()+" | Output: ");
  //If input is divisible by 3
  if(!(index%3) && index !=0)
  {
    temp+=("[\"I'm sorry, "+userName+". I'm afraid I can't do that.\"]");
  }
  //Number contains a 1
  else if(contains("1",indexArray))
  {
    temp+=("[\"Boop!\"]");
  }
  //Number contains a 0
  else if(contains("0",indexArray))
  {
    temp+=("[\"Beep!\"]");
  }
  //Output Number as is
  else
  {
    temp+=index.toString();
  }
  return temp;
}
