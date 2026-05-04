# 📖 Dictionary App

A clean and minimal dictionary web application built with **HTML, CSS & JavaScript** that fetches real-time word data using the Free Dictionary API. Search any English word and instantly get its definition, phonetics, audio pronunciation, example, and parts of speech.

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🔗 Live Demo

👉 [View Live Project](#) -> https://dictionary-site-nqyzmh8wk-rishi-00100s-projects.vercel.app

---

## 📸 Preview

<!-- Add a screenshot of your app here -->
<img width="1919" height="877" alt="Screenshot 2026-05-05 014438" src="https://github.com/user-attachments/assets/65fbc584-ebaf-43b7-ac41-cf7786a4dcf5" />

---

## ✨ Features

- 🔍 **Word Search** — Search any English word instantly
- 📝 **Definition** — Get the primary definition of the word
- 🔤 **Phonetics** — See the phonetic spelling of the word
- 🔊 **Audio Pronunciation** — Listen to the correct pronunciation with built-in audio player
- 💬 **Example Sentence** — See the word used in context
- 🏷️ **Parts of Speech** — Know if the word is a noun, verb, adjective, etc.
- ⚠️ **Error Handling** — Friendly message shown for invalid or unknown words

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and markup |
| CSS3 | Styling and layout |
| JavaScript (ES6+) | Logic, DOM manipulation, API calls |
| Free Dictionary API | Word data source |
| Fetch API | Async HTTP requests |
| Git & GitHub | Version control |

---

## 📁 Project Structure

```
dictionary-app/
│
├── index.html       # Main HTML structure
├── style.css        # All styling and layout
├── script.js        # JavaScript logic and API calls
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- No API key required! ✅

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishi-00100/dictionary-app.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd dictionary-app
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use Live Server extension in VS Code

That's it! No setup, no API key, no dependencies. 🎉

---

## 🌐 API Reference

This project uses the **Free Dictionary API** — completely free, no authentication required.

- **Base URL:** `https://api.dictionaryapi.dev/api/v2/entries/en`
- **Endpoint:** `/{word}`
- **Method:** `GET`
- **Docs:** [Free Dictionary API](https://dictionaryapi.dev/)

### Example Request

```
GET https://api.dictionaryapi.dev/api/v2/entries/en/table
```

### Example API Response (simplified)

```json
[
  {
    "word": "table",
    "phonetic": "/ˈteɪbəl/",
    "phonetics": [
      {
        "text": "/ˈteɪbəl/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/table-us.mp3"
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "Furniture with a top surface to accommodate a variety of uses.",
            "example": "She set her mug on the table."
          }
        ]
      }
    ]
  }
]
```

---

## 💡 How It Works

1. User types a word in the search bar and clicks **Search**
2. The app sends a `GET` request to the Free Dictionary API
3. The API returns a JSON array with word details
4. JavaScript parses the response and dynamically generates the result card
5. Word, phonetics, audio, definition, example and parts of speech all display instantly
6. If the word is not found, a friendly error message is shown

---

## 🔮 Future Improvements

- [ ] Search on pressing Enter key
- [ ] Word of the day on page load
- [ ] Search history of recent words
- [ ] Synonyms and antonyms section
- [ ] Multiple definitions display
- [ ] Dark/Light mode toggle
- [ ] Loading spinner while fetching data
- [ ] Responsive design for mobile devices

---

## 📝 What I Learned

- Working with **REST APIs** without authentication
- Using **async/await** for clean asynchronous JavaScript
- **Dynamic DOM manipulation** using innerHTML
- Using **optional chaining** (`?.`) to handle missing data safely
- **Error handling** with try/catch for better user experience
- Parsing and extracting nested data from **JSON responses**
- Using the **Audio HTML element** dynamically via JavaScript

---
---

⭐ If you found this project helpful, please give it a star on GitHub!
