
# HC Conecta 

O **HC Conecta** é um projeto universitário desenvolvido com o objetivo de **facilitar a experiência digital de pacientes do Hospital das Clínicas**, especialmente aqueles com **baixa afinidade tecnológica**. O sistema busca oferecer uma **navegação intuitiva, acessível e acolhedora**, promovendo inclusão digital e apoio emocional.

## 🚀 Deploy

🔗 Acesse o projeto online: [https://hc-conecta-react.vercel.app/home](https://hc-conecta-react.vercel.app/home)


## 🚀 Tecnologias Utilizadas
- **React.js** (framework de UI)
- **TypeScript** (tipagem estática)
- **Vite** (ferramenta de build)
- **TailwindCSS** (estilização)
- **EmailJS** (envio de e-mails sem backend)

☕ Java (Quarkus) — API conectada para dados e funcionalidades dinâmicas
🌐 Integração via VITE_API_URL no .env

---

## 📦 Instalação e Uso

Clone o repositório:
```bash
git clone https://github.com/seu-repo/hc-conecta.git
cd hc-conecta
````

Instale as dependências:

```bash
npm install
```

Rode o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

---

## 🔑 Configuração do EmailJS e .env

Crie um arquivo `.env` na raiz do projeto e adicione as chaves fornecidas pelo [EmailJS](https://www.emailjs.com/) e Back-end:

```env

# EmailJS
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key

# Backend Java
VITE_API_URL=https://seu-servidor-java/api

```

Essas variáveis já estão configuradas no código para serem lidas automaticamente.


## 📂 Estrutura de Pastas

```
hc-conecta-react/
├── public/
│   ├── img-location/                  # Imagens de localização
│   ├── dinosaur-notfound.png
│   ├── enrico-image.png
│   ├── favicon-hc-conecta.png
│   ├── iago-image.png
│   ├── logo-hc-conecta-v2.png
│   ├── logo-hc-conecta.png
│   └── vitor-image.png
│
├── src/
│   ├── components/                    # Componentes reutilizáveis
│   │   ├── TTS/                       # Text-to-Speech (acessibilidade)
│   │   ├── section/                   # Seções do projeto (Home, Dicas, etc)
│   │   ├── ui/                        # Componentes visuais (botões, inputs)
│   │
│   ├── hooks/                         # Hooks customizados
│   │
│   ├── interfaces/                    # Tipagens globais
│   │
│   ├── roures /                         # Páginas principais
│   │   ├── consulta /
│   │   ├── duvida /
│   │   ├── guia /
│   │   ├── home /
│   │   ├── layout /
│   │   ├── login /
│   │   ├── notFound /
│   │   ├── pefil /
│   │   ├── registrar /
│   │   ├── sobre /
│   │   └── suporte /
│   │
│   ├── services/                      # Comunicação com APIs
│   │   ├── api.ts
│   │   └── email-service.ts
│   │
│   ├── utils/                         # Funções utilitárias
│   │   ├── cpfMask.ts
│   │   └── phoneMask.ts
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .env                               # Variáveis de ambiente
├── .env.example                       # Exemplo das Variáveis de ambiente
├── .gitignore
├── db.json                            # Mock de dados (JSON Server)
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

---

## Algumas Imagens do Projeto
<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/0fe75b59-25d4-4e9e-b778-6ec2eecbc3bf" />
<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/90b3c855-ba33-475c-a07f-a68fe8aa6ed4" />
<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/c946d255-49ed-4d75-a5f3-ce5721168e94" />


## 👨‍💻 Equipe

| Nome Completo           | RM     | Turma |
| ----------------------- | ------ | ----- |
| Iago Liziero            | RM564063 | 1TDSPG |
| Enrico Delesporte          | RM565760 | 1TDSPG |
| Vitor Souza             | RM565422 | 1TDSPG |

## 📌 Diferenciais do Projeto

* Interface responsiva (PC e Mobile)
* Integração com EmailJS (envio de mensagens em tempo real)
* **TTS (Text to Speech)** para acessibilidade
* Mascote exclusivo para reforçar a identidade da aplicação
* Estrutura escalável e organizada

## 🔗 Repositório e Deploy

GitHub: https://github.com/HC-Conecta/hc-conecta-react

Deploy: https://hc-conecta-react.vercel.app/home

# Equipe

Desenvolvido por alunos da FIAP como parte do Challenge voltado à inclusão digital de pacientes no sistema de saúde.
