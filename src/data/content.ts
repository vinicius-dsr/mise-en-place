export const siteConfig = {
  name: 'Mise en Place',
  tagline: 'Marketing Gastronômico de Elite',
  email: 'mkt.miseenplace@gmail.com',
  phone: '(11) 99999-0000',
  whatsapp: '5511999990000',
  address: 'São Paulo, SP',
  socials: {
    instagram: 'https://instagram.com/miseenplace',
    linkedin: 'https://linkedin.com/company/miseenplace',
    behance: 'https://behance.net/miseenplace',
  },
}

export const nav = {
  links: [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'Cases', href: '#cases', id: 'cases' },
    { label: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
  ],
  cta: { label: 'Fale Conosco', href: '#contato', id: 'contato' },
}

export const hero = {
  badge: 'Marketing Gastronômico Premium',
  title: 'Transformamos seu restaurante em um destino gastronômico.',
  highlightWord: 'destino gastronômico.',
  subtitle:
    'Estratégias de marketing de elite especializadas no setor alimentício para atrair mais clientes e elevar sua marca ao patamar que ela merece.',
  ctaPrimary: { label: 'Começar Agora', href: '#contato' },
  ctaSecondary: { label: 'Ver Portfólio', href: '#cases' },
  heroImage: {
    src: '/hero.png',
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
  description:
    'Na Mise en Place, não apenas criamos posts; nós entendemos o paladar do seu cliente e a complexidade da operação do seu negócio. Unimos a paixão pela hospitalidade com a precisão dos dados.',
  features: [
    {
      icon: 'utensils',
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
  sectionSubtitle:
    'Soluções completas para posicionar seu restaurante no topo da mente do consumidor.',
  items: [
    {
      icon: 'camera',
      title: 'Gestão de Redes Sociais',
      description:
        'Criação de conteúdo visualmente impactante e estratégico que desperta o desejo imediato no seu público.',
      bullets: ['Fotografia Profissional', 'Reels de Alta Conversão', 'Gestão de Comunidade'],
      featured: false,
    },
    {
      icon: 'shield-check',
      title: 'Branding Gastronômico',
      description:
        'Criação de marcas memoráveis, menus estratégicos e posicionamento premium no mercado.',
      bullets: ['Identidade Visual', 'Engenharia de Cardápio', 'Design de Experiência'],
      featured: true,
    },
    {
      icon: 'target',
      title: 'Tráfego Pago (Ads)',
      description:
        'Anúncios hiper-segmentados para atrair clientes na sua região exatamente na hora da fome.',
      bullets: ['Meta & Google Ads', 'Geo-fencing Local', 'Dashboards de Resultados'],
      featured: false,
    },
  ],
}

export const cases = {
  sectionTitle: 'Nossos Trabalhos',
  sectionSubtitle:
    'Resultados reais para restaurantes que decidiram elevar seu nível de marketing.',
  ctaLabel: 'Ver todos trabalhos',
  ctaHref: '#',
  items: [
    {
      image: {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        alt: "Bistrô L'Artiste",
      },
      tag: "Bistrô L'Artiste",
      result: '+150% Reservas mensais',
      description: 'Rebrand completo e estratégia de Reels.',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
        alt: 'Sakura Premium Sushi',
      },
      tag: 'Sakura Premium Sushi',
      result: 'R$ 45k ROI em 30 dias',
      description: 'Campanhas segmentadas de tráfego pago.',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        alt: 'Terroir Vinhos & Carnes',
      },
      tag: 'Terroir Vinhos & Carnes',
      result: 'Autoridade Consolidada',
      description: 'Posicionamento premium e Influencer Marketing.',
    },
  ],
}

export const testimonials = {
  sectionTitle: 'O que dizem os Chefs e Proprietários',
  items: [
    {
      quote:
        '"A Mise en Place mudou completamente a percepção do nosso restaurante nas redes sociais. Não apenas as fotos são lindas, mas o retorno financeiro foi imediato."',
      author: 'Carlos Mendes',
      role: 'Dono do Restaurante Horizonte',
      avatar: 'https://i.pravatar.cc/48?img=12',
    },
    {
      quote:
        '"Eles entendem a correria da cozinha e as necessidades do salão. É a primeira agência que realmente entrega resultados que aparecem no meu caixa."',
      author: 'Chef Helena Souza',
      role: 'Chef Executiva do Braseiro & Cia',
      avatar: 'https://i.pravatar.cc/48?img=47',
    },
  ],
}

export const contact = {
  title: 'Pronto para lotar o seu salão?',
  description:
    'Agende uma consultoria gratuita de 30 minutos. Vamos analisar o seu posicionamento atual e traçar um plano de ataque para o seu crescimento.',
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
  copyright:
    '© 2024 Mise en Place - Marketing Gastronômico de Elite. Todos os direitos reservados.',
}

