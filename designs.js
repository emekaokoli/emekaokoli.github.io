// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('#sizePicker').submit((e)=>{
    e.preventDefault()
    const height = $('#inputHeight').val();
    const width = $('#inputWeight').val();
    makeGrid(height, width);
})

function makeGrid(row, column) {
    //remove table row if exist
    $('tr').remove();
    
    for(let i = 1; i <= row; i++){
        $('#pixelCanvas').append("<tr id=table" + i + "></tr>");

        for (let j = 1; j <= column; j++){
            $('#table' + i).append('<td></td>')            
        }
    }
    
    $('td').click(function() {
        const colors =  $('#colorPicker').val()
        $(this).attr('style') ?  $(this).removeAttr('style') : $(this).attr('style', 'background:' + colors);        
    });
}
