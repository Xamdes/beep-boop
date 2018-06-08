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
    //Number containbes a 1
    else if(false)
    {

    }
    //Number contains a 0
    else if(false)
    {

    }
    //Output Number as is
    else
    {

    }

    $("#output").text(output);
  });
});
