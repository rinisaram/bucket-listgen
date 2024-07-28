$(document).ready(function() {
    $('#generateButton').click(function() {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/bucketlist',
            headers: { 'X-Api-Key': '0nI6U1NkZ5X1uOLRq0HiUQ==xFRi6LaFEfRpk7fz' },
            contentType: 'application/json',
            success: function(result) {
                const listItem = $('<li></li>').text(result.item);
                const crossButton = $('<span class="cross">&times;</span>');

                listItem.append(crossButton);
                $('#bucketList').append(listItem);

                listItem.click(function() {
                    $(this).toggleClass('done');
                });

                crossButton.click(function() {
                    listItem.remove();
                });
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    });
});
