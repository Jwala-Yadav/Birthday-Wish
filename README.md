# 🎂 Happy Birthday Loretta Madam - Dynamic Website

This is a special, single-page, dynamic website created by Jwala Yadav to celebrate the birthday of Loretta Stanny Pinto Madam (Jt. Director of SKC).

It's built to be a "technical" and heartfelt birthday card, combining synchronized animations, music, and dynamic text to create a memorable experience. It is designed to be mobile-first, as it's expected to be viewed on a phone.

## 🚀 Live Demo

You can view the live website here:
**[https://your-netlify-link.netlify.app](https://lorettapinto.netlify.app))**

---

## ✨ Key Features

* **Attractive Welcome Screen:** A "Click to Open" start screen with a "cracker" sparkle animation.
* **Auto-playing Music:** Background music starts automatically after the first click.
* **Pause/Play Button:** A functional button that allows the user to pause or resume the music at any time.
* **Synchronized Slideshow:** The main image fades to a new one at the exact same time each new wish starts typing.
* **Dynamic Typing Wishes:** A list of 11 different birthday wishes is typed out one by one, using the **TypeIt.js** library.
* **Confetti & Crackers:** An instant "cracker" animation fires from the sides and top of the screen with every new wish, using the **canvas-confetti.js** library.
* **Mobile-First Design:** Fully responsive and optimized to look perfect on a mobile phone.
* **Inspect Disabled:** The basic browser right-click "Inspect" menu is disabled.


---

## 📸 Screenshots

**The Welcome Screen:**

![start](https://github.com/user-attachments/assets/8745bb58-b2b9-471d-b1c2-f9c3e08638e4)

**The Main Page:**

![main](https://github.com/user-attachments/assets/4ae8f88e-f787-41f8-a886-ae84c3a4c3ec)

**The Other Page:**

![Other](https://github.com/user-attachments/assets/93fb6eb1-cdff-4072-a902-cdd2eab55bee)

**The Celebration Page:**

![Celebration](https://github.com/user-attachments/assets/91f8e0c6-6ec1-42b7-a660-c5a187abb692)


---

## 🛠️ Technologies Used

* **HTML5:** For the website structure.
* **CSS3:** For all styling, responsiveness (Media Queries), and the "sparkle" animation.
* **JavaScript (ES6+):** For all the logic, event listeners, and synchronization.
* **[TypeIt.js](https://typeitjs.com/):** The external library used for the dynamic typing animation.
* **[canvas-confetti.js](https://github.com/catdad/canvas-confetti):** The external library used for the "cracker" and confetti effects.

---

## 📁 Project Structure

Here is how all the files are organized:

├── 📄 index.html (The main website structure)

├── 📄 style.css (All the styles and animations)

├── 📄 script.js (All the "technical" logic)

├── 🎵 birthday-song.mp3 (The background music file)

└── 📁 images/ ├── 🖼️ pic1.jpg.JPG ├── 🖼️ pic2.jpg.JPG └── ... (all 10+ images)

---

## 🔧 How to Customize (How I Added All The Things)

This is how you can easily change the content of the website.

### 1. How to Change the Images

1.  Place all your new images (e.g., `new-photo.jpg`) inside the `/images/` folder.
2.  Open the **`index.html`** file.
3.  Find the `<div class="slideshow-container">` section.
4.  Change the `src` path for each `<img>` tag to match your new image names.

    **Example:**
    ```html
    <img src="images/pic1.jpg.JPG" class="slide active" alt="Birthday Memory 1">
    <img src="images/new-photo.jpg" class="slide active" alt="New Memory">
    ```

### 2. How to Change the Birthday Wishes

1.  Open the **`script.js`** file.
2.  Find the section labeled `// 4. Start the synchronized wishes and slideshow`.
3.  Inside `new TypeIt(...)`, find the `strings: [...]` array.
4.  Add, remove, or edit any of the text strings in this list.

    **Example:**
    ```javascript
    strings: [
        "This is the first wish!",
        "This is the second wish!",
        "You can add as many as you want here."
    ],
    ```

### 3. How to Change the Music

1.  Get your new music file (e.g., `new-song.mp3`).
2.  Place it in the **main project folder** (next to `index.html`).
3.  Open the **`index.html`** file.
4.  Find the `<audio id="birthday-music" ...>` tag.
5.  Change the `src` to your new file's name.

    **Example:**
    ```html
    <audio id="birthday-music" src="birthday-song.mp3" loop></audio>
    <audio id="birthday-music" src="new-song.mp3" loop></audio>
    ```

---

## 💻 How to Run This Project

1.  Download or clone the project folder.
2.  **Best Method (Recommended):** Deploy the folder to a free service like **[Netlify](https://www.netlify.com/)**. Just drag and drop the zipped project folder onto their deploy page. This automatically fixes all browser security/cache issues and gives you a shareable link.
3.  **Local Method:** Open the `index.html` file in a web browser.
    * **If the pause button or music fails:** Your browser is probably blocking it or using an old cached file.
    * **To Fix:** Do a "Hard Refresh" (**`Ctrl+Shift+R`** on Windows/Linux, **`Cmd+Shift+R`** on Mac).

## 👤 Author

* **Jwala Yadav**
