(function(){
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// flowing gold waves
var c=document.getElementById('waves');if(c){var x=c.getContext('2d'),W,H,my=.5,t=0;
function rs(){W=c.width=c.offsetWidth*devicePixelRatio;H=c.height=c.offsetHeight*devicePixelRatio}rs();addEventListener('resize',rs);
addEventListener('mousemove',function(e){my=e.clientY/innerHeight});
function draw(){x.clearRect(0,0,W,H);var n=22;for(var i=0;i<n;i++){var p=i/n;x.beginPath();
x.strokeStyle=i%3?'rgba(255,200,69,'+(0.10+0.25*p)+')':'rgba(143,179,218,0.18)';x.lineWidth=devicePixelRatio*(i%5?0.8:1.4);
for(var k=0;k<=60;k++){var u=k/60,X=u*W,
Y=H*(0.55+0.28*p)+Math.sin(u*5+t*.6+i*.35)*H*.05*(1+p)+Math.sin(u*2.2-t*.35+i*.2)*H*.06+(my-.5)*H*.12*Math.sin(u*3.14)*(1-p*.5);
k?x.lineTo(X,Y):x.moveTo(X,Y)}x.stroke()}t+=0.012;if(!rm)requestAnimationFrame(draw)}draw()}
// count up
var nums=document.querySelectorAll('[data-n]');
function count(el){var n=+el.dataset.n,s=null;function f(ts){s=s||ts;var p=Math.min((ts-s)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+(n>=250&&p===1?'':'');if(p<1)requestAnimationFrame(f)}rm?el.textContent=n:requestAnimationFrame(f)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){if(e.target.dataset.n)count(e.target);else e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.25});
nums.forEach(function(n){io.observe(n)});document.querySelectorAll('.band').forEach(function(b){io.observe(b)});
// parallax
var bgs=document.querySelectorAll('.bandbg');if(!rm)addEventListener('scroll',function(){bgs.forEach(function(b){var r=b.parentNode.getBoundingClientRect();b.style.transform='translateY('+(r.top*-0.12)+'px)'})},{passive:true});
})();
