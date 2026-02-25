<div align="center">
  <h1>📱 Mobile ERP Dashboard</h1>
  <p>Um painel ERP e CRM moderno, responsivo e focado em dispositivos móveis.</p>
  
  [![React](https://img.shields.io/badge/React-19-blue.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)
</div>

<br />

## ✨ Sobre o Projeto

O **Mobile ERP Dashboard** é uma aplicação front-end desenvolvida para oferecer uma experiência premium no gerenciamento de recursos empresariais (ERP) e relacionamento com clientes (CRM) diretamente do celular. Com uma interface "Dark Mode" elegante, o app permite o controle de finanças, vendas e estoque em um só lugar.

## 🚀 Funcionalidades

- **🏠 Home (Dashboard Financeiro):** Visão geral de receitas, despesas e fluxo de caixa, além do histórico de transações recentes.
- **📊 Pipeline de Vendas (CRM):** Quadro Kanban interativo para gerenciar leads, negociações em andamento e negócios fechados.
- **📦 Gestão de Estoque:** Listagem de produtos com indicadores visuais para itens com estoque baixo e filtros por categoria.
- **⚙️ Configurações:** Gerenciamento de perfil, plano de assinatura, preferências de notificação e segurança.
- **📱 Mobile-First:** Design otimizado para telas de smartphones com navegação inferior (Bottom Navigation) fluida.

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/):** Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Superset tipado do JavaScript para maior segurança e escalabilidade.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Framework CSS utilitário para estilização rápida e design responsivo.
- **[Vite](https://vitejs.dev/):** Build tool ultrarrápido para desenvolvimento front-end.
- **[Lucide React](https://lucide.dev/):** Biblioteca de ícones bonitos e consistentes.

## 📂 Estrutura do Projeto

```text
/
├── src/
│   ├── components/
│   │   ├── BottomNav.tsx      # Barra de navegação inferior
│   │   ├── Home.tsx           # Tela de Dashboard Financeiro
│   │   ├── Inventory.tsx      # Tela de Gestão de Estoque
│   │   ├── Pipeline.tsx       # Tela de Pipeline de Vendas (Kanban)
│   │   └── Settings.tsx       # Tela de Configurações
│   ├── App.tsx                # Componente principal e roteamento de abas
│   ├── index.css              # Estilos globais e variáveis do Tailwind
│   └── main.tsx               # Ponto de entrada da aplicação
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 💻 Como Executar Localmente

1. **Clone o repositório** (ou baixe os arquivos):
   ```bash
   git clone https://github.com/seu-usuario/mobile-erp-dashboard.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd mobile-erp-dashboard
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra `http://localhost:3000` (ou a porta indicada no terminal). Para a melhor experiência, abra o DevTools do navegador (F12) e ative o modo de visualização mobile.

## 🎨 Design System

O projeto utiliza um sistema de cores customizado configurado via Tailwind CSS:
- **Primary:** `#2525f4` (Azul vibrante para ações principais)
- **Dark Background:** `#0f1115` (Fundo escuro profundo)
- **Dark Card:** `#1a1d23` (Fundo de cartões e elementos elevados)
- **Success:** `#10b981` (Verde para entradas e sucesso)
- **Danger:** `#ef4444` (Vermelho para saídas e alertas)
- **Low Stock:** `#f59e0b` (Âmbar para alertas de estoque)

---
<div align="center">
  Feito com ❤️ e foco em UI/UX.
</div>
