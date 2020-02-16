$(function(){
  function buildHTML(post){
    var html = `<div class="main__posts__post">
                  <div class="main__posts__post__text">
                    ${post.message}
                  </div>
                  <div class="main__posts__post__info">
                    <div class="main__posts__post__info__name">
                      ${post.user_name}
                    </div>
                    <div class="main__posts__post__info__date">
                      ${post.created_at}
                    </div>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main__posts').append(html);
      $('.main').animate({ scrollTop: $('.main')[0].scrollHeight});
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail (function(){
      alert('-- error -- javascript');
      $('.form__submit').prop('disabled', false);
    })
  })
});