const links = [
  ['Inicio', '#inicio'],
  ['Sobre mí', '#sobre-mi'],
  ['Experiencia', '#experiencia'],
  ['Habilidades', '#habilidades'],
  ['Proyectos', '#proyectos'],
  ['Contacto', '#contacto'],
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-2"><p className="text-lg font-semibold">Denny Alexander de la Cruz Pérez</p><p className="text-sm text-muted-foreground">Comunicación Digital · Marketing · Tecnología · IA</p></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Navegación del pie de página">{links.map(([label, href]) => <a key={href} href={href} className="text-sm text-muted-foreground hover:text-foreground">{label}</a>)}</nav>
        </div>
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Denny Alexander de la Cruz Pérez. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
