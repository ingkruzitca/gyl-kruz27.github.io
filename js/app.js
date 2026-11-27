// =========================================================
//  JAVASCRIPT: aquí le damos vida a la página
// =========================================================

// ✏️ RETO 4: escribe tus propias frases (entre comillas y separadas por comas)
const FRASES = [
  "Me gusta crear cosas nuevas 💡",
  "Estoy aprendiendo a programar 💻",
  "Algún día crearé una app famosa 🚀",
];

// ---------- 1. Texto que se escribe solo ----------
const destino = document.getElementById("escribiendo");
let frase = 0;   // qué frase estamos escribiendo
let letra = 0;   // cuántas letras llevamos
let borrando = false;

function escribir() {
  const actual = FRASES[frase];
  // Array.from separa bien las letras y los emojis
  const letras = Array.from(actual);
  letra += borrando ? -1 : 1;
  destino.textContent = letras.slice(0, letra).join("");

  let espera = borrando ? 40 : 90;              // velocidad de escritura (ms)
  if (!borrando && letra === letras.length) {   // terminó la frase: pausa y borra
    borrando = true;
    espera = 1800;
  } else if (borrando && letra === 0) {         // terminó de borrar: siguiente frase
    borrando = false;
    frase = (frase + 1) % FRASES.length;
    espera = 400;
  }
  setTimeout(escribir, espera);
}
escribir();

// ---------- 2. Modo oscuro ----------
const botonTema = document.getElementById("btn-tema");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-bs-theme", tema); // Bootstrap 5.3 hace el resto
  botonTema.textContent = tema === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro";
  try { localStorage.setItem("tema", tema); } catch (e) { /* sin almacenamiento */ }
}

botonTema.addEventListener("click", () => {
  const actual = document.documentElement.getAttribute("data-bs-theme");
  aplicarTema(actual === "dark" ? "light" : "dark");
});

try {
  const guardado = localStorage.getItem("tema");
  if (guardado) aplicarTema(guardado);
} catch (e) { /* sin almacenamiento */ }

// ---------- 3. Botón "Sorpréndeme" con confeti ----------
// ✏️ RETO 4: cambia los colores del confeti
const COLORES_CONFETI = ["#6a11cb", "#2575fc", "#ff6a88", "#ffd166"];

document.getElementById("btn-sorpresa").addEventListener("click", () => {
  if (typeof confetti !== "function") return; // por si la librería no cargó
  confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, colors: COLORES_CONFETI });
});

// ---------- 4. Elementos que aparecen al hacer scroll ----------
// ---------- 5. Contadores que suben solos ----------
function animarContador(el) {
  const meta = Number(el.dataset.meta) || 0;
  const duracion = 1500; // milisegundos
  const inicio = performance.now();
  function paso(ahora) {
    const avance = Math.min((ahora - inicio) / duracion, 1);
    el.textContent = Math.round(meta * avance);
    if (avance < 1) requestAnimationFrame(paso);
  }
  requestAnimationFrame(paso);
}

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;
    entrada.target.classList.add("visible");
    const contador = entrada.target.querySelector(".contador");
    if (contador) animarContador(contador);
    observador.unobserve(entrada.target); // solo una vez
  });
}, { threshold: 0.2 });

document.querySelectorAll(".aparecer").forEach((el) => observador.observe(el));

// ---------- Mensaje para curiosos que abren la consola (F12) ----------
console.log("%c¡Hola, desarrollador(a)! 👋 Esta página la hice yo.", "font-size:16px;color:#2575fc");
