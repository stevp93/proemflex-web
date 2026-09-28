"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ── POLÍTICA DE PRIVACIDAD: Para actualizar el contenido legal, edita las secciones de este array. Cada sección tiene title, paragraphs (array de párrafos) y opcionalmente list (lista de elementos) ──
const sections = [
  {
    title: "1. Responsable del tratamiento",
    paragraphs: [
      "PROEMFLEX S.A.S., identificada con NIT registrado ante la Cámara de Comercio de Bogotá, con domicilio en Cra. 69c #24-20, Bogotá D.C., Colombia, correo electrónico proemflex.sas@gmail.com y teléfono +57 322 217 8185, es la entidad responsable del tratamiento de los datos personales recolectados a través de este sitio web.",
    ],
  },
  {
    title: "2. Finalidades del tratamiento",
    paragraphs: [
      "PROEMFLEX recolecta y trata datos personales con las siguientes finalidades:",
    ],
    list: [
      "Atender solicitudes de cotización, información comercial o soporte técnico.",
      "Establecer comunicación posterior con clientes y proveedores potenciales.",
      "Analizar el comportamiento de navegación del sitio para mejorar la experiencia de usuario.",
      "Cumplir obligaciones contractuales, comerciales, contables y tributarias.",
      "Enviar información sobre productos, servicios y novedades de la empresa, previa autorización.",
    ],
  },
  {
    title: "3. Datos recolectados",
    paragraphs: [
      "A través de los formularios del sitio podemos solicitar: nombre completo, empresa, correo electrónico corporativo, teléfono de contacto, sector de interés y detalles del proyecto. Adicionalmente, mediante cookies y herramientas de analítica (Google Analytics, Microsoft Clarity), se recolecta información técnica anónima sobre el uso del sitio: dirección IP truncada, tipo de dispositivo, navegador, sistema operativo, páginas visitadas y tiempo de permanencia.",
    ],
  },
  {
    title: "4. Uso de cookies y herramientas de analítica",
    paragraphs: [
      "Este sitio utiliza cookies propias y de terceros con fines de medición, mejora del servicio y análisis estadístico. Las cookies analíticas solo se activan tras la aceptación explícita del usuario a través del banner de consentimiento. El usuario puede cambiar o revocar su consentimiento en cualquier momento desde el enlace «Configurar cookies» del pie de página; al rechazarlas se eliminan las cookies de analítica del sitio.",
      "Las herramientas de terceros utilizadas son:",
    ],
    list: [
      "Google Analytics 4 (Google LLC): mide audiencia, comportamiento y conversiones. IP anonimizada.",
      "Microsoft Clarity (Microsoft Corporation): genera mapas de calor y grabaciones agregadas para mejorar la usabilidad.",
    ],
  },
  {
    title: "5. Derechos del titular",
    paragraphs: [
      "Conforme a la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:",
    ],
    list: [
      "Conocer, actualizar y rectificar sus datos personales.",
      "Solicitar prueba de la autorización otorgada.",
      "Ser informado sobre el uso dado a sus datos.",
      "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).",
      "Revocar la autorización y solicitar la supresión de los datos cuando proceda.",
      "Acceder de forma gratuita a sus datos que hayan sido objeto de tratamiento.",
    ],
  },
  {
    title: "6. Canales de atención",
    paragraphs: [
      "Para ejercer cualquiera de los derechos anteriores, el titular puede comunicarse a través de los siguientes medios:",
    ],
    list: [
      "Correo electrónico: proemflex.sas@gmail.com",
      "Teléfono / WhatsApp: +57 322 217 8185",
      "Dirección física: Cra. 69c #24-20, Bogotá D.C., Colombia",
    ],
  },
  {
    title: "7. Conservación de la información",
    paragraphs: [
      "Los datos personales se conservarán mientras se mantenga la relación comercial o contractual y durante los plazos exigidos por la normatividad aplicable. Posteriormente, serán eliminados de forma segura, salvo obligación legal de conservación.",
    ],
  },
  {
    title: "8. Seguridad de la información",
    paragraphs: [
      "PROEMFLEX adopta medidas técnicas y administrativas razonables para proteger la confidencialidad, integridad y disponibilidad de los datos personales tratados, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado.",
    ],
  },
  {
    title: "9. Modificaciones a la política",
    paragraphs: [
      "PROEMFLEX se reserva el derecho de modificar esta política en cualquier momento. Los cambios serán publicados en este mismo sitio web y entrarán en vigor desde el momento de su publicación. Recomendamos al titular revisar esta página periódicamente.",
    ],
  },
];

export default function PrivacidadContent() {
  const lastUpdated = "20 de mayo de 2026";

  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, #111820 0%, #0e1520 50%, #111820 100%)" }}
      aria-label="Política de tratamiento de datos personales"
    >
      <div className="container-pf max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 flex items-center justify-between gap-3 flex-wrap"
        >
          <p className="font-display text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
            Última actualización: <span className="text-white">{lastUpdated}</span>
          </p>
          <Link
            href="/contacto"
            className="font-display text-xs uppercase tracking-[0.16em] text-[#00F2FE] hover:underline underline-offset-4"
          >
            ¿Dudas? Contáctanos →
          </Link>
        </motion.div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {sections.map((section, i) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                {section.title}
              </h2>
              <div className="flex flex-col gap-3 text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list && (
                  <ul className="flex flex-col gap-2 pl-1 mt-1">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#00F2FE]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.06] text-center"
        >
          <p className="text-xs sm:text-sm text-[#6B7280]">
            Documento elaborado conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013 y las
            directrices de la Superintendencia de Industria y Comercio (SIC) de Colombia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
