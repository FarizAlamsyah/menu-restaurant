function showAllMenus(){
	$.getJSON('data/menu.json', function(data){
		let menu = data.menu;
		$.each(menu, function(i, data){
			$('#daftar-menu').append('<div class="col-md-4"><div class="card" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary">Rp. '+ data.harga +',-</a></div></div></div>')
		})
	});
}

function sortMenu(command = "asc") {
    return function menuSort(a, b) {
        var nameA = a.nama.toLowerCase();
        var nameB = b.nama.toLowerCase();
        var compare = 0;
        if (nameA > nameB) {
            compare = 1;
        } else if (nameA < nameB) {
            compare = -1;
        }
        return (command == "desc" ? compare * -1 : compare);
    }
}

showAllMenus();

$('.nav-link').on('click', function(){
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();
	$('h1').html(kategori);

	if (kategori == 'All Menus')
	{
		showAllMenus();
		return;
	}

	$.getJSON('data/menu.json', function(data){
		let menu = data.menu;
		let content = '';
		$.each(menu, function(i, data){
			if (data.kategori == kategori.toLowerCase()) 
			{
				content += '<div class="col-md-4"><div class="grid card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title element-item name">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary element-item price">Rp. '+ data.harga +',-</a></div></div></div>'
			}
		});

		$('#daftar-menu').html(content);
	});
});

$('#byp').on('click', function () {
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    // $('h1').html(kategori);
    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }
    $.getJSON('data/menu.json', function (data) {
        let menu = data.menu;
        let content = '';
        // menu.sort(function(a, b){
        //     return sortharga(a.harga, b.harga);
        //     return a.harga - b.harga;
        // });
        menu.sort(function (a, b) {
            return b.harga - a.harga
        }
        );
        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary">Rp. '+ data.harga +',-</a></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary">Rp. '+ data.harga +',-</a></div></div></div>'
            }
        });
        $('.nav-link').removeClass('active');
        $('#AllMenu').addClass('active');
        $('h1').html('All Menus');
        $('#daftar-menu').html(content);
    });
});

$('#byn').on('click', function () {
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    // $('h1').html(kategori);
    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }
    $.getJSON('data/menu.json', function (data) {
        let menu = data.menu;
        let content = '';
        
        menu.sort(sortMenu("asc"));
        
        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary">Rp. '+ data.harga +',-</a></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary">Rp. '+ data.harga +',-</a></div></div></div>'
            }
        });
        $('.nav-link').removeClass('active');
        $('#AllMenu').addClass('active');
        $('h1').html('All Menus');
        $('#daftar-menu').html(content);
    });
});