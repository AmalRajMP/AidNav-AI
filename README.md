# AidNav AI

AidNav AI is an AI-powered citizen assistance platform that helps users discover government welfare schemes they are eligible for through a conversational interface.

Instead of manually searching through multiple government portals and understanding complex eligibility criteria, users can simply describe their situation in natural language. AidNav AI extracts the relevant profile information, retrieves matching government schemes using Retrieval-Augmented Generation (RAG), and provides personalized recommendations.

This project was developed for the **Idea2Impact 2026 Online Hackathon** under the **Sustainability & Social Impact** theme.

---

## Live Demo

**Application:** https://aidnav-ai-client.onrender.com

**Backend API:** https://aidnav-ai.onrender.com

---

## Problem Statement

Government welfare schemes provide valuable financial assistance and public services, yet many eligible citizens remain unaware of them or find it difficult to determine which schemes apply to their situation.

Existing government portals generally require users to manually search through hundreds of schemes, understand complex eligibility criteria, and navigate multiple websites. This process can be overwhelming, especially for users with limited digital literacy.

AidNav AI addresses this challenge by providing a conversational experience where users simply answer questions in natural language. The platform understands the user's profile and recommends relevant government schemes without requiring manual searching.

---

## Features

- Conversational AI interface
- Automatic user profile extraction
- Personalized government scheme recommendations
- Retrieval-Augmented Generation (RAG)
- Semantic search using ChromaDB vector database
- Context-aware AI responses
- Responsive and mobile-friendly interface

---

## How It Works

1. The user starts a conversation with the AI assistant.
2. The system extracts important profile details such as age, occupation, income, state, gender, and category.
3. The extracted information is maintained throughout the conversation.
4. Relevant government schemes are retrieved from the ChromaDB vector database using semantic search.
5. Retrieved documents are supplied as context to the language model.
6. The AI generates personalized responses based on both the user's profile and retrieved government scheme information.

---

## Tech Stack

### Frontend

- React
- React Router
- CSS
- React Markdown

### Backend

- Node.js
- Express.js

### AI & Retrieval

- Groq API
- ChromaDB
- Retrieval-Augmented Generation (RAG)
- Vector Embeddings

---

## Project Structure

```
AidNav-AI
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   └── styles/
│   └── .env.production
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── rag/
│   ├── prompts/
│   ├── utils/
│   └── .env
│
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/AmalRajMP/AidNav-AI.git
```

Move into the project

```bash
cd AidNav-AI
```

Install frontend dependencies

```bash
cd client
npm install
```

Install backend dependencies

```bash
cd ../server
npm install
```

---

## Environment Variables

### Server (`server/.env`)

```env
GROQ_API_KEY=your_groq_api_key
CHROMA_URL=your_chromadb_url
PORT=5000
```

### Client (`client/.env.production`)

```env
VITE_API_URL=https://aidnav-ai.onrender.com
```

---

## Running the Project

Start the backend

```bash
cd server
npm run dev
```

Start the frontend

```bash
cd client
npm run dev
```

---

## Future Vision

AidNav AI is designed to evolve beyond government scheme discovery.

The long-term vision is to build an AI-powered citizen service platform where users can complete the entire welfare application journey through a single conversational interface.

Future enhancements include:

- End-to-end government scheme application through chat
- AI-assisted form filling using extracted user information
- Secure document upload and verification
- Real-time eligibility validation using official government APIs
- Application tracking and status notifications
- Support for both Central and State Government schemes
- Multilingual support for improved accessibility
- Voice-based interaction for users with limited digital literacy

The objective is to simplify access to government welfare services and make public services more accessible through conversational AI.

---

## Author

**Amal Raj**

BCA Graduate

Built for the **Idea2Impact 2026 Online Hackathon**.

---

## License

This project was developed for the Idea2Impact 2026 Online Hackathon.
