// var mats = [];
// var sortclick = 1;

// function addMat(name, category, rating) {
//     mats.push(
//         {
//             name: name,
//             category: category,
//             rating: rating
//         }
//     );
//     console.log(mats);
// }

// function renderMats() {
//     var matList = $(".mats-list").empty();
//     for (var mat in mats) {
//         matList.append(`<li><h4>${mats[mat].name}, ${mats[mat].category}, rating: ${mats[mat].rating}</h4></li>`);
//     }
// }
// function postMat() {
//     addMat($(".mat-input").val(), $(".category-input").val(), $(".rating").val());
//     $(".mat-input").val('');
//     $(".category-input").val('');
//     $(".rating").val('1')
//     renderMats();
// }
// function sort() {
//     mats.sort(function(a,b) {
//              return (b.rating-a.rating)*sortclick;
//          });
//     sortclick=sortclick*(-1);
//     renderMats();
//  }

// $(".post-mat").click(postMat);
// $(".sort").click(sort);

function MatReviewApp() {
    var mats = [];
    var $matsList = $('.mats-list');
    var sortclick = 1;

    var addMat = function (name, category, rating) {
        mats.push(
            {
                name: name,
                category: category,
                rating: rating
            }
        );
        console.log(mats);
    }
    var updateMats = function () {
        $matsList.empty();
        for (var mat in mats) {
            var matHTML = `<li><h4>${mats[mat].name}, ${mats[mat].category}, rating: ${mats[mat].rating}</h4></li>`;
            $matsList.append(matHTML);
        }
    }
    var sortMats = function () {
        mats.sort(function (a, b) {
            return (b.rating - a.rating) * sortclick;
        });
        sortclick = sortclick * (-1);
    }

    return {
        addMat: addMat,
        updateMats: updateMats,
        sortMats: sortMats
    };
}

var app = MatReviewApp();

$(".post-mat").on("click", function () {
    var name = $(".mat-input");
    var category = $(".category-input");
    var rating = $(".rating");
    app.addMat(name.val(), category.val(), rating.val());
    app.updateMats();
    name.val("");
    category.val("");
    rating.val("1");
});

$(".sort").on("click", function () {
    app.sortMats();
    app.updateMats();
});