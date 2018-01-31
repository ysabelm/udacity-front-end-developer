$(document).ready(() => {

let canvas = $("#pixel_canvas");


function makeGrid() {
    let row = $("#input_height").val();
    let cell = $("#input_width").val();
    // Create rows
    for (let i = 0; i < row; i++) {
        canvas.append("<tr></tr>");
        // Create cells
        for (let j = 0; j < cell; j++) {
            canvas.children().last().append("<td></td>");
        }
    }
};

    $('input[type="submit"]').on('click', (e) => {
        e.preventDefault();
        makeGrid();
    });
    canvas.on('click', 'td', (e) => {
        let color = $('#colorPicker').val();
        $(e.currentTarget).css('background-color', color);
    });
});


