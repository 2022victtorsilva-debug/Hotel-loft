# Barreiras LOFT

Site institucional demonstrativo desenvolvido pela **Yuukri** para apresentar uma proposta de presença digital premium para a Barreiras LOFT, em Barreiras - BA.

> O site não possui sistema real de reservas, banco de dados, login, pagamento ou painel administrativo. A consulta de disponibilidade é uma interface visual que prepara uma mensagem para atendimento manual pelo WhatsApp.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Vitest para testes dos fluxos de consulta

A base visual foi recuperada de um projeto iniciado no Lovable. O design, a paleta, a tipografia, a intro, o Hero, Sobre, acomodações, galeria, comodidades, animações e formulário foram preservados e concluídos fora do agente do Lovable.

## Instalação

```bash
npm install
npm run dev
```

## Validação e build de produção

```bash
npm run typecheck
npm test
npm run check:images
npm run build
```

O workflow em `.github/workflows/ci.yml` executa a mesma validação no GitHub Actions. O build estático é gerado em `dist/`.

## Estrutura principal

```text
src/
  components/   seções e componentes visuais
  config/       dados centralizados do hotel
  hooks/        animação de reveal
  lib/          WhatsApp e validação da consulta
  App.tsx       composição da página
  styles.css    tema visual e estilos globais
scripts/
  check-image-urls.mjs  verifica as imagens ilustrativas usadas no protótipo
```

## Onde alterar os dados do hotel

Edite **`src/config/site.ts`**. Os principais valores estão centralizados ali.

### WhatsApp

```ts
contact: {
  whatsappNumber: "5577XXXXXXXXX"
}
```

Use o número completo com DDI + DDD + número, apenas dígitos. Enquanto estiver vazio, o site não cria links falsos de WhatsApp e informa que o canal ainda precisa ser configurado.

### Instagram

Altere `siteConfig.contact.instagramUrl`. Enquanto estiver vazio, os pontos de Instagram aparecem como “a configurar” e não apontam para um perfil inexistente.

### Endereço e mapa

Altere:

- `siteConfig.contact.address`
- `siteConfig.contact.googleMapsUrl`

Sem esses dados, a seção mostra apenas “Barreiras - Bahia” e não inventa endereço ou rota.

### Acomodações e preços

Edite o array `siteConfig.rooms`. Nomes, preços, capacidade, cama, banheiro, comodidades e imagens ficam no mesmo local.

Os valores atuais são demonstrativos:

- Loft Essencial — R$ 169 / diária
- Loft Conforto — R$ 219 / diária
- Loft Premium — R$ 289 / diária

### Comodidades

Edite `siteConfig.amenities`. Itens ainda não confirmados são apresentados no protótipo como demonstrativos.

### Imagens

As URLs ilustrativas ficam em:

- `siteConfig.media.hero`
- `siteConfig.media.about`
- `siteConfig.media.finalCta`
- `siteConfig.media.gallery`
- campo `image` de cada acomodação

As imagens podem ser trocadas por fotografias oficiais sem alterar os componentes. O CI verifica se todas as URLs ilustrativas respondem como imagem antes de aprovar o build.

## Contato pelo WhatsApp

As mensagens são montadas em `src/lib/contact.ts`:

- contato geral;
- consulta por acomodação;
- consulta com check-in, check-out, hóspedes e acomodação.

O número nunca é duplicado pelos componentes; todos usam `siteConfig.contact.whatsappNumber`.

## Observação sobre a base Lovable

O estado recuperado está documentado em `docs/LOVABLE_BASE.md`. No momento da recuperação, os componentes personalizados já existiam, mas a rota inicial ainda mostrava o template padrão do Lovable e não montava o site criado.
