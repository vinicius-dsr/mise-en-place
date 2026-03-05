# Prompt: Site Mise en Place — Marketing Gastronômico

## Visão Geral do Projeto

Construa um site de landing page completo e de alta fidelidade para a **Mise en Place**, uma agência de marketing digital premium especializada em restaurantes. O site deve ser **pixel-perfect** em relação ao design fornecido.

**Stack obrigatória:**
- React + Vite + TypeScript
- TailwindCSS (configurar tema customizado com as cores da marca)
- React Hook Form + Zod (validação do formulário de contato)
- Nodemailer (envio de e-mail via API Route/serverless function na Vercel)
- Deploy na Vercel

---

## Identidade Visual (SEGUIR À RISCA)

### Paleta de Cores
Configure no `tailwind.config.ts`:

```ts
colors: {
  brand: {
    green:   '#273617', // verde escuro — principal, CTA buttons, cards featured
    cream:   '#F2EBD1', // creme — fundo principal do site
    red:     '#C9371E', // vermelho escuro — títulos em destaque, itálico hero
    orange:  '#FF5F21', // laranja — cor complementar / acentos
    brown:   '#8B4513', // marrom/terracota — fundo da seção Cases (usar ~#7C4A1E ou similar terroso)
    dark:    '#1A1A1A', // quase-preto — footer background
    white:   '#FFFFFF',
  }
}
```

> Cor exata do fundo da seção Cases (Nossos Trabalhos): marrom-terracota quente, aproximadamente `#7C4A1E` ou `#8B5A2B`. Ver referência visual.

### Tipografia
Configure no `tailwind.config.ts` e importe via Google Fonts no `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

- **Títulos principais** → `Playfair Display`, bold/extrabold, letter-spacing negativo (`-0.04em`)
- **Corpo, labels, detalhes** → `Montserrat`, regular/medium/semibold, letter-spacing normal/amplo para labels uppercase

```ts
fontFamily: {
  serif: ['"Playfair Display"', 'Georgia', 'serif'],
  sans:  ['Montserrat', 'sans-serif'],
}
```

### Espaçamentos e Formas
- Bordas arredondadas generosas: `rounded-2xl` (16px) para cards, `rounded-full` para badges/pills
- Sombras sutis nos cards brancos: `shadow-sm` ou `shadow-md`
- Imagens com `rounded-2xl` e `object-cover`

---

## Arquivo de Conteúdo: `src/data/content.ts`

**TODA** a copy, links, imagens e dados variáveis devem vir deste arquivo. Os componentes jamais devem ter strings hardcoded de conteúdo.

```ts
// src/data/content.ts

export const siteConfig = {
  name: 'Mise en Place',
  tagline: 'Marketing Gastronômico de Elite',
  email: 'contato@miseenplace.com.br',
  phone: '(11) 99999-0000',
  whatsapp: '5511999990000',
  address: 'São Paulo, SP',
  socials: {
    instagram: 'https://instagram.com/miseenplace',
    linkedin:  'https://linkedin.com/company/miseenplace',
    behance:   'https://behance.net/miseenplace',
  },
}

export const nav = {
  links: [
    { label: 'Início',       href: '#inicio' },
    { label: 'Sobre',        href: '#sobre' },
    { label: 'Serviços',     href: '#servicos' },
    { label: 'Cases',        href: '#cases' },
    { label: 'Depoimentos',  href: '#depoimentos' },
  ],
  cta: { label: 'Fale Conosco', href: '#contato' },
}

export const hero = {
  badge: 'Marketing Gastronômico Premium',
  titleLine1: 'Transformamos',
  titleLine2: 'seu restaurante',
  titleLine3: 'em um',
  titleHighlight: 'destino gastronômico.', // italic + cor vermelha
  subtitle: 'Estratégias de marketing de elite especializadas no setor alimentício para atrair mais clientes e elevar sua marca ao patamar que ela merece.',
  ctaPrimary:   { label: 'Começar Agora',   href: '#contato' },
  ctaSecondary: { label: 'Ver Portfólio',   href: '#cases'   },
  heroImage: {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    alt: 'Prato gourmet apresentado com elegância',
  },
}

