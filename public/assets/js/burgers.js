$(function() {
    $(".change-eaten").on("click", function(event) {
        event.preventDefault();
        const id = $(this).data("id");

        const newEatenState = {
            devoured: true, burger_id:id
        };
        console.log(newEatenState)

        $.ajax("/api/burgers", {
            type: "PUT",
            data: newEatenState
        }).then(() => {
            console.log("changed eaten state to", true);
            location.reload();
        });
    });

    $(".add-burger").on("click", function(event) {
        event.preventDefault();

        const newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: false
        }
        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger")
            location.reload();
        });
    })
})

