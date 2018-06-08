$(function()
{
  $("#input-form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());

    $("#output").text("test");

  });
});
