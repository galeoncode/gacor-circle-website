// === MEMBERS (33 SLOT) ===
const memberContainer = document.getElementById("memberCards");

const members = [
  {
    name: "Joenier Kuera",
    nick: "Putra",
    ig: "@ujoenierimanuel",
    photo: "img/putra.jpeg"
  },
  {
    name: "Gian Evan Misire",
    nick: "Kagi",
    ig: "@ungke_ian",
    photo: "img/kagi.jpeg"

  },
  {
    name: "Aditya Mikhael Kuera Salindeho",
    nick: "adit",
    ig: "@aditkuera",
    photo: "img/adit.jpeg"
     
    },          
     {
    name: "Gabriel Bee",
    nick: "Gabi",
    ig: "@gabeetul",
    photo: "img/gabi.jpeg"
  },
   {
    name: "Jonathan Shane Noel Sengkandai",
    nick: "Noel",
    ig: "@noel_sengkandai",
    photo: "img/noel.jpeg"
  },
  {
    name: "Axl Joe Kapahes",
    nick: "Axl",
    ig: "@x.l_joe",
    photo: "img/axl.jpeg"
  },
   {
    name: "Radid Maulana No'e",
    nick: "Radid",
    ig: "@radidnoe198",
    photo: "img/radid.jpeg"
  },
   {
    name: "Brilian Romellow Christiano Ronaldo Mose",
    nick: "ian",
    ig: "@el_brimo",
    photo: "img/ian.jpeg"
  },
  {
    name: "Mac Valery Mangaha",
    nick: "mac",
    ig: "@mcvlry_",
    photo: "img/mac.jpeg"
  },
   {
    name: "Hizkiya Sinedu",
    nick: "Hizkiya",
    ig: "",
    photo: "img/Hizkiya.jpeg"
  },
   {
    name: "Alfian Mangerongkonda",
    nick: "Alfian",
    ig: "",
    photo: "img/Alvian.jpeg"
  },
  {
    name: "Radit Manahem ",
    nick: "Manahem",
    ig: "",
    photo: "img/manahem.jpeg"
  },
   {
    name: "Rangga Marchielo Fanoya Toreh Dardji",
    nick: "Angga",
    ig: "@aanggarchh",
    photo: "img/Rangga.jpeg"
  },
   {
    name: "Paniton Bawole",
    nick: "ico",
    ig: "",
    photo: "img/Paniton.jpeg"
  },
  {
    name: "Afgan Abdula",
    nick: "Afgan",
    ig: "",
    photo: "img/Afgan.jpeg"
  },
   {
    name: "Rafael Tahulending",
    nick: "Pael",
    ig: "",
    photo: "img/Rafael.jpeg"
  },
   {
    name: "Giorgio Kuera",
    nick: "dede Gio",
    ig: "@kueragiorgio",
    photo: "img/giorgio.jpeg"
  },
  {
    name: "Fino Kuada",
    nick: "Fino",
    ig: "",
    photo: "img/Fino.jpeg"
  },
   {
    name: "Alvin Tambajong",
    nick: "Alvin",
    ig: "",
    photo: "img/Alvin.jpeg"
  },
   {
    name: "Adrian Sidamo",
    nick: "Adrian",
    ig: "",
    photo: "img/drian.jpeg"
  },
  {
    name: "Glory Budiman",
    nick: "Johan",
    ig: "",
    photo: "img/budiman.jpeg"
  },
  
];
members.forEach(member => {
  memberContainer.innerHTML += `
    <div class="card">
      <img src="${member.photo}">
      <h3>${member.name}</h3>
      <span class="nickname">"${member.nick}"</span><br>
      <small>${member.ig}</small>
    </div>
  `;
});


// === MEMORY AUTO LOAD (MANUAL LIST) ===
const memories = [
  "img/memory.jpeg",
  "img/memory2.jpeg",
  "img/memory3.jpeg",
  "img/memory4.jpeg",
  "img/memory5.jpeg",
  "img/memory6.jpeg",
  "img/memory7.jpeg",
  "img/memory8.jpeg",
  "img/memory9.jpeg",
  "img/memory10.jpeg",
  "img/memory11.jpeg",
  "img/memory12.jpeg",
  "img/memory13.jpeg",
  "img/memory14.jpeg",
  "img/memory15.jpeg",
  "img/memory16.jpeg",
  "img/memory17.jpeg",
  "img/memory18.jpeg",
  "img/memory19.jpeg",
  "img/memory20.jpeg",
  "img/memory21.jpeg",
  "img/memory22.jpeg",
  "img/memory23.jpeg",
  "img/memory24.jpeg",
  "img/memory25.jpeg",
  "img/memory26.jpeg",
  "img/memory27.jpeg",
  "img/memory28.jpeg",
  "img/memory29.jpeg",
  "img/memory30.jpeg",
  "img/memory31.jpeg",
  "img/memory32.jpeg",
  "img/memory33.jpeg",
  "img/memory34.jpeg",
  "img/memory35.jpeg",
  "img/memory36.jpeg",
  "img/memory37.jpeg",
  "img/memory38.jpeg",

];

const gallery = document.getElementById("memoryGallery");
memories.forEach(img=>{
  gallery.innerHTML += `<img src="${img}">`;
});

// --- Mobile navigation toggle ---
const menuToggle = document.querySelector('.menu-toggle');
const navEl = document.querySelector('nav');
if(menuToggle){
  menuToggle.addEventListener('click', ()=>{
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navEl.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', ()=>{
      navEl.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
    });
  });
}

/* === Lightweight scroll reveal animations (IntersectionObserver) === */
(function(){
  // Respect users who prefer reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function initScrollReveal(){
    const selectors = [
      'section',
      '.hero-content',
      '.memorial-card',
      '.card',
      '.gallery img',
      '.logo',
      '.hero h1',
      'h2'
    ];
    const elems = Array.from(document.querySelectorAll(selectors.join(',')));
    if (!elems.length) return;

    elems.forEach((el, i) => {
      if (el.classList.contains('gc-anim-in-view')) return;
      el.classList.add('gc-anim-is-hidden');
      // subtle stagger to avoid bulky simultaneous animations
      el.style.transitionDelay = `${Math.min(300, (i % 8) * 60)}ms`;
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const t = entry.target;
            t.classList.add('gc-anim-in-view');
            t.classList.remove('gc-anim-is-hidden');
            t.style.transitionDelay = '';
            observer.unobserve(t);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      elems.forEach(el => io.observe(el));
    } else {
      // fallback: reveal immediately
      elems.forEach(el => {
        el.classList.add('gc-anim-in-view');
        el.classList.remove('gc-anim-is-hidden');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>requestAnimationFrame(initScrollReveal));
  } else {
    requestAnimationFrame(initScrollReveal);
  }
})();
