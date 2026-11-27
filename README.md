# Mi primera página web — plantilla

Plantilla para la demostración virtual "Tu página web en internet en 1 hora" (Ingeniería y Técnico en Desarrollo de Software, ITCA-FEPADE).

## Qué incluye

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura con Bootstrap 5.3: barra de navegación, portada, "Sobre mí", tarjetas de gustos, contadores y pie |
| `css/estilos.css` | Fondo degradado animado, avatar flotante, tarjetas que se elevan, aparición al hacer scroll, colores en variables |
| `js/app.js` | Texto que se escribe solo, modo oscuro, confeti y contadores animados |

Las zonas para editar están marcadas con `✏️ RETO 1` a `✏️ RETO 4` y `🏆 RETO EXTRA`.
Las librerías se cargan por CDN: Bootstrap 5.3.3, canvas-confetti 1.9.3 y la fuente Poppins de Google Fonts. No hay que instalar nada.

## Preparación del docente (una sola vez)

1. Subir estos archivos a un repositorio **público** de tu cuenta, por ejemplo `plantilla-pagina-web`.
2. En **Settings → General**, marcar la casilla **Template repository**.
3. Compartir con los estudiantes el enlace del repositorio. Verán el botón verde **Use this template**.

## Pasos del estudiante (resumen)

1. **Use this template → Create a new repository**.
2. Nombre del repositorio: `su-usuario.github.io` (exactamente su usuario de GitHub), **Public** → **Create repository**.
3. **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main` / `(root)` → **Save**.
4. Esperar de 1 a 3 minutos y abrir `https://su-usuario.github.io`.
5. Editar los archivos con el lápiz ✏️ de GitHub y pulsar **Commit changes**. Cada cambio se publica en 1 a 3 minutos.

## Los retos

| Reto | Tecnología | Qué cambian |
| --- | --- | --- |
| 1 | HTML | Título, nombre, emoji, "Sobre mí" y datos personales |
| 2 | Bootstrap | Tarjetas de gustos (emoji, texto, color del `badge` con `text-bg-danger`, `text-bg-info`…) |
| 3 | CSS | Colores en `:root`, velocidad del fondo y efecto al pasar el mouse |
| 4 | JavaScript | Frases que se escriben solas, colores del confeti y números de los contadores |
| Extra | Todo | Agregar una cuarta tarjeta y cambiar la clase del botón (`btn-light` → `btn-warning`) |

## Problemas frecuentes

| Síntoma | Causa / solución |
| --- | --- |
| Error 404 en `usuario.github.io` | Pages todavía no termina (esperar 2 o 3 minutos) o el repositorio no se llama exactamente `usuario.github.io` |
| El cambio no aparece | Esperar y recargar con Ctrl+F5; revisar la pestaña **Actions** (debe estar en verde) |
| La página se ve sin estilos | Se borró o se dañó la línea `<link ... bootstrap ...>` o `css/estilos.css` |
| Dejó de funcionar la animación del texto | Falta una coma o unas comillas en `FRASES` (`js/app.js`); revisar con F12 → Console |
