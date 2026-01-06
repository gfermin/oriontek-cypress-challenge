# Test Plan — QA Coding Challenge (Cypress)

## 1. Objetivo
Validar flujos UI de:
- Edición y formateo de texto (TinyMCE)
- Lectura de textos desde frames anidados (Nested Frames)
- Navegación a una nueva ventana (Windows)

## 2. Alcance
### 2.1 TinyMCE
- Borrar contenido del editor
- Escribir texto **en negritas**
- Alinear el texto al **centro**
- Cambiar el color del texto a **rojo**
- Obtener el texto final y devolverlo como **string**
- Evitar inputs estáticos: utilizar **fecha y hora actual** como parte del texto

### 2.2 Nested Frames
- Acceder a la página de frames anidados
- Leer e imprimir el texto de los frames:
  - frame-top → frame-left
  - frame-top → frame-middle
  - frame-top → frame-right
  - frame-bottom

### 2.3 Windows
- Acceder a la página de ventanas
- Hacer click en **Click Here**
- Validar el texto del destino **New Window**
> Nota técnica: Cypress no maneja tabs como Selenium; se remueve el atributo `target` para abrir en la misma pestaña y validar el contenido.

## 3. Tipos de prueba
- **Smoke**: TinyMCE (happy path)
- **Regression**: TinyMCE + Nested Frames + Windows (completo)

## 4. Criterios de aceptación (globales)
- TinyMCE retorna un **string** con el contenido final e incluye **timestamp** (fecha/hora actual).
- Nested Frames imprime el texto de los iframes y ninguno debe estar vacío.
- Windows valida que el texto de la página destino sea **"New Window"**.

---

# 5. Plan de prueba detallado por casos

## 5.1 TinyMCE

### TC-TMCE-001 — Happy path (formato completo)
**Objetivo:** Validar edición, formato y extracción de texto final.  
**Precondiciones:** Navegador disponible, acceso a internet.  
**Datos de prueba:** Texto dinámico: `Texto automatizado - <YYYY-MM-DD HH:mm:ss>`  

**Pasos:**
1. Navegar a `/tinymce`
2. Borrar el contenido del editor
3. Activar **Bold** (negritas)
4. Escribir el texto dinámico
5. Desactivar **Bold** (opcional)
6. Alinear el texto al **centro**
7. Cambiar el color del texto a **rojo**
8. Obtener el texto final del editor y guardarlo en una variable/string

**Resultados esperados:**
- El editor muestra el texto ingresado.
- El texto está en negritas, centrado y con color rojo.
- El string devuelto contiene el prefijo esperado y el timestamp.

**Prioridad:** Alta  
**Tipo:** Smoke / Regression

### TC-TMCE-002 — Editor vacío (sin texto)
**Objetivo:** Validar robustez del editor al quedar vacío.  
**Pasos:**
1. Navegar a `/tinymce`
2. Borrar contenido del editor
3. No escribir nada
4. Obtener el texto final

**Resultados esperados:**
- El editor permanece vacío.
- La página no presenta errores/crash.
- El texto devuelto es vacío o whitespace (según comportamiento).

**Prioridad:** Media  
**Tipo:** Regression

---

## 5.2 Nested Frames

### TC-FR-001 — Lectura de textos en frames
**Objetivo:** Leer e imprimir los textos de los frames anidados.  
**Pasos:**
1. Navegar a `/nested_frames`
2. Obtener e imprimir el texto de:
   - `frame-top > frame-left`
   - `frame-top > frame-middle`
   - `frame-top > frame-right`
   - `frame-bottom`

**Resultados esperados:**
- Se imprime el texto de cada frame.
- Ningún texto está vacío.

**Prioridad:** Alta  
**Tipo:** Regression

---

## 5.3 Windows

### TC-WIN-001 — Navegación a “New Window”
**Objetivo:** Validar navegación y contenido de la nueva ventana.  
**Pasos:**
1. Navegar a `/windows`
2. Hacer click en **Click Here**
3. Validar el texto del destino

**Resultados esperados:**
- La página destino muestra el encabezado **"New Window"**.

**Prioridad:** Alta  
**Tipo:** Regression
