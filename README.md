# WoW Forever Launch Party

This is a web development portfolio project built for the CodePath WEB 101 program. It presents a fictional World of Warcraft: Forever launch LAN party, with event information and an interactive RSVP experience.

## Project Description

The site acts as an event landing page for Aurora's all-night gaming party. Visitors can read about the event, review its schedule and practical details, explore related links, and add an RSVP using the on-page form. The design uses a Warcraft-inspired dark-and-gold color palette.

## Key Features

- Fixed navigation links to the About and Schedule sections, plus external game resources.
- Event introduction with an embedded YouTube trailer, event description, and schedule.
- RSVP form that checks that each field has at least two characters and that the email contains an `@` before adding a participant.
- Personalized confirmation modal after a valid RSVP. The modal closes with its button or automatically after five seconds.
- Light mode toggle and a Reduce Motion toggle.
- Scroll reveal animation for schedule content.
- Links to official and community World of Warcraft resources.

## Technologies Used

- **HTML5** for page structure, content, form controls, and embedded media.
- **CSS3** for layout, colors, button states, modal styling, and reveal animations.
- **JavaScript** for theme and motion controls, RSVP validation and list updates, scroll behavior, and the confirmation modal.
- **YouTube** for the embedded trailer.

## Run the Website Locally

This is a static website and does not require installing project dependencies or building it.

1. Download or clone the project and open its folder in a terminal.
2. Start a local web server. If Python is installed, run:

   ```powershell
   python -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser.
4. To stop the server, press `Ctrl+C` in the terminal.

You can also open `index.html` directly in a browser, though serving it locally is generally preferable. The embedded trailer and external resource links require an internet connection.