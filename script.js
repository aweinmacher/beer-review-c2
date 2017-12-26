var mats = [];
var sortclick = 0;

function addMat(name, category) {
    var rating = $(".rating").val();
    mats.push(
        {
            "name": name,
            "category": category,
            "rating": rating
        }
    );
    console.log(mats);
}

function sort() {
   if(sortclick){
       mats.sort(function(a,b) {
            return a.rating-b.rating;
        });
        sortclick=0;
   }
   else{
       mats.sort(function(a,b) {
           return b.rating-a.rating;
       });
       sortclick=1;
   }
   renderMats();
   console.log(mats);
}

function renderMats() {
    $(".mats-list").empty();
    for (var mat in mats) {
        $(".mats-list").append("<li><h4>" + mats[mat].name + ", " + mats[mat].category + ", rating: " + mats[mat].rating + "</h4></li>");
    }
}

$(".post-mat").click(function () {
    addMat($(".mat-input").val(), $(".category-input").val());
    $(".mat-input").val('');
    $(".category-input").val('');
    renderMats();
})

$(".sort").click(sort);
