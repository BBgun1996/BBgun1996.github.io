var $option = $('.input-group.option');
var $detail = $('.detail')
$detail.find('h1').text($option.find('select').val());;

$option.find('select').change(function() {
    $detail.find('h1').text($(this).val());;
});
