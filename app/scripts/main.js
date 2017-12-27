// $('.thumbnail').click(function(){
//   $('.modal-body').empty();
//   var title = $(this).parent('a').attr("title");
//   $('.modal-title').html(title);
//   $($(this).parents('div').html()).appendTo('.modal-body');
//   $('#myModal').modal({show:true});
// });
//Auto close alert with fade
// $(".my-alert").fadeTo(2000, 500).slideUp(1500, function(){
//   $(".my-alert").alert('close');
// });

// TODO: query for the amount of pictures (or media elements) in the container-images and if there is none delete that div and alter accordingly the contigous divs

function showModal(title = null, body = null ){
  $('.modal-body').empty();
  $('.modal-title').html(title);
  // $($(this).parents('div').html()).appendTo('.modal-body');
  $('.modal-body').html(body);
  $('#myModal').modal({show:true});
  $("#myModal").fadeTo(2000, 500).slideUp(1500, function(){
    // $(".my-alert").alert('close');
    $("#myModal").modal('toggle');
  });

};

$( document ).ready(function() {
    console.log( "ready!" );
    checkForSize();
});
//Stores in the cookie the current size of the font when changed
function storeFontSize(curSize) {
  Cookies.set('curSize', curSize, { expires: 1 });
  return true;
}
//Checks the cookies for the current size and sets it in the document otherwise creates the cookie and sets its fonts size value
function checkForSize() {
  if(Cookies.get('sizeBig')=== "true") {
    $('#toggle-font').bootstrapToggle('on');
    $('.container-fixed').css('font-size', "2.0" + "rem");
  }
  else {
    $('#toggle-font').bootstrapToggle('off');
  }
}

//Changes the toggle button status and triggers the font change accordingly
$(function toggleSize() {
    $('#toggle-font').change(function() {
        var sizeBig = $(this).data('big');
        var sizeSmall = $(this).data('small');
        var fontSize = "";
         if ($(this).prop('checked')) {
            fontSize = sizeBig;
        }else {
            fontSize = sizeSmall;
        }
         $('.container-fixed').css('font-size', fontSize + "rem");//Must refactor to have a funtion to do this with params
         Cookies.set('sizeBig', $(this).prop('checked'));

    })
})


//Zoom images in gallery
// $(document).ready(function(){
  // $('a.photo').zoom({url: 'http://placeskull.com/800/1700/67a0ff/42'});
// });
$(document).ready(function(){
  $('.container-images img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});



/*
$('a.gallery').colorbox({rel:'gallery', transition:"none", width:"95%", height:"75%"});
$('a.gallery').zoom({
   callback: function(){
     $(this).colorbox({href: this.src});
     // console.log($(document).index($('.thumbnail')));
   }
 });


$('.gallery').each(function( index ) {
  index + ": " + $( this ).prepend(index+1 +" de " + $('.gallery').length);
});
*/
//Slick test
$(".single-item").slick({
	dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
});
