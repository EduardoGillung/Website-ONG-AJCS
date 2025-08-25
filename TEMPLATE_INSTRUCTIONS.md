# 📋 Instruções para Usar o Template de Projetos

## 🎯 Como Criar Novos Projetos

### 1. **Copie o Template**
```bash
# Copie o arquivo template
cp src/templates/ProjectTemplate.tsx src/pages/SeuProjeto.tsx
```

### 2. **Personalize o Projeto**
Edite o arquivo `src/pages/SeuProjeto.tsx` e substitua os dados:

```tsx
// Exemplo de uso do template
const MeuProjeto = () => {
  return (
    <ProjectTemplate
      title="Nome do Seu Projeto"
      description="Descrição detalhada do projeto..."
      icon="🎯"
      category="Educação"
      status="Ativo"
      impact="500+ pessoas beneficiadas"
      duration="2 anos"
      location="São Paulo, SP"
      highlights={["Destaque 1", "Destaque 2", "Destaque 3"]}
      
      // Opcionais
      budget="R$ 50.000"
      team={["João Silva", "Maria Santos", "Pedro Costa"]}
      goals={[
        "Objetivo 1 do projeto",
        "Objetivo 2 do projeto",
        "Objetivo 3 do projeto"
      ]}
      achievements={[
        "Conquista 1 alcançada",
        "Conquista 2 alcançada",
        "Conquista 3 alcançada"
      ]}
      gallery={["foto1.jpg", "foto2.jpg", "foto3.jpg"]}
      testimonials={[
        {
          name: "João Silva",
          role: "Beneficiário",
          text: "Este projeto mudou minha vida completamente!"
        }
      ]}
    />
  );
};
```

### 3. **Adicione a Rota**
No arquivo `src/router/index.tsx`, adicione a nova rota:

```tsx
import SeuProjeto from "../pages/SeuProjeto";

// Dentro do Routes
<Route path="/seu-projeto" element={<SeuProjeto />} />
```

### 4. **Atualize a Navegação**
No arquivo `src/components/header.tsx`, adicione o link:

```tsx
const navigationItems = [
  { to: "/", label: "Quem somos" },
  { to: "/projects", label: "Projetos sociais" },
  { to: "/partners", label: "Colaboradores" },
  { to: "/contact", label: "Contato" },
  { to: "/seu-projeto", label: "Seu Projeto" }, // Nova página
];
```

## 🎨 Personalização Avançada

### Cores e Estilos
- **Cores principais**: Amarelo (`yellow-400`, `yellow-500`)
- **Fundo**: Gradiente escuro (`from-black via-gray-900 to-black`)
- **Texto**: Branco (`text-white`) e amarelo (`text-yellow-400`)

### Seções Disponíveis
1. **Hero Section** - Título e descrição principal
2. **Stats Section** - Estatísticas do projeto
3. **Highlights** - Destaques principais
4. **Goals** - Objetivos do projeto
5. **Achievements** - Conquistas alcançadas
6. **Team** - Equipe do projeto
7. **Gallery** - Galeria de fotos
8. **Testimonials** - Depoimentos
9. **CTA Section** - Call to action

### Status Disponíveis
- `"Ativo"` - Verde
- `"Em Andamento"` - Azul
- `"Planejamento"` - Roxo
- `"Concluído"` - Cinza

## 📁 Estrutura de Arquivos

```
src/
├── pages/
│   ├── homepage.tsx          # Página inicial
│   ├── contact.tsx           # Página de contato
│   ├── partners.tsx          # Página de parceiros
│   ├── projects.tsx          # Lista de projetos
│   └── SeuProjeto.tsx        # Seu novo projeto
├── templates/
│   └── ProjectTemplate.tsx   # Template base
└── components/
    ├── header.tsx            # Cabeçalho
    ├── footer.tsx            # Rodapé
    └── navigation/
        └── mobileNav.tsx     # Menu mobile
```

## 🚀 Dicas de Uso

1. **Mantenha a consistência** - Use as mesmas cores e estilos
2. **Seja específico** - Inclua dados reais e impactos mensuráveis
3. **Use imagens** - Substitua os emojis por imagens reais quando possível
4. **Teste responsividade** - Verifique em diferentes tamanhos de tela
5. **Mantenha atualizado** - Atualize estatísticas e informações regularmente

## 📞 Suporte

Para dúvidas ou sugestões sobre o template, consulte a documentação ou entre em contato com a equipe de desenvolvimento.

