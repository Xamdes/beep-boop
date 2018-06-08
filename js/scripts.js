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
    $("#output").html(output);
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
  else if(input < 0)
  {
    output = input.toString();
  }
  else {
    output = [];
    for(var index = 0; index <= input; index++)
    {
      var indexArray = index.toString().split("");
      //If input is divisible by 3
      if(!(index%3) && index !=0)
      {
        output.push(listWrapper("I'm sorry, "+userName+". I'm afraid I can't do that."));
      }
      //Number contains a 1
      else if(contains("1",indexArray))
      {
        output.push(listWrapper("Boop!"));
      }
      //Number contains a 0
      else if(contains("0",indexArray))
      {
        output.push(listWrapper("Beep!"));
      }
      //Output Number as is
      else
      {
        output.push(listWrapper(index.toString()));
      }
    }
  }

  return output;
}

function listWrapper(input)
{
  return ("<li>"+input+"</li>");
}
