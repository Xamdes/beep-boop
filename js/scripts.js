$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    var inputString = $("#input").val();
    var userName = $("#user-name").val().trim();
    var direction = (parseInt($("input:radio[name=direction]:checked").val()));
    if(userName === "")
    {
      userName = "Dave";
    }

    var output = processInput(inputString,userName,direction);
    $("#output").html(output);
    $("#output-input").html(inputString);
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
    output = input.toString();
  }
  else
  {
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

function smallToLargeLoop(input,userName)
{
  var output = [];
  for(var index = 0; index <= input; index++)
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
    output.push(wrapper("li",temp));
  }
  return output;
}

function largeToSmallLoop(input,userName)
{
  var output = [];
  for(var index = input; index >= 0; index--)
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
    output.push(wrapper("li",temp));
  }
  return output;
}
