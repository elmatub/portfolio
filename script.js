
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const blogPosts = [
  { title: "Mes débuts en freelance", content: "Voici comment j’ai démarré ma carrière freelance…" },
  { title: "Les bases du réseau", content: "Exploration des protocoles OSPF, BGP, VLANs…" }
];

const testimonials = [
  { name: "Client A", feedback: "Professionnel, rapide et très compétent !" },
  { name: "Client B", feedback: "Excellente communication et qualité de travail." }
];

const blogContainer = document.querySelector(".blog-posts");
blogPosts.forEach(post => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
  blogContainer.appendChild(div);
});

const testimonialContainer = document.querySelector(".testimonials-list");
testimonials.forEach(t => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${t.name}</strong><p>${t.feedback}</p>`;
  testimonialContainer.appendChild(div);
});
// Tapeur de texte
const typewriter = document.getElementById("typewriter");
const text = "Bienvenue sur le portfolio de El Hadji Mamadou Ndiaye";
let index = 0;

function typeText() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}
typeText();

// Scroll vers le contenu
function scrollToMain() {
  document.getElementById("main-content").scrollIntoView({
    behavior: "smooth"
  });
}

// Toggle mode clair/sombre (exemple basique)
document.getElementById('toggle-mode')?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Formulaire de contact
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  alert(`Merci ${name}, votre message a été envoyé !`);
  this.reset();
});
