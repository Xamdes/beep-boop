$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    var inputString = $("#input").val();
    var userName = $("#user-name").val().trim();
    if(userName === "")
    {
      userName = "Dave";
    }
    var output = processInput(inputString,userName);
    $("#output").text(output);
  });
});

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

function processInput(inputString,userName)
{
  var input = parseInt(inputString);
  var inputArray = inputString.split("");
  var output = "";
  // Check for blank input
  if(isNaN(input))
  {
    output = "";
  }
  //If input is divisible by 3
  else if(!(input%3) && input !=0)
  {
    output += "I'm sorry, "+userName+". I'm afraid I can't do that.";
  }
  //Number contains a 1
  else if(contains("1",inputArray))
  {
    output += "Boop!";
  }
  //Number contains a 0
  else if(contains("0",inputArray))
  {
    output += "Beep!";
  }
  //Output Number as is
  else
  {
    output = input.toString();
  }
  return output;
}
