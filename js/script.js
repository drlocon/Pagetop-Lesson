$(function(){
  // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される
  $('#back a').on('click',function(event){
    // #back内のaタグがクリックされたときの処理
    $('body, html').animate({
      // 変化対象のプロパティ名:変化値
      scrollTop:0
      // アニメーションの動作確認
    }, 800);
    event.preventDefault();
  });
});