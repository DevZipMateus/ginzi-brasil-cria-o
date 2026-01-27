

# Plano: Aplicar tipografia da logo nos títulos do site

## Objetivo
Substituir a fonte atual dos títulos (Playfair Display) por uma fonte que corresponda à tipografia da logo Ginzi - uma sans-serif bold condensada.

## Análise da tipografia da logo
A logo "GINZI" utiliza uma fonte com as seguintes características:
- Sans-serif condensada (estreita)
- Peso extra bold/black
- Letras maiúsculas
- Cantos levemente arredondados
- Estilo moderno e impactante

## Fonte recomendada: Bebas Neue
A fonte **Bebas Neue** do Google Fonts é a que mais se aproxima da tipografia da logo, sendo:
- Gratuita e de fácil implementação
- Condensada e bold
- Ideal para títulos de impacto
- Amplamente suportada em navegadores

## Etapas de implementação

### 1. Atualizar index.html
Adicionar a importação da fonte Bebas Neue via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### 2. Atualizar tailwind.config.ts
Modificar a configuração de fontFamily para usar Bebas Neue nos títulos:
```ts
fontFamily: {
  display: ["Bebas Neue", "sans-serif"],
  sans: ["Inter", "sans-serif"],
},
```

### 3. Atualizar src/index.css
Alterar a regra CSS dos headings:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', sans-serif;
  color: #185430;
  letter-spacing: 0.02em;
}
```

## Resultado esperado
Todos os títulos do site (H1, H2, H3, etc.) terão a mesma identidade visual da logo, criando uma marca coesa e profissional. A cor verde #185430 será mantida conforme solicitado anteriormente.

## Arquivos a serem modificados
| Arquivo | Alteração |
|---------|-----------|
| `index.html` | Adicionar import da fonte Bebas Neue |
| `tailwind.config.ts` | Atualizar fontFamily display |
| `src/index.css` | Atualizar regra dos headings |

