import heroBowl from "@/assets/hero-bowl.jpg";
import productClassic from "@/assets/product-classic.jpg";
import productTropical from "@/assets/product-tropical.jpg";
import productEnergia from "@/assets/product-energia.jpg";
import productCreme from "@/assets/product-creme.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";
import storyImg from "@/assets/story.jpg";
import storefrontImg from "@/assets/storefront.jpg";
import reviewMarina from "@/assets/review-marina.jpg";
import reviewGabriel from "@/assets/review-gabriel.jpg";
import reviewAmanda from "@/assets/review-amanda.jpg";
import reviewLucas from "@/assets/review-lucas.jpg";
import reviewBeatriz from "@/assets/review-beatriz.jpg";
import reviewRenata from "@/assets/review-renata.jpg";

export const businessConfig = {
  name: "Roxo Nativo Açaí",
  slogan: "Seu momento merece mais sabor",
  orderUrl: "https://plataforma-de-pedidos.com/roxo-nativo",
  phone: "(00) 00000-0000",
  whatsappUrl: "https://wa.me/5500000000000",
  email: "contato@roxonativo.com.br",
  instagramUrl: "https://instagram.com/roxonativoacai",
  instagramHandle: "@roxonativoacai",
  address: "Avenida das Palmeiras, 245 — Centro",
  cep: "00000-000",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+das+Palmeiras+245+Centro",
  mapsEmbedUrl: "https://www.google.com/maps?q=Avenida+das+Palmeiras+245+Centro&output=embed",
  streetViewEmbedUrl: "",
};

export const ORDER_URL = businessConfig.orderUrl;

export const products = [
  {
    id: "nativo-classico",
    name: "Nativo Clássico",
    description: "Açaí, banana, granola e leite em pó.",
    price: "R$ 17,90",
    tag: "Favorito",
    image: productClassic,
  },
  {
    id: "roxo-tropical",
    name: "Roxo Tropical",
    description: "Açaí, manga, kiwi, coco e leite condensado.",
    price: "R$ 22,90",
    tag: null,
    image: productTropical,
  },
  {
    id: "energia-da-casa",
    name: "Energia da Casa",
    description: "Açaí, banana, morango, granola, paçoca e mel.",
    price: "R$ 24,90",
    tag: "Mais pedido",
    image: productEnergia,
  },
  {
    id: "creme-dos-sonhos",
    name: "Creme dos Sonhos",
    description: "Açaí, creme de Ninho, morango, leite em pó e gotas de chocolate.",
    price: "R$ 26,90",
    tag: null,
    image: productCreme,
  },
] as const;

export const openingHours = [
  { label: "Segunda a sexta", hours: "10:00 às 22:00" },
  { label: "Sábado", hours: "10:00 às 23:00" },
  { label: "Domingo", hours: "12:00 às 21:00" },
];

export const testimonials = [
  {
    name: "Marina S.",
    text: "Ótimas opções de complementos e o açaí chegou muito bem montado.",
    rating: 5,
    image: reviewMarina,
  },
  {
    name: "Gabriel M.",
    text: "A plataforma de pedidos é prática e encontrei tudo com facilidade.",
    rating: 5,
    image: reviewGabriel,
  },
  {
    name: "Amanda R.",
    text: "O ambiente é bonito, o atendimento é atencioso e as combinações são deliciosas.",
    rating: 5,
    image: reviewAmanda,
  },
  {
    name: "Lucas P.",
    text: "A textura do açaí é excelente e os complementos chegaram frescos e bem separados.",
    rating: 5,
    image: reviewLucas,
  },
  {
    name: "Beatriz C.",
    text: "Adorei poder montar tudo do meu jeito. O pedido ficou pronto rápido e veio caprichado.",
    rating: 5,
    image: reviewBeatriz,
  },
  {
    name: "Renata L.",
    text: "O espaço é acolhedor e o cardápio tem combinações para todos os gostos.",
    rating: 5,
    image: reviewRenata,
  },
];

export const faqs = [
  {
    q: "Onde faço meu pedido?",
    a: "Os pedidos são realizados em nossa plataforma online. Clique em 'Fazer meu pedido' para acessar.",
  },
  {
    q: "Vocês fazem entrega?",
    a: "A disponibilidade, as regiões atendidas e as taxas aparecem na plataforma de pedidos.",
  },
  {
    q: "Posso retirar na loja?",
    a: "Consulte a opção de retirada e o prazo de preparo ao realizar o pedido.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "As formas disponíveis são apresentadas antes da finalização na plataforma de pedidos.",
  },
  {
    q: "Onde fica a loja?",
    a: "Estamos na Avenida das Palmeiras, 245 — Centro. Use o botão 'Abrir no Google Maps' para traçar a rota.",
  },
  {
    q: "Os preços desta página são definitivos?",
    a: "Os valores exibidos são iniciais. Consulte preços, tamanhos e disponibilidade atualizados na plataforma de pedidos.",
  },
];

export const galleryImages = [
  { src: gallery2, alt: "Tigela de açaí com frutas variadas em uma mesa clara" },
  { src: gallery1, alt: "Colher levantando açaí cremoso" },
  { src: galleryDetail, alt: "Detalhe dos complementos: granola, chocolate e frutas" },
  { src: galleryInterior, alt: "Ambiente interno da loja com plantas e iluminação aconchegante" },
  { src: productClassic, alt: "Tigela clássica com banana e granola" },
];

export { heroBowl, storefrontImg, storyImg };
