$(document).ready(function(){

  var $body = $('body');
  var $list = $('#a-list');
  var $title = $('#title-bar');
  var $links = $('a');
  var $activeSection = $('#active-section');
  var activeId, activePartial;

  $links.on('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    activeId = $(event.currentTarget).attr('href').split('/')[1];
    if (activeId === 'Matt_Gukowsky_Resume_Master.pdf') {
      window.open('http://mgukowsky.com/Matt_Gukowsky_Resume_Master.pdf');
      return;
    }
    activePartial = $('#' + activeId).html();
    $activeSection.css({'opacity': '0'})
    switch (activeId) {
      case ('about'):
        $body.css({'background-color': '#0A0'});
        $list.css({'background-color': '#00A'});
        $title.css({'background-color': '#FF6600'});
        break;
      case ('projects'):
        $body.css({'background-color': '#00A'});
        $list.css({'background-color': '#FF6600'});
        $title.css({'background-color': '#0A0'});
        break;
      case ('contact'):
        $body.css({'background-color': '#FF6600'});
        $list.css({'background-color': '#0A0'});
        $title.css({'background-color': '#00A'});
        break;
      default:
        $body.css({'background-color': '#000'});
        break;
    }
  });

  $activeSection.on('transitionend', function(){
    $activeSection.html(activePartial);
    $activeSection.css({'opacity': '1'})
  });

  $('#init').trigger('click');

});
