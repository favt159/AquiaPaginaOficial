$(function() {
  $(document).on('click', 'ul li', function(){
    $(this).addClass('link-start').siblings().removeClass('link-start');
  })
});
