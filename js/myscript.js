$(function () {
    // BLOGSの置換
    var select = "#heading-breadcrumbs h1";
    var h1Text = $(select).text();
    if (h1Text.match(/Blogs/)) {
        h1Text = h1Text.replace("Blogs", "更新ログ");
        $(select).text(h1Text);
        document.title = "更新ログ - HOAKARI";
    }
    // GET処理
    var param = location.search;
    if (param.indexOf('?dojin=') != -1) {
        if (param.indexOf('=ohmilkey') != -1) {
            alert('『オー！ミルキー』のお買い上げありがとうございました！\nごめんなさい、特典コンテンツはまだ準備中なんです‥');
        }
    }
});
