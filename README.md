# Christmas Letter Website

A simple, responsive, and animated Christmas-themed landing page.

## Theme

This project displays a cozy Christmas scene with a night sky, a Christmas tree, and interactive elements. The design is intended to be dark, with glowing lights and a festive feel.

## Features

-   **Animated Scene**: A swaying Christmas tree, blinking lights, and a glowing letter card.
-   **Interactive Letter**: Click the envelope on the tree to open a customizable letter.
-   **Responsive Design**: The layout adapts to desktop, tablet, and mobile screens.

## How to Customize

### Letter Text

To change the message in the letter, open `index.html` and find the `div` with the class `letter-content`. You can edit the text inside this `div`.

```html
<div class="letter-content">
    <h2>Merry Christmas!</h2>
    <p>Your custom message goes here.</p>
    <p>Warmly,</p>
    <p>Your Name</p>
</div>
```

### Colors and Animations

All colors, fonts, and animations can be modified in the CSS files located in the `assets/css/` directory.

-   **`style.css`**: Contains the main styles, including colors, layout, and fonts.
-   **`animations.css`**: Contains the keyframe animations for lights, glows, and other effects.
-   **`responsive.css`**: Contains styles for different screen sizes.

### Christmas Tree Image

This project uses a Christmas tree image located at `assets/images/christmas-tree.png`. To use your own image, replace the file at that location. A transparent PNG file is recommended for the best results. If the image is not present, you will see the alt text.