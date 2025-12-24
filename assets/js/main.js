document.addEventListener('DOMContentLoaded', () => {


    // Create hanging lights
    const lightsContainer = document.querySelector('.lights');
    if (lightsContainer) {
        const numberOfLights = Math.floor(window.innerWidth / 40);
        const lightList = document.createElement('ul');

        for (let i = 0; i < numberOfLights; i++) {
            const light = document.createElement('li');
            light.style.left = `${i * 40}px`;
            
            const randomDelay = Math.random() * 2;
            light.style.animationDelay = `${randomDelay}s`;

            if (i % 2 === 0) {
                light.style.animationName = 'blink-red';
                light.style.animationDuration = '1s';
            } else {
                light.style.animationName = 'blink-green';
                light.style.animationDuration = '1.5s';
            }
            light.style.animationIterationCount = 'infinite';
            
            lightList.appendChild(light);
        }
        lightsContainer.appendChild(lightList);
    }

    // Letter Modal Functionality
    const letterCard = document.getElementById('letterCard');
    const letterModal = document.getElementById('letterModal');
    const closeLetterBtn = document.getElementById('closeLetter');
    // const editLetterBtn = document.getElementById('editLetterBtn'); // Removed as button is no longer in HTML
    const letterContent = letterModal.querySelector('.letter-content');
    const letterMessagePs = letterModal.querySelectorAll('.letter-content p:not(.signature)');
    const signatureP = letterModal.querySelector('.signature');
    const backgroundMusic = document.getElementById('background-music');
    const unmuteMusicButton = document.getElementById('unmuteMusicButton');

    // Attempt to play music on DOMContentLoaded (it's muted by default)
    if (backgroundMusic) {
        backgroundMusic.play().then(() => {
            console.log("Background music started muted successfully.");
        }).catch(e => {
            console.error("Muted background music autoplay blocked or failed:", e);
            // If even muted autoplay fails, log it but don't show an extra button,
            // the unmute button will still work.
        });

        backgroundMusic.addEventListener('canplaythrough', () => {
            console.log("Background music is ready to play.");
        });
        backgroundMusic.addEventListener('error', (e) => {
            console.error("Error loading background music:", e);
            console.error("Audio source:", backgroundMusic.src);
            console.error("Network state:", backgroundMusic.networkState);
        });
    }

    // Unmute Music Button functionality
    if (unmuteMusicButton && backgroundMusic) {
        const updateMusicButton = () => {
            if (!backgroundMusic.paused && !backgroundMusic.muted) {
                unmuteMusicButton.textContent = 'Stop Music';
                unmuteMusicButton.style.backgroundColor = '#f44336'; // Red for stop
            } else {
                unmuteMusicButton.textContent = 'Play Music';
                unmuteMusicButton.style.backgroundColor = '#4CAF50'; // Green for play
            }
        };

        // Initial update
        updateMusicButton();

        // Listen for play/pause/volume changes to update button text
        backgroundMusic.addEventListener('play', updateMusicButton);
        backgroundMusic.addEventListener('pause', updateMusicButton);
        backgroundMusic.addEventListener('volumechange', updateMusicButton); // Catches muted state changes

        unmuteMusicButton.addEventListener('click', () => {
            if (!backgroundMusic.paused && !backgroundMusic.muted) { // If currently playing and unmuted
                backgroundMusic.pause();
                backgroundMusic.muted = true; // Also mute when stopping
            } else { // If currently paused or muted
                backgroundMusic.muted = false; // Unmute first
                backgroundMusic.play().catch(e => console.error("Failed to play music:", e));
            }
            updateMusicButton(); // Update button immediately after click
        });
    }


    // Open letter modal - this no longer triggers music playback directly,
    // as music is handled by muted autoplay and the unmute button.
    letterCard.addEventListener('click', () => {
        console.log("Letter card clicked. Opening modal.");
        
        // Add card pop animation
        letterCard.style.animation = 'card-pop 0.3s ease-out';
        letterCard.addEventListener('animationend', () => {
            letterCard.style.animation = ''; // Reset animation after it ends
        }, { once: true });

        letterModal.style.display = 'flex';
    });


    // Close letter modal when close button is clicked
    closeLetterBtn.addEventListener('click', () => {
        letterModal.style.display = 'none';
    });

    // Close letter modal when clicking outside the content
    window.addEventListener('click', (event) => {
        if (event.target === letterModal) {
            letterModal.style.display = 'none';
        }
    });

    // Edit letter message (Removed functionality as button is no longer in HTML)
    // if (editLetterBtn) { // Conditional check for robustness, though now removed
    //     editLetterBtn.addEventListener('click', () => {
    //         const newMainMessage = prompt("Edit the main message of your letter:");
    //         if (newMainMessage !== null) {
    //             const paragraphs = newMainMessage.split('\n\n');
                
    //             letterMessagePs.forEach((p, index) => {
    //                 if (paragraphs[index]) {
    //                     p.textContent = paragraphs[index];
    //                 } else {
    //                     p.textContent = '';
    //                 }
    //             });

    //             for (let i = letterMessagePs.length; i < paragraphs.length; i++) {
    //                 const newP = document.createElement('p');
    //                 newP.textContent = paragraphs[i];
    //                 letterContent.insertBefore(newP, signatureP);
    //             }
    //         }

    //         const newSignature = prompt("Edit your signature:");
    //         if (newSignature !== null) {
    //             signatureP.innerHTML = newSignature.replace(/\n/g, '<br>');
    //         }
    //     });
    // }
});