export const about = {
  images: [
    {
      src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80',
      alt: 'Chefs em cozinha profissional',
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80',
      alt: 'Garçom servindo em restaurante',
    },
  ],
  title: 'Autoridade e diferenciação no marketing gastronômico.',
  description: 'Na Mise en Place, não apenas criamos posts; nós entendemos o paladar do seu cliente e a complexidade da operação do seu negócio. Unimos a paixão pela hospitalidade com a precisão dos dados.',
  features: [
    {
      icon: 'utensils', // Lucide icon name
      title: 'Food Service DNA',
      description: 'Equipe que respira o mercado de alimentação 24/7.',
    },
    {
      icon: 'trending-up',
      title: 'ROI Gastronômico',
      description: 'Transformamos engajamento em reservas e faturamento real.',
    },
  ],
}

export const services = {
  sectionTitle: 'Nossos Serviços Especializados',
  sectionSubtitle: 'Soluções completas para posicionar seu restaurante no topo da mente do consumidor.',
  items: [
    {
      icon: 'camera',
      title: 'Gestão de Redes Sociais',
      description: 'Criação de conteúdo visualmente impactante e estratégico que desperta o desejo imediato no seu público.',
      bullets: [
        'Fotografia Profissional',
        'Reels de Alta Conversão',
        'Gestão de Comunidade',
      ],
      featured: false,
    },
    {
      icon: 'shield-check',
      title: 'Branding Gastronômico',
      description: 'Criação de marcas memoráveis, menus estratégicos e posicionamento premium no mercado.',
      bullets: [
        'Identidade Visual',
        'Engenharia de Cardápio',
        'Design de Experiência',
      ],
      featured: true, // card verde escuro, centro
    },
    {
      icon: 'target',
      title: 'Tráfego Pago (Ads)',
      description: 'Anúncios hiper-segmentados para atrair clientes na sua região exatamente na hora da fome.',
      bullets: [
        'Meta & Google Ads',
        'Geo-fencing Local',
        'Dashboards de Resultados',
      ],
      featured: false,
    },
  ],
}

export const cases = {
  sectionTitle: 'Nossos Trabalhos',
  sectionSubtitle: 'Resultados reais para restaurantes que decidiram elevar seu nível de marketing.',
  ctaLabel: 'Ver todos trabalhos',
  ctaHref: '#',
  items: [
    {
      image: {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        alt: 'Bistrô L'Artiste',
      },
      tag:         'Bistrô L'Artiste',
      result:      '+150% Reservas mensais',
      description: 'Rebrand completo e estratégia de Reels.',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
        alt: 'Sakura Premium Sushi',
      },
      tag:         'Sakura Premium Sushi',
      result:      'R$ 45k ROI em 30 dias',
      description: 'Campanhas segmentadas de tráfego pago.',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        alt: 'Terroir Vinhos & Carnes',
      },
      tag:         'Terroir Vinhos & Carnes',
      result:      'Autoridade Consolidada',
      description: 'Posicionamento premium e Influencer Marketing.',
    },
  ],
}

export const testimonials = {
  sectionTitle: 'O que dizem os Chefs e Proprietários',
  items: [
    {
      quote: '"A Mise en Place mudou completamente a percepção do nosso restaurante nas redes sociais. Não apenas as fotos são lindas, mas o retorno financeiro foi imediato."',
      author: 'Carlos Mendes',
      role:   'Dono do Restaurante Horizonte',
      avatar: 'https://i.pravatar.cc/48?img=12',
    },
    {
      quote: '"Eles entendem a correria da cozinha e as necessidades do salão. É a primeira agência que realmente entrega resultados que aparecem no meu caixa."',
      author: 'Chef Helena Souza',
      role:   'Chef Executiva do Braseiro & Cia',
      avatar: 'https://i.pravatar.cc/48?img=47',
    },
  ],
}

export const contact = {
  title:       'Pronto para lotar o seu salão?',
  description: 'Agende uma consultoria gratuita de 30 minutos. Vamos analisar o seu posicionamento atual e traçar um plano de ataque para o seu crescimento.',
  needsOptions: [
    'Aumentar reservas',
    'Gestão de redes sociais',
    'Branding & Identidade Visual',
    'Tráfego Pago',
    'Estratégia completa',
  ],
  submitLabel: 'Solicitar Consultoria Gratuita',
  successMessage: 'Mensagem enviada! Entraremos em contato em breve.',
}

