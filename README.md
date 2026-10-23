# Kit Toda Prontha — Landing Page (Lacoque)

Landing page estática (HTML/CSS/JS puro, sem build) para o **Kit Toda Prontha**
da Lacoque (Dfinida + Segura + Pronthinha), pronta para subir no GitHub e
publicar no Vercel.

## Checkout

Link de checkout (B4You): `https://checkout.b4you.com.br/twvNeWNYZP/3Steps`

Já aplicado em todos os 5 botões "Quero o Kit" do `index.html`.

## Estrutura

```
index.html
assets/
  css/styles.css
  js/main.js
  images/        (fotos reais do kit, já otimizadas para web)
favicon.ico
```

## Identidade visual

As cores e a tipografia seguem o **material oficial do produto** (catálogo
do Kit Toda Prontha), não o brandbook "Expert" (que é da linha para
profissionais/salões — paleta vinho escuro, usada em outro projeto):

- `--terracota: #EF7858` / `--vinho: #8A252D` / `--creme: #FCE7E0`
  (extraídas diretamente das páginas do catálogo em PDF)
- Tipografia: **Baloo 2** (títulos) + **Quicksand** (texto), via Google
  Fonts — a combinação mais próxima do estilo arredondado e amigável usado
  nas embalagens e no catálogo oficial.

Todo o conteúdo de produto (descrições, ativos, modo de uso, pH, indicação
de curvatura) foi copiado do catálogo oficial em PDF. As quantidades na
seção "O que vem na caixa" seguem o que está impresso na própria caixa do
kit (foto `IMG_9126`).

## Deploy

### 1. GitHub

```bash
git init
git add .
git commit -m "Landing page Kit Toda Prontha"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### 2. Vercel

- Importe o repositório em [vercel.com/new](https://vercel.com/new)
- Framework preset: **Other** (é HTML estático, não precisa de build command
  nem output directory especiais — o Vercel detecta sozinho)
- Deploy.

## O que ficou de fora (por não ter informação verificada)

- **Preço do kit** — não havia preço do kit físico em nenhum material
  recebido, então a seção de oferta não exibe valor (o preço normalmente
  aparece na própria página de checkout).
- **Garantia** — o PDF do catálogo não menciona política de garantia/troca
  para o kit físico, então nenhuma promessa desse tipo foi incluída.
- **Redes sociais no rodapé** — não havia @ ou link oficial confirmado nos
  materiais, por isso o rodapé não tem ícones de redes sociais (fácil de
  adicionar depois, se quiser me passar os links).
