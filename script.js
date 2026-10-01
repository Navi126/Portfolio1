const themeBtn=document.getElementById('themeBtn');
const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
const saved=localStorage.getItem('theme');
if(saved){document.documentElement.dataset.theme=saved;themeBtn.textContent=saved==='light'?'☀':'☾';}
themeBtn.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;localStorage.setItem('theme',next);themeBtn.textContent=next==='light'?'☀':'☾';});
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
