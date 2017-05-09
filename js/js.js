function gotoPage(index) {
			$('#gallery li').addClass('page-hidden');
			$('#gallery li').eq(index).removeClass('page-hidden');

			$('.pagination li').addClass('waves-effect').removeClass('active');
			$('.pagination li').eq(index).addClass('active').removeClass('waves-effect');
		}

		$(function(){
			$.getJSON('js/info.json', function(responce) {

				var pageCount = Math.floor(responce.img.length/6); //відкидання дробної частини

				if (responce.img.length%6) pageCount++;

				for (i = 0; i < pageCount; i++) {

					var li = document.createElement('li');

					for (j = i*6; j < i*6+6; j++) {
						if (responce.img[j]) {
							$(li).html(
								$(li).html() + '<div class="col s12 m4 l4"><div class="card gallery"><div class="card-image"><a href="#modal' + [j] + '">' + '<img src="' + responce.img[j].url + '">' + '</a></div></div></div>'
								)

							$(li).html(
								$(li).html() + '<a href="#" class="overlay" id="modal' + [j] + '"></a>' + '<div class="popup" style="width:1000px;"><h4><b>' + responce.img[j].name + '</b></h4><img src="' + responce.img[j].url + '" style="float:left; width: 450px; margin-right: 20px;"><a class="close" href="#close"></a><p style="text-align: justify">' + responce.img[j].description + '</p></div>'
								)

						}						
					}

					$('#gallery').append(li);

					$('.pagination').html(
						$('.pagination').html() + '<li class="waves-effect"><a href="#!" onclick="gotoPage('+ i +')">' + (i+1) + '</a></li>'
						) 

				}


				$('#gallery li').addClass('page-hidden');
				$('#gallery li').eq(0).removeClass('page-hidden');

				$('.pagination li').addClass('waves-effect').removeClass('active');
				$('.pagination li').eq(0).addClass('active').removeClass('waves-effect');

				// for(i = 0; i < responce.img.length; i++) {

					// //photocards
					// $('#gallery').html(
					// 	$('#gallery').html() + '<div class="col s12 m4 l4"><div class="card gallery"><div class="card-image"><a href="#modal' + [i] + '">' + '<img src="' + responce.img[i].url + '">' + '</a></div></div></div>'
					// )

				// 	//modals
					// $('#gallery').html(
					// 	$('#gallery').html() + '<a href="#" class="overlay" id="modal' + [i] + '"></a>' + '<div class="popup" style="width:1000px;"><h4><b>' + responce.img[i].name + '</b></h4><img src="' + responce.img[i].url + '" style="float:left; width: 450px; margin-right: 20px;"><a class="close" href="#close"></a><p style="text-align: justify">' + responce.img[i].description + '</p></div>'
					// )

				// }										
			});
		});