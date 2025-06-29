# ☕ CoffeeDream - E-commerce de Café

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Frontend](https://img.shields.io/badge/Frontend-Vercel-000000?logo=vercel&logoColor=white)](https://coffedream.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render&logoColor=white)](https://backendcoffedream.onrender.com/)

Bienvenido a **CoffeeDream**, una plataforma de comercio electrónico especializada en la venta de granos de café de alta calidad. Este proyecto demuestra una aplicación full stack moderna con despliegue continuo.

## 🚀 Características Principales

- **Catálogo de Productos** - Explora nuestra selección de granos de café premium
- **Gestión de Categorías** - Navega fácilmente por diferentes tipos de café
- **Diseño Responsivo** - Experiencia óptima en dispositivos móviles y de escritorio
- **Arquitectura Moderna** - Frontend y backend desacoplados para mayor escalabilidad
- **Despliegue Automatizado** - CI/CD configurado para un desarrollo ágil

## 🛠️ Tecnologías

### Frontend
- **Framework**: [Next.js](https://nextjs.org/)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Despliegue**: [Vercel](https://vercel.com/)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Base de datos**: PostgreSQL (alojada en [Neon.tech](https://neon.tech/))
- **Despliegue**: [Render](https://render.com/)

## 📸 Capturas de Pantalla

| Vista Principal | Categorías | Productos |
|----------------|------------|-----------|
| ![Home](./img/home.png) | ![Categorías](./img/category.png) | ![Productos](./img/products.png) |

## 🚀 Empezando

### Requisitos Previos
- Node.js (v16 o superior)
- npm o yarn
- PostgreSQL

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/lllit/curso-ecommerce-coffe
   cd curso-ecommerce-coffe
   ```

2. **Configurar el Backend**
   ```bash
   cd backend
   cp .env.example .env
   # Configurar las variables de entorno en .env
   npm install
   npm run migrate
   ```

3. **Configurar el Frontend**
   ```bash
   cd ../frontend
   cp .env.local.example .env.local
   # Configurar las variables de entorno en .env.local
   npm install
   ```

### Ejecución Local

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend (en otra terminal):**
```bash
cd frontend
npm run dev
```

El frontend estará disponible en `http://localhost:3000` y la API en `http://localhost:5000`.

## 🌐 Despliegue

El proyecto está configurado para despliegue automático:
- Los cambios en `main` despliegan automáticamente el frontend en Vercel
- El backend se despliega automáticamente en Render con cada push

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, lee nuestras [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📧 Contacto

¿Preguntas o comentarios? Abre un issue o contáctanos en [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

Consideraciones
- El backend puede pausarse si no hay actividad debido a las políticas de Render.
- Las imágenes pueden no cargarse en el frontend debido a restricciones de los servicios gratuitos.

Contribuciones
Si deseas contribuir, por favor abre un issue o envía un pull request.


----------
