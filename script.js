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
    $("ul").empty();
    for (var mat in mats) {
        $("ul").append("<li>" + mats[mat].name + ", " + mats[mat].category + "</li>");
    }
}

$(".post-mat").click(function () {
    addMat($(".mat-input").val(), $(".category-input").val());
    $(".mat-input").val('');
    $(".category-input").val('');
    renderMats();
})

