

$('.btn').click(function(){
    var linkedDiv = $(this).data('linkedto')
    $('div.container').parent('div').hide();
    $(linkedDiv).show();
 });