export const footer = {
  copyright: '© 2024 Mise en Place - Marketing Gastronômico de Elite. Todos os direitos reservados.',
}
```

---

## Estrutura de Arquivos

```
mise-en-place/
├── public/
│   └── favicon.ico
├── src/
│   ├── api/
│   │   └── send-email.ts         # Serverless function Vercel (Nodemailer)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── CasesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       └── ServiceCard.tsx
│   ├── data/
│   │   └── content.ts            # ÚNICO arquivo com toda a copy/dados
│   ├── hooks/
│   │   └── useScrollSpy.ts
│   ├── lib/
│   │   └── validators.ts         # Zod schemas
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── api/
│   └── contact.ts                # Vercel Serverless Function
├── .env.example
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Detalhamento das Seções (Pixel-Perfect)

### 1. Navbar
- **Fundo:** `brand-cream` com leve `backdrop-blur` ao fazer scroll
- **Logo:** SVG/PNG da marca Mise en Place (horizontal, colorida) — canto esquerdo
- **Links de navegação:** Montserrat medium, `text-sm`, espaçados, cor `brand-green`. Hover: underline animado ou leve opacity change
- **CTA "Fale Conosco":** Botão sólido `bg-brand-green text-brand-cream`, `rounded-full`, `px-6 py-2`, Montserrat semibold
- **Comportamento:** Sticky no topo. Ao scroll, adicionar `shadow-sm`. Links com scroll suave para âncoras (`scroll-behavior: smooth`)
- **Mobile:** Hamburger menu com menu fullscreen ou drawer

### 2. Hero Section (`#inicio`)
- **Fundo:** `bg-brand-cream`
- **Layout:** Grid de 2 colunas (`grid-cols-2`), gap generoso, padding vertical grande
- **Coluna Esquerda:**
  - Badge pill: borda `border-brand-green/40`, texto Montserrat uppercase `text-xs tracking-widest`, `rounded-full px-4 py-1`
  - H1 (3 linhas): Playfair Display extrabold, `text-5xl lg:text-6xl`, cor `brand-green`
  - 4ª linha do H1: texto itálico em `brand-red`, mesmo tamanho — *"destino gastronômico."*
  - Subtítulo: Montserrat regular, `text-base text-brand-green/70`, `max-w-sm`, `mt-4`
  - Botões: `mt-8 flex gap-4`
    - Primário: `bg-brand-green text-brand-cream rounded-full px-8 py-3` hover: levemente mais escuro
    - Secundário: `border border-brand-green text-brand-green rounded-full px-8 py-3` hover: `bg-brand-green text-brand-cream`
- **Coluna Direita:**
  - Imagem com `rounded-2xl`, `aspect-[4/3]`, `object-cover`, `shadow-xl`
  - Leve rotação ou offset decorativo: `translate-y-4` para criar dinamismo

### 3. About Section (`#sobre`)
- **Fundo:** `bg-brand-cream`
- **Layout:** Grid de 2 colunas, imagens à esquerda, texto à direita
- **Coluna Esquerda:** 2 imagens lado a lado, `rounded-xl`, tamanhos diferentes (uma maior que a outra), sobreposição leve com `translate-x` ou `-translate-y`
- **Coluna Direita:**
  - H2: Playfair Display bold, `text-4xl`, `brand-green`
  - Parágrafo: Montserrat, `text-brand-green/70`
  - 2 Feature Cards: `bg-white`, `rounded-xl`, `p-5`, `shadow-sm`, `flex gap-3`
    - Ícone Lucide com `text-brand-orange` ou `text-brand-red`, tamanho `20px`
    - Título: Montserrat semibold, `brand-green`
    - Texto: Montserrat regular, `text-sm text-brand-green/60`

### 4. Services Section (`#servicos`)
- **Fundo:** `bg-brand-cream`
- **Cabeçalho:** Centralizado, H2 Playfair Display, subtítulo Montserrat `text-center max-w-lg mx-auto`
- **Cards:** Grid de 3 colunas, `gap-6`, `mt-12`
  - **Cards brancos (não-featured):** `bg-white rounded-2xl p-8 shadow-sm`
  - **Card featured (centro):** `bg-brand-green rounded-2xl p-8` — textos em `brand-cream`, ícone em container `bg-brand-cream/10`
  - Todos os cards:
    - Ícone: Lucide, dentro de `rounded-xl bg-brand-cream p-3` (nos brancos) ou `bg-white/10 p-3` (no verde)
    - Título: Playfair Display bold, `text-xl`
    - Descrição: Montserrat `text-sm`, `mt-3`
    - Lista de bullets: cada item com ícone `CheckCircle2` do Lucide, `text-xs`, espaçamento `gap-2`, `mt-4`

