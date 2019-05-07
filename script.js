$('#download').click(function () {
    html2canvas(document.querySelector("#notes-content")).then(canvas => {
        // document.body.appendChild(canvas);
            var img = canvas.toDataURL("image/png");
            // window.open(img);
            window.open().document.write('<img src="' + img + '" />');
            // var doc = new jsPDF({
            //     orientation: 'landscape'
            // });
            // doc.addImage(img, 'JPEG', 20,20);
            // doc.save('flute-notes.pdf')

    });
});

$("#notes-button").on("click", function(){
    var sargam = $('#sargam-input').val();
    var notesContent = $('#notes-content');
    notesContent.html('');
    var sur = sargam.split('');
    var space = '<div class="space"></div>'
    var sa = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
    var re = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
    var ga = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
    var ma = '<div class="flute text-center"><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
    var pa = '<div class="flute text-center"><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
    var dha = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
    var ni = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
    
    for(var i=0 ; i<sur.length ; ++i){
        switch(sur[i]){
            case 's' || 'S':
                notesContent.append(sa);        
                break;
            case 'r' || 'R':
                notesContent.append(re);        
                break;
            case 'g' || 'G':
                notesContent.append(ga);        
                break;
            case 'm' || 'M':
                notesContent.append(ma);        
                break;
            case 'p' || 'P':
                notesContent.append(pa);        
                break;
            case 'd' || 'D':
                notesContent.append(dha);        
                break;
            case 'n' || 'N':
                notesContent.append(ni);        
                break;
            case ' ':
                notesContent.append(space);        
                break;
        }
    }
})