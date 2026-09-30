# Portfolio profesional — Astro

Implementación en Astro del diseño de Figma _Portfolio profesional_, con arquitectura hexagonal y estilos en SCSS.

## Comandos

| Comando                   | Acción                                     |
| :------------------------ | :----------------------------------------- |
| `npm install`             | Instala dependencias                       |
| `npm run dev`             | Servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Genera el sitio estático en `./dist/`      |
| `npm run preview`         | Sirve el build localmente                  |
| `npm run lint:styles`     | Valida SCSS y BEM con Stylelint            |
| `npm run lint:styles:fix` | Corrige automáticamente lo que se pueda    |
| `npm run format`          | Formatea todo el proyecto con Prettier     |
| `npm run format:check`    | Comprueba el formato sin modificar         |

Al hacer `git commit`, un hook de **Husky** ejecuta **lint-staged** sobre los archivos en stage: aplica Prettier (`.prettierrc`) y, en `.scss`/`.astro`, `stylelint --fix`. Los archivos corregidos se vuelven a añadir al commit automáticamente; si queda algún error que no se pueda corregir, el commit se cancela.

## Arquitectura

```
src/
├── domain/                 # Núcleo: sin dependencias externas
│   ├── entities/           # Modelos del portfolio (Profile, Position, Project…)
│   └── ports/              # Contratos (PortfolioRepository)
├── application/
│   └── use-cases/          # GetPortfolio: orquesta y aplica reglas (orden, destacados)
├── infrastructure/
│   ├── data/               # Contenido por idioma (portfolio.es.ts)
│   ├── repositories/       # Adaptadores que implementan los puertos
│   └── di/container.ts     # Composition root
├── presentation/
│   ├── layouts/            # BaseLayout
│   ├── components/
│   │   ├── ui/             # Átomos reutilizables (Button, Pill, Icon…)
│   │   ├── projects/       # Tarjetas de proyecto
│   │   └── sections/       # Secciones de la página
│   ├── styles/             # SCSS global (ver abajo)
│   └── utils/
└── pages/index.astro       # Adaptador de entrada: ejecuta el caso de uso y renderiza
```

Las dependencias apuntan siempre hacia dentro: `presentation → application → domain ← infrastructure`.

**Editar el contenido:** modifica `src/infrastructure/data/portfolio.es.ts`.
**Cambiar la fuente de datos** (CMS, API, Markdown): crea un nuevo adaptador que implemente `PortfolioRepository` y conéctalo en `di/container.ts`; la UI no cambia.

## Estilos (SCSS)

```
presentation/styles/
├── abstracts/   # _variables (tokens de Figma), _functions, _mixins — no generan CSS
├── base/        # _reset, _typography
├── layout/      # _section (.l-section, .l-container)
└── main.scss    # Punto de entrada global
```

- Módulos con `@use` / `@forward` (sin `@import`) y parciales con prefijo `_`.
- Tokens en mapas (`$colors`, `$font-families`, `$breakpoints`) accedidos vía `color()`, `font-family()`, `gutter()`.
- Paleta synthwave en `$palette` (`midnight`, `plum`, `salmon`, `magenta`, `steel`, `teal`); los colores semánticos (`background`, `surface`, `text`…) derivan de ella en `$colors`.
- Efectos retro reutilizables en `_mixins.scss`: `neon-text`, `neon-box`, `gradient-text`, `retro-heading`, `synthwave-tint`. Decoración en `ui/SynthGrid.astro` y `ui/RetroSun.astro`; scanlines CRT en `base/_crt.scss`.
- **BEM con namespace obligatorio:** `c-bloque__elemento--modificador` para componentes y `l-` para layout. Un elemento siempre vive dentro de su bloque, y un bloque nunca estila a otro: se usan _mixes_ (`class="l-container c-contact__content"`).
- **Orden dentro de cada regla:** variables → `@include` sin bloque → declaraciones → `@include` con bloque (media queries) → selectores anidados.
- **Sin valores mágicos:** colores, degradados, máscaras y capas (`z()`) salen de `_variables.scss`; es el único archivo donde se permiten hexadecimales.
- Cada componente `.astro` tiene su `<style lang="scss">` con alcance local e importa `@use 'abstracts' as *;` (resuelto por `loadPaths` en `astro.config.mjs`).
- Responsive desktop-first con `@include respond-below('tablet')`.
