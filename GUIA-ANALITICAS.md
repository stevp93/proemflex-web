# Guía de configuración — Analítica y privacidad

Esta guía explica cómo activar Google Analytics 4, Microsoft Clarity y el banner de
consentimiento que ya están cableados en el código del sitio PROEMFLEX.

---

## 1. Resumen rápido

| Pieza | Archivo | Qué hacer |
|---|---|---|
| Google Analytics 4 | `src/components/analytics/config.ts` | ✅ Configurado: `G-MF7EXV75NP` (etiqueta en el `<head>` vía `GoogleTag.tsx`) |
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

El ID de GA4 ya está configurado. Solo falta el de Clarity:

### `src/components/analytics/config.ts` (ya configurado)

```ts
export const GA_MEASUREMENT_ID = "G-MF7EXV75NP";
```

### `src/components/analytics/MicrosoftClarity.tsx`

```ts
export const CLARITY_PROJECT_ID = "XXXXXXXXXX"; // ← reemplazar
```

Mientras el placeholder de Clarity contenga `XXXXXXXXXX`, el componente **no inyecta el
script** — esto es a propósito para evitar tracking accidental durante desarrollo.

---

## 4. Cómo funciona el banner de consentimiento

El banner aparece la primera vez que un visitante abre el sitio y ofrece dos opciones:

La etiqueta de Google (`gtag.js`) está en el `<head>` de todas las páginas con
**Consent Mode v2**: por defecto `analytics_storage = denied`, así que GA4 no escribe
cookies hasta que el usuario acepta (solo envía pings anónimos sin cookies).

- **Aceptar todas** → guarda `pf-cookie-consent = "accepted"` en `localStorage`,
  emite `pf:consent-granted`, GA4 pasa a `analytics_storage = granted` y Clarity se carga.
- **Rechazar** → guarda `pf-cookie-consent = "rejected"`, GA4 queda en `denied`,
  Clarity no se carga y se borran las cookies `_ga*`, `_clck` y `_clsk`.

El banner se muestra automáticamente una vez por navegador. El usuario puede cambiar
o revocar su decisión en cualquier momento con el enlace **Configurar cookies** del footer.

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

- [x] ID de GA4 `G-MF7EXV75NP` configurado en `config.ts`
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

- **Clarity**: devolver el placeholder `"XXXXXXXXXX"` en `MicrosoftClarity.tsx`; el
  componente devuelve `null` y el script no se inyecta.
- **GA4**: quitar `<GoogleTag />` del `<head>` en `src/app/layout.tsx`.
