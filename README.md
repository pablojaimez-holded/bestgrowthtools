# SaaS Review — Directorio de Software SaaS en Español

## Cómo empezar

### 1. Instalar dependencias
```bash
cd saas-directory
npm install
```

### 2. Desarrollo local
```bash
npm run dev
```
Abre http://localhost:4321 en tu navegador.

### 3. Build para producción
```bash
npm run build
```
Los archivos se generan en `dist/`.

### 4. Preview del build
```bash
npm run preview
```

---

## Deploy en Cloudflare Pages

1. Sube el proyecto a GitHub (con GitHub Desktop)
2. En Cloudflare Pages → Create a project → Connect to Git
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Conecta tu dominio en Dinahosting apuntando los DNS a Cloudflare

---

## Cómo gestionar contenido (sin tocar código)

### Crear una nueva review
1. Copia un archivo `.md` de `src/content/reviews/` (ej: `holded.md`)
2. Renómbralo con el slug del producto (ej: `sage.md`)
3. Edita el **frontmatter** (datos entre `---`) con la info del producto
4. Escribe la review debajo del segundo `---`
5. Haz commit y push → Cloudflare lo despliega automáticamente

### Crear un nuevo Top 5
1. Copia un archivo de `src/content/top5/`
2. Cambia el frontmatter: título, slug, categoría y lista de productos
3. Escribe el contenido del ranking

### Crear una nueva comparativa (VS)
1. Copia un archivo de `src/content/vs/`
2. Cambia productA, productB y el slug
3. Escribe la comparativa

---

## Estructura del proyecto

```
saas-directory/
├── src/
│   ├── components/     ← Componentes reutilizables (no tocar)
│   ├── content/        ← TU CONTENIDO (aquí trabajas)
│   │   ├── reviews/    ← Reviews de productos (.md)
│   │   ├── top5/       ← Rankings top 5 (.md)
│   │   └── vs/         ← Comparativas (.md)
│   ├── data/           ← Categorías y datos estáticos
│   ├── layouts/        ← Layouts por tipo de página
│   ├── pages/          ← Páginas dinámicas (no tocar)
│   └── styles/         ← Estilos globales
├── public/             ← Archivos estáticos (logos, favicon)
└── package.json
```

**Regla de oro:** Solo necesitas editar archivos `.md` dentro de `src/content/` para gestionar todo el contenido.
