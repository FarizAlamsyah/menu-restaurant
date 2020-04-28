function showAllMenus(){
	$.getJSON('data/menu.json', function(data){
		let menu = data.menu;
		menu.sort(function(a, b){
            return sortAlphabet(a.nama, b.nama);
            return a.harga - b.harga;
        });
		$.each(menu, function(i, data){
			$('#daftar-menu').append('<div class="col-md-4"><div class="card" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary">Rp. '+ data.harga +',-</a></div></div></div>')
		})
	});
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
		menu.sort(function(a, b){
            return sortAlphabet(a.nama, b.nama);
            return a.harga - b.harga;
        });

		$.each(menu, function(i, data){
			if (data.kategori == kategori.toLowerCase()) 
			{
				content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" width="200" height="200" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"> '+ data.deskripsi +' </p><a href="#" class="btn btn-primary">Rp. '+ data.harga +',-</a></div></div></div>'
			}
		});

		$('#daftar-menu').html(content);
	});
});


function sortAlphabet(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}