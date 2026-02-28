# 📦  Armazenador de Repositorios do Github

Projeto feito no curso "Aprenda a criar sites e sistemas web com NextJS do extremo ZERO com projetos reais" (Matheus Fraga)

# 🚀 Sobre o Projeto

🔎 Buscar repositórios pelo formato usuario/repositorio

💾 Salvar repositórios localmente

📄 Visualizar detalhes completos do projeto

🐞 Acompanhar as issues abertas

❌ Remover repositórios da sua lista

# 🛠️ Tecnologias Utilizadas

⚛️ React

⚡ Vite

🎨 CSS / Styled Components

🌐 API pública do GitHub

# 📸 Funcionalidades

## 🔍 Adicionar Repositório

Insira no formato:

`facebook/react`

O sistema busca os dados na API do GitHub.

Caso exista, o repositório é salvo na lista.

##  📂 Visualizar Detalhes

Ao clicar em um repositório salvo, você pode visualizar:

Nome

Descrição

Linguagem principal

Número de estrelas

Número de forks

Número de issues abertas

## 🐛 Visualizar Issues

Lista de issues abertas

Título

Autor

Link direto para a issue no GitHub

# ⚙️ Como Rodar o Projeto

1️⃣ Clone o repositório 
`
git clone https://github.com/ArthurLp08/repokeeper
`

2️⃣ Acesse a pasta
`
cd repokeeper
`

3️⃣ Instale as dependências
`
npm install
`

4️⃣ Execute o projeto
`
npm run dev
`

O projeto estará disponível em:

http://localhost:5173

# 🌐 API Utilizada

A aplicação consome dados da API pública do GitHub:

https://api.github.com/repos/{owner}/{repo}
