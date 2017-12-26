var mats = [];
var sortclick = 1;

function addMat(name, category, rating) {
    mats.push(
        {
            name: name,
            category: category,
            rating: rating
        }
    );
    console.log(mats);
}

function renderMats() {
    $(".mats-list").empty();
    for (var mat in mats) {
        $(".mats-list").append("<li><h4>" + mats[mat].name + ", " + mats[mat].category + ", rating: " + mats[mat].rating + "</h4></li>");
    }
}
function postMat() {
    addMat($(".mat-input").val(), $(".category-input").val(), $(".rating").val());
    $(".mat-input").val('');
    $(".category-input").val('');
    $(".rating").val('1')
    renderMats();
}
function sort() {
    mats.sort(function(a,b) {
             return (b.rating-a.rating)*sortclick;
         });
    sortclick=sortclick*(-1);
    renderMats();
 }

$(".post-mat").click(postMat);
$(".sort").click(sort);
