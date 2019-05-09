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
    //Normal Sargam
    var sa = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Sa</strong></sup></span></div>';
    var re = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Re</strong></sup></span></div>';
    var ga = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Ga</strong></sup></span></div>';
    var ma = '<div class="flute text-center"><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Ma</strong></sup></span></div>';
    var pa = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Pa</strong></sup></span></div>';
    var dha = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Dh</strong></sup></span></div>';
    var ni = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Ni</strong></sup></span></div>';
    //Teevr Sargam
    var tsa = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Sa#</strong></sup></span></div>';
    var tre = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Re#</strong></sup></span></div>';
    var tga = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Ga#</strong></sup></span></div>';
    var tma = '<div class="flute text-center"><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Ma#</strong></sup></span></div>';
    var tpa = '<div class="flute text-center"><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Pa#</strong></sup></span></div>';
    var tdha = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Dh#</strong></sup></span></div>';
    var tni = '<div class="flute text-center"><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole press">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="hole">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br><span class="note"><sup><strong>Ni#</strong></sup></span></div>';
    //Komal Sargam -- Pending
    for(var i=0 ; i<sur.length ; ++i){
        if(sur[i+1] !== '\''){

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
    } else {
        switch(sur[i]){
            case 's' || 'S':
                notesContent.append(tsa);        
                break;
            case 'r' || 'R':
                notesContent.append(tre);        
                break;
            case 'g' || 'G':
                notesContent.append(tga);        
                break;
            case 'm' || 'M':
                notesContent.append(tma);        
                break;
            case 'p' || 'P':
                notesContent.append(tpa);        
                break;
            case 'd' || 'D':
                notesContent.append(tdha);        
                break;
            case 'n' || 'N':
                notesContent.append(tni);        
                break;
            case ' ':
                notesContent.append(space);        
                break;
        }
    }
    }
})