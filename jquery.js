$(document).ready(function(){
    $(document).on('click', '.btn', function(){
        var firstName = $('input[name="first_name"]').val();
        var lastName = $('input[name="last_name"]').val();
        var description = $(document.getElementById("description")).val();
        $("#right_side_div").append('<div class="box"><div class="info"><h1>' + firstName + " " + lastName + '</h1><a href="#" class="more_info">Click to see description</a></div><div class="description">' + description + '</div></div>');
        $("#form")[0].reset();
    });
});

$(document).on("click", ".more_info", function(){
    var box = $(this).parent().parent();
    box.find(".info").hide();
    box.find(".description").show().css('background', '#129cf3').css('height', '90');
});
