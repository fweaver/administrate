//= require jquery
//= require jquery_ujs
//= require selectize
//= require moment
//= require datetime_picker
//= require_tree .

// filter button
$('.filter-row button').click(function(){
	$(this).toggleClass('filter-selected');
	if($(this).parent().data('singular-select')){
		$(this).siblings().removeClass('filter-selected');
	}
});

// create filter params
$('.filter-submit').click(function(){
	var search_keyword = $('.search__input').val(),
		filter_params = "?filter=";
	if(search_keyword.length){
		filter_params = '?search='+ search_keyword + '&filter=';
	}
	$('.filter-row').each(function(){
		var key = $(this).data('filter-key') + ':',
			val_arr = [];
		$('button.filter-selected', $(this)).each(function(){
			val_arr.push($(this).data('filter-val'));
		});
		if(!val_arr.length){
			filter_params += '';
		}else{
			filter_params += (key + val_arr.join(',') + '!');
		}
	});
	location.href = location.pathname + filter_params;
});

// close filter area
$('.filter-close').click(function(){
	$('.filter-options').addClass('fadeOutUpBig').removeClass('fadeInDown');
});
