// A $( document ).ready() block.
$( document ).ready(function() {
    $("#egitim").click(function (event) {
        event.preventDefault();
        var title  = $(this).data('title');
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render personel file to the index page through ajax
    $("#personel").click(function (event) {
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render personel Kategori file to the index page through ajax
    $(document.body).on('click','#personelKategori', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render akademik Yardimci file to the index page through ajax
    $(document.body).on('click','#akademikYardimci', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render idari Teknik file to the index page through ajax
    $(document.body).on('click','#idariTeknik', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render lisans file to the index page through ajax
    $(document.body).on('click','#lisans', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render lisans Bahar program file to the index page through ajax
    $(document.body).on('click','#lisansBahar', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render lisans Guz program file to the index page through ajax
    $(document.body).on('click','#lisansGuz', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });

    //onclick render 1 sinif ders program file to the index page through ajax
    $(document.body).on('click','#sinif1', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render 2 sinif ders program file to the index page through ajax
    $(document.body).on('click','#sinif2', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render 3 sinif ders program file to the index page through ajax
    $(document.body).on('click','#sinif3', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render 4 sinif ders program file to the index page through ajax
    $(document.body).on('click','#sinif4', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render yuksek Lisans file to the index page through ajax
    $(document.body).on('click','#yuksekLisans', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render yuksek lisans Guz sinif ders program file to the index page through ajax
    $(document.body).on('click','#yuksekGuz', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });
    //onclick render yuksek lisans Bahar ders program file to the index page through ajax
    $(document.body).on('click','#yuksekBahar', function(event){
        event.preventDefault();
        var title  = $(this).data('title');
        var url  = $(this).data('url');
        render_page(url,title);
    });

    //render file to the index page through ajax
    function render_page(url,title) {
            $('#app').html('');
            $( "#app" ).load( url, function(response, status, xhr ) {
                $( "#title" ).html('');
                $( "#title" ).html(title);
                if ( status == "error" ) {
                    var msg = "Sorry but there was an error: ";
                    $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
                }
            });
    }



});