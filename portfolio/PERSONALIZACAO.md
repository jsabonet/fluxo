# FLUXO Portfolio - Guia de Personalização

## 🚀 Seu porfolioestá pronto e rodando!

O portal está disponível em: **http://localhost:3000/**

## 📝 Como Personalizar com Dados do PDF

### 1. **Informações da Empresa**
Edite o arquivo [Hero.jsx](src/components/Hero.jsx) e atualize:
- Descrição na linha principal
- Texto do call-to-action

### 2. **Serviços**
Edite [Services.jsx](src/components/Services.jsx):
- Modifique o array `services` com seus 6 principais serviços
- Cada serviço tem: `icon`, `title` e `description`

### 3. **Portfólio/Projetos**
Edite [Portfolio.jsx](src/components/Portfolio.jsx):
- Atualize o array `projects` com seus trabalhos
- Adicione imagens dos seus projetos (substitua as URLs de imagem do Unsplash)
- Categorias: 'design', 'serigrafia', 'impressao', 'embalagem'

### 4. **Sobre Nós**
Edite [About.jsx](src/components/About.jsx):
- Atualize os parágrafos descritivos
- Modifique as estatísticas (projetos, clientes, anos, avaliação)
- Adicione bullets com características principais

### 5. **Contato**
Edite [Contact.jsx](src/components/Contact.jsx):
- Atualize números de telefone
- Email: contato@fluxo.com.br
- WhatsApp
- Endereço

### 6. **Rodapé**
Edite [Footer.jsx](src/components/Footer.jsx):
- Links de redes sociais
- Informações de contato
- Links rápidos

## 🎨 Personalizações Adicionais

### Cores
Edite [tailwind.config.js](tailwind.config.js):
```javascript
colors: {
  primary: '#6B41C1',      // Roxo (mude conforme necessário)
  secondary: '#00D9FF',    // Ciano (destaque)
  dark: '#0F172A',         // Fundo escuro
  light: '#F8FAFC'         // Texto claro
}
```

### Imagens
Substitua as imagens de projetos:
1. Coloque suas imagens em `src/assets/`
2. Importe nos componentes
3. Use caminhos relativos

### Adicionar Páginas
1. Crie novo arquivo em `src/components/`
2. Importe em `src/App.jsx`
3. Adicione no menu de navegação

## 📦 Build para Produção

```bash
npm run build
```

Isso cria a pasta `dist/` pronta para deploy.

## 🔄 Hot Reload
Todas as alterações são apllicadas automaticamente ao salvar (Hot Module Replacement).

## 📱 Responsividade
O design é totalmente responsivo em:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (< 768px)

## 🎯 Próximos Passos
1. Extraia os dados do PDF fornecido
2. Atualize cada seção conforme guia acima
3. Teste em diferentes dispositivos
4. Faça build e implemente em servidor

---

**Precisa de mais customizações? Estou aqui para ajudar!**
