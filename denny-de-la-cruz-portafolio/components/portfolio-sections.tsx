import Image from 'next/image'
import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code2,
  GraduationCap,
  Lightbulb,
  Mail,
  Megaphone,
  MessageSquareText,
  Network,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const focus = [
  { icon: MessageSquareText, label: 'Comunicación Digital' },
  { icon: Target, label: 'Marketing & Estrategia' },
  { icon: Code2, label: 'Tecnología' },
  { icon: Sparkles, label: 'IA & Innovación' },
]

const experience = [
  { icon: Megaphone, title: 'Marketing y Comunicación Digital', text: 'Desarrollo de estrategias de comunicación, contenidos y posicionamiento digital.' },
  { icon: Users, title: 'Ventas B2B / B2C', text: 'Experiencia en procesos comerciales, prospección, negociación y relación con clientes.' },
  { icon: Cloud, title: 'Tecnología y Soluciones Digitales', text: 'Participación en iniciativas relacionadas con tecnología, nube, inteligencia artificial y transformación digital.' },
  { icon: Workflow, title: 'Gestión de proyectos', text: 'Coordinación y seguimiento de iniciativas digitales y comerciales.' },
]

const skills = [
  { icon: Megaphone, title: 'Marketing & Comunicación', items: ['Marketing Digital', 'Comunicación Digital', 'Estrategia de Contenidos', 'Social Media', 'SEO', 'Google Analytics'] },
  { icon: Code2, title: 'Tecnología', items: ['Desarrollo Web', 'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'PHP'] },
  { icon: Cloud, title: 'Cloud & Productividad', items: ['Microsoft 365', 'AWS', 'Herramientas de productividad digital'] },
  { icon: BriefcaseBusiness, title: 'Negocios', items: ['Ventas B2B', 'Ventas B2C', 'Estrategia Comercial', 'Gestión de clientes', 'Desarrollo de negocios'] },
  { icon: Bot, title: 'Innovación', items: ['Inteligencia Artificial', 'Automatización', 'Transformación Digital', 'Soluciones empresariales'] },
]

const projects = [
  { category: 'Marketing', title: 'Estrategias de Marketing Digital', text: 'Diseño y planificación de estrategias digitales orientadas a posicionamiento, alcance y generación de oportunidades.' },
  { category: 'Desarrollo', title: 'Proyectos Web', text: 'Desarrollo de proyectos web utilizando tecnologías modernas y herramientas digitales.' },
  { category: 'Innovación', title: 'Estrategias con Inteligencia Artificial', text: 'Exploración y aplicación de herramientas de inteligencia artificial para productividad, automatización y transformación empresarial.' },
  { category: 'Comunicación', title: 'Contenido y Marca Personal', text: 'Creación de estrategias de contenido y comunicación para fortalecer presencia digital.' },
]

const approach = [
  { icon: MessageSquareText, title: 'Comunicar', text: 'Convertir ideas complejas en mensajes claros y atractivos.' },
  { icon: Network, title: 'Conectar', text: 'Crear conexiones entre marcas, personas y oportunidades.' },
  { icon: Lightbulb, title: 'Innovar', text: 'Explorar nuevas tecnologías y herramientas digitales.' },
  { icon: Blocks, title: 'Transformar', text: 'Convertir estrategias en acciones y resultados.' },
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="font-sans text-3xl font-semibold tracking-tight text-balance md:text-5xl">{title}</h2>
      {description && <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="inicio" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-sm">
            <span className="size-2 rounded-full bg-primary" />
            Comunicación, estrategia y tecnología
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="max-w-4xl font-sans text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
              Denny Alexander de la Cruz Pérez
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-foreground/75 md:text-xl">
              Comunicación Digital · Marketing · Tecnología · Inteligencia Artificial
            </p>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              Creo conexiones entre comunicación, estrategia y tecnología para transformar ideas en soluciones digitales con impacto.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#sobre-mi">Conocer mi perfil <ArrowDownRight data-icon="inline-end" /></a></Button>
            <Button size="lg" variant="outline" asChild><a href="#contacto">Contactarme</a></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl shadow-primary/10">
            <Image src="/images/denny-de-la-cruz.jpg" alt="Retrato de Denny Alexander de la Cruz Pérez" width={800} height={1000} priority className="h-full w-full object-cover object-center" />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card p-4 shadow-lg sm:-left-8">
            <p className="font-mono text-xs text-muted-foreground">PERFIL</p>
            <p className="mt-1 text-sm font-semibold">Digital × Strategy</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-card py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <SectionHeading eyebrow="01 — Perfil" title="Sobre mí" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <p>Soy estudiante de Comunicación Digital con una visión orientada a la integración de la comunicación, el marketing y la tecnología. A lo largo de mi formación y experiencia profesional he desarrollado habilidades en estrategia digital, ventas, creación de contenido, gestión de proyectos y soluciones tecnológicas.</p>
            <p>Me interesa especialmente cómo las nuevas tecnologías y la inteligencia artificial pueden transformar la manera en que las empresas se comunican, toman decisiones y generan valor. Mi objetivo profesional es continuar desarrollándome en espacios donde pueda combinar creatividad, estrategia y tecnología.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {focus.map(({ icon: Icon, label }) => <div key={label} className="flex min-h-32 flex-col justify-between rounded-2xl border border-border bg-background p-4"><Icon className="size-5 text-primary" aria-hidden="true" /><p className="text-sm font-medium text-balance">{label}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="scroll-mt-20 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 lg:px-8">
        <SectionHeading eyebrow="02 — Trayectoria" title="Experiencia profesional" description="Una práctica multidisciplinaria que conecta comunicación, negocio y capacidades digitales." />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {experience.map(({ icon: Icon, title, text }) => <article key={title} className="flex min-h-56 flex-col justify-between gap-8 bg-card p-7 md:p-9"><Icon className="size-6 text-primary" aria-hidden="true" /><div className="flex flex-col gap-3"><h3 className="text-xl font-semibold">{title}</h3><p className="leading-relaxed text-muted-foreground">{text}</p></div></article>)}
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  return (
    <section id="habilidades" className="scroll-mt-20 bg-foreground py-24 text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-3"><p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">03 — Capacidades</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Habilidades</h2></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skills.map(({ icon: Icon, title, items }, index) => <article key={title} className={`flex flex-col gap-6 rounded-2xl border border-background/15 bg-background/5 p-6 ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}><div className="flex items-center gap-3"><Icon className="size-5 text-accent" aria-hidden="true" /><h3 className="font-semibold">{title}</h3></div><ul className="flex flex-wrap gap-2">{items.map((item) => <li key={item} className="rounded-full border border-background/15 px-3 py-1.5 text-sm text-background/70">{item}</li>)}</ul></article>)}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 lg:px-8">
        <SectionHeading eyebrow="04 — Selección" title="Proyectos destacados" description="Áreas de trabajo preparadas para documentar casos, procesos y resultados futuros." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => <article key={project.title} className="group flex min-h-72 flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 md:p-9"><div className="flex items-start justify-between gap-4"><span className="font-mono text-xs uppercase tracking-wider text-primary" style={project.title === 'Contenido y Marca Personal' || project.title === 'Innovación' ? { fontFamily: 'system-ui' } : undefined}>{project.category}</span><ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div><div className="flex flex-col gap-4"><h3 className="text-2xl font-semibold">{project.title}</h3><p className="leading-relaxed text-muted-foreground">{project.text}</p>{project.title === 'Proyectos Web' ? <div className="flex flex-wrap gap-3"><Button variant="link" className="w-fit px-0" asChild><a href="https://avtecdom.com/" target="_blank" rel="noopener noreferrer">AVTEC <ArrowUpRight data-icon="inline-end" /></a></Button><Button variant="link" className="w-fit px-0" asChild><a href="https://arsontd.github.io/Ecofrano-proyect/" target="_blank" rel="noopener noreferrer">Ecofrano <ArrowUpRight data-icon="inline-end" /></a></Button></div> : project.title === 'Contenido y Marca Personal' ? <Button variant="link" className="w-fit px-0" asChild><a href="https://www.instagram.com/breeze.dev/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight data-icon="inline-end" /></a></Button> : <Button variant="link" className="w-fit px-0" disabled title="Enlace pendiente de agregar">Ver proyecto <ArrowUpRight data-icon="inline-end" /></Button>}</div></article>)}
        </div>
      </div>
    </section>
  )
}

export function EducationSection() {
  return (
    <section id="formacion" className="scroll-mt-20 bg-card py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <SectionHeading eyebrow="05 — Aprendizaje" title="Formación" />
        <div className="flex flex-col gap-5">
          <article className="rounded-3xl border border-border bg-background p-7 md:p-9"><GraduationCap className="mb-10 size-7 text-primary" aria-hidden="true" /><h3 className="text-2xl font-semibold">Licenciatura en Comunicación Digital</h3><p className="mt-2 text-muted-foreground">Universidad del Caribe — UNICARIBE</p></article>
          <article className="rounded-3xl border border-border bg-background p-7 md:p-9"><h3 className="mb-6 text-lg font-semibold">Formación complementaria</h3><ul className="grid gap-3 sm:grid-cols-2">{['Marketing Digital', 'Community Management', 'AWS Cloud', 'Inteligencia Artificial', 'Desarrollo y tecnologías web'].map((item) => <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="size-1.5 rounded-full bg-primary" />{item}</li>)}</ul></article>
        </div>
      </div>
    </section>
  )
}

export function ApproachSection() {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 lg:px-8">
        <SectionHeading eyebrow="06 — Método" title="Mi enfoque profesional" />
        <div className="grid gap-4 md:grid-cols-4">{approach.map(({ icon: Icon, title, text }) => <article key={title} className="flex min-h-64 flex-col justify-between rounded-3xl border border-border bg-card p-6"><Icon className="size-6 text-primary" aria-hidden="true" /><div className="flex flex-col gap-3"><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-20 px-5 pb-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 rounded-3xl bg-primary p-8 text-primary-foreground md:p-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-4"><p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">Contacto</p><h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Hablemos</h2><p className="text-pretty leading-relaxed text-primary-foreground/75">¿Tienes un proyecto, una oportunidad profesional o una idea que quieras desarrollar? Estoy abierto a conectar y explorar nuevas oportunidades.</p></div>
        <div className="flex flex-wrap gap-3"><Button variant="secondary" asChild><a href="mailto:breeze.dev8@gmail.com"><Mail data-icon="inline-start" /> Email</a></Button><Button variant="secondary" asChild><a href="https://www.linkedin.com/in/denny-de-la-cruz/" target="_blank" rel="noopener noreferrer" aria-label="Visitar el perfil de Denny A. De La Cruz en LinkedIn">LinkedIn <ArrowUpRight data-icon="inline-end" /></a></Button><Button variant="secondary" asChild><a href="https://wa.me/18297642969" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp al +1 (829) 764-2969">WhatsApp</a></Button></div>
      </div>
    </section>
  )
}
