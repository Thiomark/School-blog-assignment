$('#button').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});


$(document).ready(function(){
    $(window).scroll(function(){
      var top = $(window).scrollTop();
      var height = $(document).height();
          height = height - $(window).height();
      var progress = top/height;
          progress = progress * 100;
          progress = progress + "%";
      $("#bar-progress").width(progress);
          progress = progress.substring(0, progress.length - 2);
          progress = Math.round(progress * 9007199254740991) / 9007199254740991;
          progress = progress + "%";
          if(top / height === 1){
              progress = "100%";
          }
          $("#percentage").html(progress);
    });
  });


