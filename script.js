(function(){
var b=document.getElementById('theme'),r=document.documentElement;
b.addEventListener('click',function(){
var dark=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
r.setAttribute('data-theme',dark?'light':'dark');
});
})();
