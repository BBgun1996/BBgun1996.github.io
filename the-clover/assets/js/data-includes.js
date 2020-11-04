$(function(){
    const includes = $('[data-include]');
    jQuery.each(includes, function(){
        const file = '_includes/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});