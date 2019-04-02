const close = document.querySelector('.close');
const modal = document.getElementById('modal');


$.getJSON('https://randomuser.me/api/?nat=gb&results=12',
  {dataType: 'json'},
  function (data) {
  let userInfo = '<ul class="content">';
  $.each(data.results, function(i, user){
    userInfo += '<li><img src="' + user.picture.large + '" class="userImage">';
    userInfo += '<div class="userInfo"><h3 style="text-transform: capitalize;">' + user.name.first + ' ' + user.name.last + '</h3>';
    userInfo += '<a>' + user.email + '</a><p style="text-transform: capitalize;">' + user.location.city + '</p>';
    userInfo += '<div class="extraInfo" style="display:none"><p>' + user.phone + '</p>';
    userInfo += '<p style="text-transform: capitalize;">' + user.location.street + ' ' + user.location.state + ', ' + user.location.postcode + '</p>';
    userInfo += '<p> DOB: ' + user.dob.date.substring(8,10) + '/'+ user.dob.date.substring(5,7) +'/'+ user.dob.date.substring(0,4) +'</p>';
    userInfo += '</div></div></li>';
  });
userInfo += '</ul>';
$('#box').html(userInfo);


$('#box').on('click', 'LI', (function() {
 var userContent = $(this).clone();
 $('#modalContent').html(userContent);
 var extraInfo = document.getElementById("modalContent").getElementsByClassName("extraInfo")[0];
 extraInfo.style.display = 'block';
 var li = document.getElementById("modalContent").getElementsByTagName("li")[0];
  $(li).addClass('modalClass');
 modal.style.display = 'block';
}));

close.addEventListener('click', (e)=>{
      modal.style.display = "none";
    });

});
