//移动版导航菜单
$('#left-menu').sidr({ name: 'menuL' });
$('#right-menu').sidr({ name: 'menuR', side: 'right' });
$("#menuL ul").metisMenu();

$('#close-left').click(function () {
    $.sidr('close', 'menuL');
    return false;
})
$('#close-right').click(function () {
    $.sidr('close', 'menuR');
    return false;
})

//首页
$('#index-beian').parallax();

//域名搜索提示
var searchResults = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: '/Domain/SearchTip?keyword=%QUERY',
});

searchResults.initialize();
$('#searchInput').typeahead(null, {
    source: searchResults.ttAdapter(),
    templates: {
        empty: '<p>键入点号可查看更多后缀</p>',
        suggestion: Handlebars.compile('{{#if domain}}<p>{{domain}} 首年{{registerPrice}}元，续费{{renewPrice}}元</p>{{else}}<p>无此域名后缀</p>{{/if}}')
    }
}).on('typeahead:opened', function () {
    $(this).siblings('.tt-dropdown-menu').css('min-width', $(this).outerWidth()+'px');
}).on('typeahead:selected', function (evt, item) {
    if (item.domain) {
        $(this).val(item.domain);
        $(this).parents('form').submit();
    }
});