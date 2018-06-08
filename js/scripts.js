$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = "";
    //If input is divisible by 3
    if(!(input%3))
    {
      output += "I'm sorry, Dave. I'm afraid I can't do that.";
    }
    //Number contains a 1
    else if(false)
    {
      output += "Boop!";
    }
    //Number contains a 0
    else if(false)
    {
      output += "Beep!";
    }
    //Output Number as is
    else
    {
      output = input.toString();
    }

    $("#output").text(output);
  });
});
