// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// Your code goes here!




function makeGrid() {
    var table = document.getElementById("pixel_canvas");
    table.innerHTML = "";
    while (table.rows.length > 1)
        table.deleteRow(0);
    var rows = document.getElementById("input_height").value;
    var columns = document.getElementById("input_width").value;
    for (let x = 0; x < rows; x++) {
        var row = table.insertRow(x);
        row.setAttribute("class", "row");
        for (let y = 0; y < columns; y++) {
            var cell = row.insertCell(y);
            cell.addEventListener('click', function (evt) {
                evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
    return false;
}
document.getElementById("sizePicker").addEventListener("submit", function (evt) {
    evt.preventDefault();
    makeGrid();
});
