
$(document).ready( function() {
    //This code will run after your page loads
    
    $("#new").click(function(){
            alert("New game");
    });
    
    $.ajax({
        url: "sudoku/new",
        context: document.body
    }).done(function(data) {
        for (var i = 0; i < 81; i++){
            $("#cell"+(i+1)).val(data["values"][i]);
        }
    });
});
