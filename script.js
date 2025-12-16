// Get song name from URL
const params = new URLSearchParams(window.location.search);
const song = params.get("song") || "perfect";

// Audio
const audio = document.getElementById("audio");
audio.src = `${song}.mp3`;

// Lyrics
fetch(`assets/${song}.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("lyrics").innerText = data.lyrics;
  })
  .catch(() => {
    document.getElementById("lyrics").innerText =
      "Lyrics not available 🎵";
  });
