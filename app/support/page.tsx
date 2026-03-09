import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Soporte - RuAI",
  description: "Obtén ayuda con RuAI. Contacta a nuestro equipo de soporte para asistencia con tu cuenta, facturación o problemas técnicos.",
};

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-color.png"
              alt="RuAI"
              width={100}
              height={30}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary hover:text-white"
          >
            &larr; Volver al Inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-extrabold text-white">Soporte</h1>
        <p className="mb-12 text-lg text-text-secondary">
          Estamos aquí para ayudarte. Elige la mejor forma de contactarnos.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email Support */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <svg
                className="h-7 w-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Soporte por Email</h3>
            <p className="mb-4 text-text-secondary">
              Envíanos un correo y te responderemos en menos de 24 horas.
            </p>
            <a
              href="mailto:support@ruai.io"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
            >
              support@ruai.io
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <svg
                className="h-7 w-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">
              Preguntas Frecuentes
            </h3>
            <p className="text-text-secondary">
              Encuentra respuestas a las preguntas más comunes a continuación.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-white">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                ¿Cómo cancelo mi suscripción?
              </h3>
              <p className="text-text-secondary">
                Puedes cancelar tu suscripción en cualquier momento desde los ajustes
                de tu cuenta en la App Store. Ve a Configuración &gt; Apple ID &gt;
                Suscripciones &gt; RuAI y toca &quot;Cancelar Suscripción.&quot; Tu acceso
                continuará hasta el final del período de facturación actual.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                ¿Mis datos financieros están seguros?
              </h3>
              <p className="text-text-secondary">
                Sí. Tus datos están encriptados en tránsito y en reposo usando
                seguridad de nivel empresarial proporcionada por Supabase.
                Implementamos políticas de Row Level Security para asegurar que tus
                datos estén aislados y solo sean accesibles por ti. Nunca vendemos
                tus datos financieros personales.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                ¿Puedo confiar en los consejos financieros de la IA?
              </h3>
              <p className="text-text-secondary">
                El coach de IA de RuAI proporciona recomendaciones personalizadas
                basadas en tus datos financieros reales. Sin embargo, esto debe usarse
                como una herramienta de orientación y no como un reemplazo del consejo
                financiero profesional. Siempre consulta con un asesor financiero
                calificado para decisiones financieras importantes.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                ¿Cómo elimino mi cuenta?
              </h3>
              <p className="text-text-secondary">
                Para eliminar tu cuenta y todos los datos asociados, envíanos un
                correo a{" "}
                <a
                  href="mailto:support@ruai.io"
                  className="font-medium text-primary hover:text-primary-dark"
                >
                  support@ruai.io
                </a>{" "}
                con el asunto &quot;Solicitud de Eliminación de Cuenta.&quot; Procesaremos
                tu solicitud en un máximo de 30 días.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                ¿Qué pasa durante la prueba gratuita?
              </h3>
              <p className="text-text-secondary">
                Durante tu prueba gratuita, tienes acceso completo a todas las
                funciones de RuAI. No se te cobrará hasta que termine el período de
                prueba. Puedes cancelar en cualquier momento antes de que termine la
                prueba para evitar cargos.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
