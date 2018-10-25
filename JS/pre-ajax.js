$(function () {
    "use strict";
 var people = [
{
name: "Fred",
favColor: "red"
},
{
name: "Sally",
favColor: "blue"
},
{
name: "Tom",
favColor: "yellow"
}
];

function buildHtml(peopleObjects) {
    var totalHtml = '<ul>';
    peopleObjects.forEach(function(person){
        totalHtml += '<li>';
        totalHtml += person.name;
        totalHtml += '</li>';
    });
    totalHtml += '</ul>';
    return totalHtml
}
    $('#add-names-btn').click(function () {
        $('#names-list').html(buildHtml(people));
    })

});
