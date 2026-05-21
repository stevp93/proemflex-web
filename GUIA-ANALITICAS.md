# Guía de configuración — Analítica y privacidad

Esta guía explica cómo activar Google Analytics 4, Microsoft Clarity y el banner de
consentimiento que ya están cableados en el código del sitio PROEMFLEX.

---

## 1. Resumen rápido

| Pieza | Archivo | Qué hacer |
|---|---|---|
| Google Analytics 4 | `src/components/analytics/GoogleAnalytics.tsx` | Reemplazar `G-XXXXXXXXXX` por el Measurement ID real |
| Microsoft Clarity | `src/components/analytics/MicrosoftClarity.tsx` | Reemplazar `XXXXXXXXXX` por el Project ID real |
| Banner de cookies | `src/components/analytics/CookieConsent.tsx` | No requiere configuración |
| Política de privacidad | `src/app/privacidad/page.tsx` y `src/components/pages/PrivacidadContent.tsx` | Revisar y ajustar datos de contacto si cambian |

Después de pegar los IDs, ejecutar:

```bash
npm run build
push-cambios.bat
```

---

## 2. Obtener los IDs de tracking

### 2.1 Google Analytics 4

1. Ingresar a https://analytics.google.com con la cuenta del cliente.
2. **Administrar → Crear → Propiedad**.
3. Nombre: `PROEMFLEX`, zona horaria: Colombia (UTC-5), moneda: COP.
4. Continuar hasta llegar a **Flujos de datos → Web**.
5. URL del sitio: `https://proemflex.com` (cuando el dominio esté comprado).
6. Copiar el **ID de medición** (formato `G-XXXXXXXXXX`).

### 2.2 Microsoft Clarity

1. Ingresar a https://clarity.microsoft.com con la cuenta del cliente.
2. **+ Add new project**.
3. Nombre: `PROEMFLEX`, URL: `https://proemflex.com`, categoría: `Manufacturing`.
4. Copiar el **Project ID** (cadena alfanumérica corta) que aparece en
   `Settings → Setup → Tracking code` o en la URL del dashboard.

---

## 3. Pegar los IDs en el código

Editar **dos archivos** y reemplazar la constante al inicio del archivo:

### `src/components/analytics/GoogleAnalytics.tsx`

```ts
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ← reemplazar
```

### `src/components/analytics/MicrosoftClarity.tsx`

```ts
export const CLARITY_PROJECT_ID = "XXXXXXXXXX"; // ← reemplazar
```

Mientras los placeholders contengan `XXXXXXXXXX`, los componentes **no inyectan los
scripts** — esto es a propósito para evitar tracking accidental durante desarrollo.

---

## 4. Cómo funciona el banner de consentimiento

El banner aparece la primera vez que un visitante abre el sitio y ofrece dos opciones:

- **Aceptar todas** → guarda `pf-cookie-consent = "accepted"` en `localStorage` y
  emite el evento `pf:consent-granted`. Los componentes GA4 y Clarity escuchan este
  evento e inyectan sus scripts inmediatamente.
- **Rechazar** → guarda `pf-cookie-consent = "rejected"`. Los scripts no se cargan.

El banner solo se muestra una vez por navegador. Si el usuario quiere revocar su
consentimiento, debe limpiar el almacenamiento del sitio desde su navegador.

El banner incluye link a `/privacidad`, que cumple con los requisitos de la **Ley
1581 de 2012 (Habeas Data — Colombia)** y el **Decreto 1377 de 2013**.

---

## 5. Verificación post-deploy

Después de que el dominio esté activo y el sitio publicado:

1. Abrir el sitio en una ventana de incógnito.
2. Aceptar las cookies en el banner.
3. **Google Analytics**: abrir GA4 → **Informes → Tiempo real**. Debe aparecer 1
   usuario activo en menos de 30 segundos.
4. **Microsoft Clarity**: el dashboard tarda hasta 2 horas en mostrar la primera
   sesión. Para verificar inmediatamente:
   - Abrir las DevTools del navegador (F12) → **Network** → buscar
     `clarity.ms/tag/<tu-id>` y `googletagmanager.com/gtag/js?id=G-...`.
   - Ambos deben aparecer con código `200 OK`.

---

## 6. Política de privacidad

El sitio incluye `/privacidad` como página independiente, accesible desde el footer.
Los datos que probablemente quieras revisar:

- **Cra. 69c #24-20, Bogotá D.C.** — dirección física
- **Proemflex.sas@gmail.com** — correo de contacto
- **+57 322 217 8185** — teléfono
- **NIT** — el documento dice "NIT registrado ante la Cámara de Comercio". Si el
  cliente quiere mostrar el NIT, edítalo en `PrivacidadContent.tsx` sección 1.

---

## 7. Lista de chequeo antes de publicar

- [ ] Pegado `G-XXXXXXXXXX` real en `GoogleAnalytics.tsx`
- [ ] Pegado `XXXXXXXXXX` real de Clarity en `MicrosoftClarity.tsx`
- [ ] Revisada y aprobada la política en `/privacidad`
- [ ] Ejecutado `npm run build` sin errores
- [ ] Verificado que `out/privacidad/index.html` existe tras el build
- [ ] Probado el banner en navegador de incógnito
- [ ] Comprobado en GA4 Tiempo Real que llega tráfico
- [ ] Comprobado en Clarity que el tag está activo
- [ ] Dominio `proemflex.com` apuntando al hosting
- [ ] HTTPS activo (necesario para que las cookies funcionen)

---

## 8. Para revocar o desactivar analítica

Si en algún momento se necesita desactivar el tracking sin tocar el código del
banner, basta con devolver el placeholder en los archivos:

```ts
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // analítica desactivada
```

Esto hace que el componente devuelva `null` y el script no se inyecte, sin afectar
el resto del sitio.
