(function(){
  var heads=document.querySelectorAll('.hero,.page-h');
  heads.forEach(function(h){
    var s='<svg class="waves" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">'+
      '<path d="M-50 220 C 200 150, 400 290, 650 210 S 1050 150, 1250 230"/>'+
      '<path d="M-50 250 C 250 200, 450 300, 700 240 S 1000 190, 1250 260"/>'+
      '<path d="M-50 190 C 180 130, 420 260, 680 190 S 1080 120, 1250 200"/></svg>';
    h.insertAdjacentHTML('afterbegin',s);
  });
  var els=document.querySelectorAll('main section, .cards > *, .aims li');
  els.forEach(function(e){e.classList.add('reveal');});
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
  els.forEach(function(e){io.observe(e);});
})();
