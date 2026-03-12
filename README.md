# Speak, Shakespeare | Frontend Interface

A sophisticated, character-level generative text interface that bridges 16th-century literature with modern deep learning. This React-based web application provides a responsive, thematic UI for interacting with a custom-trained **Gated Recurrent Unit (GRU)** model trained on the complete works of William Shakespeare.

---

##  Architecture Overview

The frontend is designed as a lightweight, state-driven interface that handles user input, real-time parameter tuning, and asynchronous communication with the backend service.

### Technical Stack
* **Framework:** React.js (Functional Components & Hooks)
* **Styling:** CSS3 with Glassmorphism and Responsive Design
* **Typography:** Google Fonts integration (*IM Fell English*)
* **Deployment:** [Vercel](https://speak-shakespeare.vercel.app/)
* **API Communication:** Asynchronous Fetch API

---

##  Key Features

* **Custom Parameter Control:**
    * **Seed Text:** Dynamic input field to initialize the RNN hidden state.
    * **Length Control:** Precise character-count adjustment for the generated output.
    * **Temperature Scaling:** A range slider ($0.1$ to $1.0$) to control the Boltzmann distribution sampling, allowing users to balance between deterministic and creative text generation.
* **Historical Aesthetic:** A meticulously crafted "Parchment" UI utilizing a historical color palette (`#f5e6c8`, `#2c1810`) and serif typography.
* **Adaptive Glassmorphism:** A modern, semi-transparent response container using `backdrop-filter: blur` and `rgba` overlays for the generated Shakespearean prose.
* **Responsive Design:** Fluid layouts using `rem` units and Flexbox to ensure a seamless experience across all device scales.

---

##  Installation & Setup

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** or **yarn**

### Local Development

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/shakespeare-frontend.git](https://github.com/your-username/shakespeare-frontend.git)
    cd shakespeare-frontend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Execute Start Script:**
    ```bash
    npm start
    ```

---

##  API Consumption

The frontend communicates with the production backend via the following specification:

**Base URL:** `https://shakespeare-gen-backend.onrender.com`  
**Endpoint:** `GET /generate`

| Query Parameter | React State | Type | Description |
| :--- | :--- | :--- | :--- |
| `text` | `input` | `string` | The initial string to seed the GRU model. |
| `num_chars` | `wordCount` | `int` | Total number of characters to be generated. |
| `temperature` | `temperature`| `float` | Sampling variance ($0.1$ - $1.0$). |

---

##  Design Specifications

* **Background:** `#f5e6c8` (Parchment)
* **Primary Text:** `#2c1810` (Iron Gall Ink)
* **Accent:** `#8b4513` (Saddle Brown)
* **Input Fields:** `#e8d5b0` (Tanned Vellum)
* **Response Box:** Glassmorphic container with `overflow-y: auto` for handling extensive text generation.

---

##  Performance Note
This application interfaces with a backend hosted on **Render’s Free Tier**. If the service has been inactive, the initial "Translate" request may trigger a "cold start," resulting in a latency of 30–50 seconds while the server instance spins up.

---

**Would you like me to help you refine the CSS file to match these design specifications exactly?**