### 5. Cases Section (`#cases`)
- **Fundo:** `bg-[#7C4A1E]` (marrom-terracota) — cor diferente de tudo para criar contraste forte
- **Cabeçalho:** Flex row, título H2 Playfair Display à esquerda (texto branco/creme), link "Ver todos trabalhos →" à direita (creme/laranja)
- **Cards:** Grid de 3 colunas, `gap-4`
  - `rounded-2xl overflow-hidden relative aspect-[3/4]`
  - Imagem `object-cover w-full h-full`
  - Overlay gradiente escuro de baixo para cima: `bg-gradient-to-t from-black/80 via-black/20 to-transparent`
  - Conteúdo absoluto no bottom: `p-5`
    - Tag: Montserrat uppercase `text-xs tracking-wider text-white/70`
    - Resultado: Playfair Display bold `text-2xl text-white`
    - Descrição: Montserrat `text-sm text-white/70`

### 6. Testimonials Section (`#depoimentos`)
- **Fundo:** `bg-brand-cream`
- **H2:** Playfair Display, centralizado
- **Cards:** Grid de 2 colunas, `gap-6`, `mt-10`
  - `bg-white rounded-2xl p-8 shadow-sm`
  - Aspas decorativas `"` no canto superior direito: Playfair Display, `text-8xl text-brand-green/10 absolute top-2 right-6`
  - Texto do depoimento: Montserrat `text-brand-green/80 text-sm leading-relaxed`
  - Avatar: `rounded-full w-12 h-12 object-cover`
  - Nome: Montserrat semibold `brand-green`
  - Cargo: Montserrat `text-xs text-brand-red`

### 7. Contact Section (`#contato`)
- **Fundo:** `bg-brand-cream`
- **Container Principal:** Card único com `rounded-3xl overflow-hidden shadow-lg flex` — 2 metades
  - **Metade Esquerda (40%):** `bg-brand-green p-10 lg:p-14`
    - H2: Playfair Display bold `text-3xl text-brand-cream`
    - Parágrafo: Montserrat `text-brand-cream/70 text-sm mt-4`
    - Ícones de contato: lista com `Mail`, `Phone`, `MapPin` do Lucide, cor `brand-orange`, texto `brand-cream/80 text-sm`
  - **Metade Direita (60%):** `bg-white p-10 lg:p-14`
    - Campos do formulário (todos com label Montserrat semibold `text-sm text-brand-green` + input `border border-gray-200 rounded-xl px-4 py-3 w-full text-sm focus:border-brand-green focus:ring-1`):
      - Nome Completo (full width)
      - E-mail + WhatsApp (grid de 2 colunas)
      - Nome do Restaurante (full width)
      - Sua Necessidade Principal (select com as opções do `content.ts`)
    - Botão submit: `w-full bg-brand-green text-brand-cream rounded-xl py-4 font-semibold tracking-wide hover:bg-brand-green/90 transition`
    - Estados: loading (spinner), sucesso (mensagem verde), erro (mensagem vermelha)

### 8. Footer
- **Fundo:** `bg-brand-dark` (quase preto `#1A1A1A`)
- **Layout:** Flex `justify-between items-center py-8 px-container`
  - Logo da marca (versão creme/branca se possível, ou a colorida)
  - Links sociais: `Instagram LinkedIn Behance` — Montserrat `text-sm text-white/60 hover:text-white` com gap
- **Linha inferior:** Copyright centralizado, Montserrat `text-xs text-white/40`
- Separar logo+sociais de copyright com `border-t border-white/10`

---

## Formulário de Contato — Backend

### Schema Zod (`src/lib/validators.ts`)
```ts
import { z } from 'zod'

export const contactSchema = z.object({
  name:        z.string().min(2, 'Nome muito curto'),
  email:       z.string().email('E-mail inválido'),
  whatsapp:    z.string().min(10, 'Número inválido').max(15),
  restaurant:  z.string().min(2, 'Nome do restaurante obrigatório'),
  need:        z.string().min(1, 'Selecione uma opção'),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

### Serverless Function (`api/contact.ts`)
```ts
// Vercel Serverless Function
import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { contactSchema } from '../src/lib/validators'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const parsed = contactSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })

  const { name, email, whatsapp, restaurant, need } = parsed.data

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from:    `"Site Mise en Place" <${process.env.SMTP_USER}>`,
    to:      process.env.CONTACT_EMAIL,
    subject: `Nova consultoria: ${restaurant} — ${need}`,
    html: `
      <h2>Nova solicitação de consultoria</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Restaurante:</strong> ${restaurant}</p>
      <p><strong>Necessidade:</strong> ${need}</p>
    `,
  })

  return res.status(200).json({ success: true })
}
```

### Variáveis de Ambiente (`.env.example`)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu@email.com
SMTP_PASS=sua_senha_de_app
CONTACT_EMAIL=destino@miseenplace.com.br
```

