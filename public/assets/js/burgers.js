$(function () {
    // Get all the burgers
    $.ajax('/api/burgers', {
        type: 'GET',
    }).then((data) => {
        console.log(data)
        data.forEach(element => {
            if (element.devoured === false) {
                let row = `
                    <div class='row'>
                        <div class='col-md-8'>
                        <p>${element.burger_name}</p>
                        </div>
                        <div class='col-md-4'>
                        <Button burgerId=${element.id} class='btn btn-defaulthe devourBurger'>Devour!</Button>
                         </div>
                    </div>
                    `;
                $('.notDevouredBurgersSection').append(row);
            }
            
            if(element.devoured === true) {
                let devouredRow = `
                <div class='row'>
                    <div class='col-md-12'>
                        <p>${element.burger_name}</p>
                    </div>
                </div>
                `;
               
                $('.devouredBurgersSection').append(devouredRow);
            }
        });
        console.log('created new burger')
        });
    $(document).on('click','.devourBurger', function(event) {
        event.preventDefault();
        const id = $(this).attr('burgerId');
        console.log(id)

        const newEatenState = {
            devoured: true,
            burger_id: id
        };
        console.log(newEatenState)

        $.ajax('/api/burgers', {
            type: 'PUT',
            data: newEatenState
        }).then(() => {
            console.log('changed eaten state to', true);
            location.reload();
        });
    });

    $('.add-burger').on('click', function (event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $('#burg').val().trim(),
            devoured: false
        }
        console.log(newBurger)

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log('created new burger')
            location.reload();
        });
    });
})

