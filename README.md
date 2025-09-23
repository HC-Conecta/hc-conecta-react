
# HC Conecta 

Projeto desenvolvido para auxiliar pacientes do Hospital das Clínicas com baixa afinidade digital, facilitando o acesso a informações, consultas e suporte através de uma interface amigável.

---

## 🚀 Tecnologias Utilizadas
- **React.js** (framework de UI)
- **TypeScript** (tipagem estática)
- **Vite** (ferramenta de build)
- **TailwindCSS** (estilização)
- **EmailJS** (envio de e-mails sem backend)

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

## 🔑 Configuração do EmailJS

Crie um arquivo `.env` na raiz do projeto e adicione as chaves fornecidas pelo [EmailJS](https://www.emailjs.com/):

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Essas variáveis já estão configuradas no código para serem lidas automaticamente.

---

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
│   │   ├── AppRoutes.tsx
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── H1.tsx
│   │   ├── ImportantNotice.tsx
│   │   ├── InputLogin.tsx
│   │   ├── LiFooter.tsx
│   │   ├── LiTips.tsx
│   │   ├── Location.tsx
│   │   └── Paragraph.tsx
│   │
│   ├── hooks/                         # Hooks customizados
│   │   └── use-mobile.tsx
│   │
│   ├── interfaces/                    # Tipagens globais
│   │   └── global.d.ts
│   │
│   ├── pages/                         # Páginas principais
│   │   ├── About.tsx
│   │   ├── Appointment.tsx
│   │   ├── Doubt.tsx
│   │   ├── Guide.tsx
│   │   ├── Home.tsx
│   │   ├── Layout.tsx
│   │   ├── Login.tsx
│   │   ├── NotFound.tsx
│   │   ├── Profile.tsx
│   │   ├── Register.tsx
│   │   └── Support.tsx
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
├── .gitignore
├── db.json                            # Mock de dados (JSON Server)
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

---

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

Link Repositório: https://github.com/HC-Conecta/hc-conecta-react.git


# Equipe

Desenvolvido por alunos da FIAP como parte do Challenge voltado à inclusão digital de pacientes no sistema de saúde.