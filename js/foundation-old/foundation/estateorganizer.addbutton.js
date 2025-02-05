$('#add').click(function(){
    //use clone to make duplicate copy
    var clone_div = $('#meow').clone();

    //Append where ever you want.
    // here append to body
    $('body').append(clone_div);
})
$('#delete').click(function(){
    //div to remove use remove() 
    $('#meow').remove();
})
