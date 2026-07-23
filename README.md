# Qiu Commerce x Qiu Agency - Propuesta Escuela de Golf en Lecheria

Landing page de una sola pagina que presenta el catalogo, los precios y las ofertas por volumen de cestas, recoleccion de pelotas y accesorios de practica de golf, preparada para la **Escuela de Golf en Lecheria** (Anzoategui, Venezuela).

El sitio esta pensado para compartirse por WhatsApp, correo o Instagram como una propuesta comercial navegable, sin necesidad de PDF ni backend.

## Demo en vivo

Una vez publicado en GitHub Pages (ver seccion de despliegue), el sitio queda disponible en:

```
https://jesusrojasquero94-ctrl.github.io/qiu-commerce-catalogo-golf-lecheria/
```

## Estructura del proyecto

```
.
├── index.html              Marcado semantico de la landing page
├── assets/
│   ├── css/
│   │   └── styles.css      Estilos (variables de marca, layout, componentes)
│   ├── js/
│   │   └── main.js         Animaciones de entrada con IntersectionObserver
│   └── img/
│       └── favicon.svg     Isotipo vectorial (pelota de golf + swing)
├── README.md
└── .gitignore
```

## Contenido de la pagina

- **Hero** con la propuesta de valor y boton directo a WhatsApp ("Comprar por WhatsApp").
- **El vacio / La propuesta**: el hallazgo de la investigacion de mercado (sin competencia local en Venezuela para esta categoria).
- **Catalogo por categoria**: cestas, recogedores, dispensadores, tapetes, redes/jaulas y lavadoras, cada uno con precio sugerido, costo estimado y fuente de la investigacion.
- **Ofertas por volumen**: tres niveles de descuento segun cantidad.
- **Plan de lanzamiento por fases**: lanzamiento, expansion y escalamiento.
- **Bloque de contacto** con los datos de Qiu Agency y un boton flotante de WhatsApp visible en todo momento.

## Como publicarlo en GitHub Pages

1. Ve a **Settings -> Pages** en este repositorio.
2. En "Build and deployment", selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`. Guarda.
4. GitHub genera un link publico en 1-2 minutos con el formato mostrado arriba.
5. Comparte ese link con la academia.

## Editar el numero de WhatsApp o el mensaje precargado

Busca `wa.me/584248831167` dentro de `index.html` (aparece varias veces) y reemplazalo por el numero que quieras usar. El texto despues de `?text=` es el mensaje precargado, codificado en formato URL (los espacios son `%20`).

## Actualizar precios o productos

Todo el contenido vive directamente en `index.html` (no hay base de datos ni paso de build). Ubica el texto del producto o precio que quieras cambiar, editalo, y vuelve a subir el archivo al repositorio.

## Desarrollo local

Al no depender de ningun build step, basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estatico:

```bash
npx serve .
```

## Creditos

Propuesta preparada por **Qiu Agency** para **Qiu Commerce**, Julio 2026.
Contacto: qiuagency2023@gmail.com · [@qiu.agency](https://instagram.com/qiu.agency)
