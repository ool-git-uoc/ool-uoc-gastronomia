# 🍽️ Proyecto Web de Gastronomía

## 📌 Descripción

Este proyecto consiste en el desarrollo de un sitio web sobre gastronomía mediterránea, en el que se presentan recetas, talleres culinarios y contenidos relacionados con la cultura gastronómica.

El objetivo principal es crear una web moderna, accesible y responsive, aplicando buenas prácticas de desarrollo front-end mediante HTML, CSS y JavaScript, utilizando herramientas de automatización como Parcel.

---

## 🎯 Objetivos del proyecto

* Desarrollar un sitio web estructurado y semántico
* Aplicar diseño responsive adaptable a distintos dispositivos
* Implementar componentes reutilizables (header y footer)
* Integrar herramientas modernas de desarrollo (Parcel)
* Garantizar compatibilidad con navegadores actuales y antiguos
* Publicar el sitio mediante despliegue continuo (Netlify)

---

## 🛠️ Tecnologías utilizadas

* HTML5 (estructura semántica)
* CSS3 (Flexbox, Grid, responsive design)
* JavaScript (validación de formularios e interactividad)
* Parcel (bundler y entorno de desarrollo)
* PostHTML Include (componentes reutilizables)
* AOS (Animate On Scroll para animaciones)
* Bootstrap Icons (iconografía)

---

## 📁 Estructura del proyecto

```text
src/
├── assets/
│   └── img/
├── categoria1/
│   └── quiensoy.html
├── categoria2/
│   └── recetario.html
├── categoria3/
│   ├── inscripcion.html
│   └── talleres.html
├── categoria4/
│   └── contacto.html
├── css/
│   └── styles.css
├── det1/
│   └── paella.html
├── det2/
│   └── risotto.html
├── js/
│   └── app.js
├── links/
│   └── links.html
├── partials/
│   ├── footer-home.html
│   ├── footer-inner.html
│   ├── header-home.html
│   └── header-inner.html
├── index.html
├── .gitignore
├── .posthtmlrc
├── package-lock.json
├── package.json
└── README.md
```

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```
git clone https://github.com/ool-git-uoc/ool-uoc-gastronomia
```

### 2. Instalar dependencias

```
npm install
```

### 3. Ejecutar en entorno de desarrollo

```
npm run start
```

El proyecto estará disponible en:

```
http://localhost:1234
```

---

## 🚀 Scripts disponibles

* `npm run start` → inicia el entorno de desarrollo con Parcel
* `npm run build` → genera la versión optimizada para producción
* `npm run clean` → limpia archivos generados (`dist` y `.parcel-cache`)

---

## 🌐 Publicación

El sitio ha sido publicado mediante Netlify, permitiendo despliegue continuo a partir del repositorio de GitHub.

Cada actualización del repositorio se refleja automáticamente en la web publicada.

---

## ♿ Accesibilidad

Se han aplicado criterios básicos de accesibilidad:

* Uso de etiquetas semánticas (`header`, `main`, `footer`)
* Textos alternativos en imágenes (`alt`)
* Navegación accesible mediante teclado
* Enlace de salto al contenido (`skip link`)
* Contraste adecuado de colores

---

## 📱 Responsive Design

La web se adapta a distintos tamaños de pantalla mediante media queries, Flexbox y Grid, permitiendo una correcta visualización en dispositivos móviles, tabletas y ordenadores.

---

## 🌍 Compatibilidad

Se ha configurado soporte para navegadores actuales y versiones anteriores mediante Browserslist.

---

## 🖼️ Recursos utilizados

Las imágenes han sido obtenidas de bancos de imágenes libres de derechos:

* Unsplash
* Pexels
* Pixabay

Los iconos provienen de Bootstrap Icons.

---

## 📄 Licencia

Este proyecto ha sido desarrollado con fines educativos.

Todos los recursos utilizados respetan las licencias de uso correspondientes.

---

## 👨‍💻 Autor

Proyecto desarrollado por Óscar Del Olmo López como parte de la asignatura Herramientas HTML y CSS.

---