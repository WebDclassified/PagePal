# PagePal
 
**Your Smart AI-Powered Web Companion**

## 🚀 Introduction
PagePal is an AI-powered web assistant that enhances your browsing experience by providing intelligent insights, seamless communication, and instant access to relevant information. Whether you're searching for knowledge, managing tasks, or interacting with web content, PagePal is here to assist you.

## 🔥 Features
- **AI-Powered Chat** – Interact with web pages in a conversational manner.
- **Smart URL Indexing** – Automatically indexes and retrieves useful data from web pages.
- **Real-Time Assistance** – Get relevant suggestions and insights instantly.
- **Seamless Integration** – Works effortlessly with multiple web platforms.
- **Optimized Performance** – Fast and efficient with a lightweight design.

## 🛠️ Tech Stack
PagePal is built using modern technologies:
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** Redis for caching and URL indexing
- **AI Integration:** OpenAI API (for chat & insights)

## 📦 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js (>=18.x)**
- **npm or yarn**
- **Redis Server (for caching)**

### Steps to Set Up Locally
```sh
# Clone the repository
git clone https://github.com/WebDclassified/PagePal.git
cd PagePal

# Install dependencies
npm install  # or yarn install

# Set up environment variables
cp .env.example .env
# Fill in the required API keys and database details

# Start the development server
npm run dev  # or yarn dev
```

## 🚀 Usage
1. Open `http://localhost:3000` in your browser.
2. Enter a website URL to interact with its content using AI-powered chat.
3. PagePal will retrieve and analyze relevant data, providing insightful responses.

## 🏗️ Project Structure
```
PagePal/
├── components/       # Reusable UI components
├── lib/              # Helper functions (Redis, AI chat, etc.)
├── pages/            # Next.js pages (API & frontend routes)
├── public/           # Static assets
├── styles/           # Global styles (Tailwind CSS)
├── .env.example      # Sample environment variables
└── README.md         # Project documentation
```

## 🔑 Environment Variables
Create a `.env` file in the root directory and add the required variables:
```
OPENAI_API_KEY=your_openai_api_key
REDIS_URL=your_redis_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000
UPSTASH_VECTOR_REST_URL=""
UPSTASH_VECTOR_REST_TOKEN=""
QSTASH_TOKEN=""
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

## 🤝 Contributing
We welcome contributions! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m "Added new feature"`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📩 Contact
For any queries or support, feel free to reach out:
- **GitHub Issues:** [Report here](https://github.com/WebDclassified/PagePal/issues)
- **Email:** your-email@example.com

---
Made with ❤️ by the PagePal Team 🚀