### `vercel.json`
```json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" }
  ]
}
```

---

## Componente do Formulário (`ContactSection.tsx`)
```tsx
// Usar react-hook-form + zodResolver
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '@/lib/validators'
import { contact as c, siteConfig } from '@/data/content'

// No submit:
const onSubmit = async (data: ContactFormData) => {
  setLoading(true)
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (res.ok) setSuccess(true)
  else setError(true)
  setLoading(false)
}
```

---

## Animações e Micro-interações

- **Scroll reveal:** Usar `IntersectionObserver` ou `@headlessui` para fade-in + slide-up nas seções ao entrar na viewport. Classes: `opacity-0 translate-y-8` → `opacity-100 translate-y-0 transition-all duration-700`
- **Navbar:** Transição suave de `bg-transparent` para `bg-brand-cream shadow-sm` ao scrollar
- **Botões:** `transition-all duration-200` com hover states definidos
- **Cards de serviço:** hover: leve `scale-[1.02] shadow-md transition-transform`
- **Cards de cases:** hover no overlay: `from-black/90` para aprofundar

---

## Responsividade

- **Mobile first** com breakpoints `sm`, `md`, `lg`
- Navbar mobile: hamburger com drawer (state local)
- Hero: coluna única no mobile (imagem abaixo do texto)
- About: stack vertical no mobile
- Services: 1 coluna → 3 colunas no `lg`
- Cases: 1 coluna → 3 colunas no `md`
- Testimonials: 1 coluna → 2 colunas no `md`
- Contact card: stack vertical no mobile (ambas as metades empilhadas, full width)

---

## SEO e Meta Tags (`index.html`)
```html
<title>Mise en Place | Marketing Gastronômico Premium</title>
<meta name="description" content="Agência de marketing digital especializada em restaurantes. Transformamos seu restaurante em um destino gastronômico.">
<meta property="og:title" content="Mise en Place | Marketing Gastronômico">
<meta property="og:description" content="Estratégias de marketing de elite para o setor alimentício.">
<meta property="og:type" content="website">
```

---

## Checklist Final de Fidelidade

- [ ] Cores exatamente conforme a paleta do brand manual (hex codes)
- [ ] Playfair Display nos títulos, Montserrat no corpo
- [ ] Navbar sticky com CTA verde escuro arredondado
- [ ] Hero com badge pill, H1 com highlight itálico vermelho, dois CTAs
- [ ] About com fotos empilhadas e dois feature cards
- [ ] Services com 3 cards (centro verde featured)
- [ ] Cases em fundo terracota com cards de imagem + overlay gradiente
- [ ] Depoimentos com aspas decorativas gigantes
- [ ] Contact split card (verde escuro | branco) com formulário validado
- [ ] Footer escuro com logo e links sociais
- [ ] Formulário funcional via Nodemailer serverless na Vercel
- [ ] Todo conteúdo consumido de `src/data/content.ts`
- [ ] Responsivo mobile-first
- [ ] Deploy configurado para Vercel

---

## Observações Finais

1. **Logo:** Como não temos o arquivo SVG da logo, renderize o nome "mise en place" em Playfair Display bold com o "EN" em um badge pill verde escuro, fiel ao estilo do manual de marca. O componente `<Logo />` deve ser reutilizável.
2. **Imagens:** Use URLs do Unsplash presentes no `content.ts` como placeholder. O cliente substituirá pelas fotos reais.
3. **WhatsApp Float Button:** Adicionar um botão flutuante de WhatsApp (canto inferior direito) com o número do `siteConfig`, ícone do WhatsApp (SVG inline), `bg-green-500 hover:bg-green-600`, `rounded-full p-4 shadow-lg fixed bottom-6 right-6 z-50`.
4. **Scroll spy:** O link ativo na navbar deve ser destacado (cor mais escura ou underline) conforme a seção visível.
