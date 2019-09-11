
/* this meathod is also work but inplace of writing two different
properties we use object and pass in css

$("li").click(function(){
  $(this).css("color","red")
  $(this).css("text-decoration","line-through")
});
*/

/* problem with this method is you can not use toggleClass
$("li").click(function(){
    $(this).css({
        color: "grey",
    textDecoration: "line-through"
    })
});
*/

//its better to define a Class and toggle it
//class 'completed' is defined in css

/* the problem with this code is that when new li is added is does not run on the new ones
so the solution is to use on("click") on the parent od li that is ul


$("li").click(function(){
    $(this).toggleClass("completed")
})

//click on X to delete todo
$("span").click(function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });

    // so when click on span li is also clicked ,stopPropagation() is used 
    e.stopPropagation()
});  */


$("ul").on("click","li", function(){
    $(this).toggleClass("completed")
})

//click on X to delete todo
$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });

    // so when click on span li is also clicked ,stopPropagation() is used 
    e.stopPropagation()
});
// event for new entrty in the list
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        //grab new text from input
        var todoText = $(this).val() //when anything is typed and press enter then it stored on var todoText
        $(this).val("")  //this is to clear the text area
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
    }
     
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});
