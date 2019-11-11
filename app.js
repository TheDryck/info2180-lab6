$(document).ready(function(){
    $("#find_name").click(function(){
        $("input").attr('value', '');
    });

    $("#searchCharac").click(function(){
        let name_find = $("#find_name").val(); 
        if(name_find === "Enter character name or alias"){
            name_find = "";
        }
        name_find = name_find.trim();
        $.get("superheroes.php",
        {
            query: name_find
        }).done(function(response){
            let reply = response;
            alert(reply);
        }).fail(function(){
            alert('An error occured with loading page');
        });
    });
});