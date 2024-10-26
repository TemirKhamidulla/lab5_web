// Define the audio files
const notes = {
    C: new Audio('audio\C.mp3'),
    D: new Audio('audio\D.mp3'),
    E: new Audio('audio\E.mp3'),
    F: new Audio('audio\F.mp3'),
    G: new Audio('audio\G.mp3'),
    A: new Audio('audio\A.mp3'),
    B: new Audio('audio\B.mp3')
};

// Function to play audio
function playNote(note) {
    notes[note].currentTime = 0;
    notes[note].play();
}

// Add click event listeners to each key
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        playNote(key.id);
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 100);
    });
});
