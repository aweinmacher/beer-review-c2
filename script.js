var mats = [];

function addMat(name, category) {
    mats.push(
        {
            "name": name,
            "category": category
        }
    );
    console.log(mats);
}

function renderMats() {
    $(".mats-list").empty();
    for (var mat in mats) {
        $(".mats-list").append("<li>" + mats[mat].name + ", " + mats[mat].category + "</li>");
    }
}

$(".post-mat").click(function () {
    addMat($(".mat-input").val(), $(".category-input").val());
    $(".mat-input").val('');
    $(".category-input").val('');
    renderMats();
})

