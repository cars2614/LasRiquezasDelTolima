(function(){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll(".rv").forEach(function(n){io.observe(n)});
var T={
"Naturaleza":"Cañón del Combeima: río, montañas y cascadas; o paisajes de alta montaña en Los Nevados.",
"Cultura":"Ibagué, ciudad musical: recorrido por su identidad folclórica y sus actividades culturales.",
"Gastronomía":"Degustación de tamal tolimense y lechona en restaurantes locales.",
"Aventura suave":"Caminata por los senderos de Murillo con paisajes de montaña y vida local."};
var S={};
function render(){
var i=S.i||[],d=S.d||"1 día",p=S.p||"Económico",r=document.getElementById("res");
r.innerHTML="<b>Tu propuesta: "+d+" · presupuesto "+p.toLowerCase()+"</b><br>"+(i.length?i.map(function(x){return "• "+T[x]}).join("<br>"):"Elige al menos un interés.")+"<br><span class=\"small\">Sugerencia orientativa. Verifica condiciones de acceso y prestadores autorizados.</span>";
}
document.querySelectorAll(".chips").forEach(function(g){
var k=g.dataset.k;
function read(){var on=[].filter.call(g.children,function(c){return c.getAttribute("aria-pressed")==="true"}).map(function(c){return c.textContent});S[k]=k==="i"?on:on[0]}
g.addEventListener("click",function(e){var c=e.target.closest(".chip");if(!c)return;
if(k==="i"){c.setAttribute("aria-pressed",c.getAttribute("aria-pressed")==="true"?"false":"true")}
else{[].forEach.call(g.children,function(x){x.setAttribute("aria-pressed","false")});c.setAttribute("aria-pressed","true")}
read();render()});
read();
});
render();
})();
