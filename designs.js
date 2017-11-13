// Select color input
// Select size input
var height = $("#input_height");
var h = height.val();
var width = $("#input_width");
var w = width.val();
var btnSubmit = $('input[type="submit"]');
var btnColor = $("#colorPicker");
var color = btnColor.val();
var table = $("#pixel_canvas");
//
// When size is submitted by the user, call makeGrid()
height.change(function (e) {
    h = height.val();
});
width.change(function (e) {
    w = width.val();
});
btnColor.change(function () {
    color = btnColor.val();
});
btnSubmit.click(function (e) {
    e.preventDefault();
    makeGrid();
});
table.click("td",function(e){
    $(e.target).css("background-color",color);
});
function makeGrid(submit) {
    console.log(submit);
    table.children().remove();
    for (var i =1; i <=h; i++){
        table.append("<tr id="+i+">");
        for (var j=1; j<=w;j++){
            $("#"+i).append("<td></td>");
        }
    }

}
