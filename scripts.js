document.addEventListener("DOMContentLoaded", function () {
  // Assume episodes is an array of objects with episode details
  const episodes = [
    { title: "Episode 1: Chicken Crisis", description: "Description for Episode 1", audioUrl: "EP1 Chicken Crisis.mp3" },
    { title: "Episode 2: OceanGate", description: "Description for Episode 2", audioUrl: "EP2 Under the Atlantic.mp3" },
    // Add more episodes as needed
  ];

  const episodesList = document.getElementById("episodes-list");

  episodes.forEach((episode, index) => {
    const episodeCard = document.createElement("div");
    episodeCard.className = "card mb-3";

    episodeCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${episode.title}</h5>
        <p class="card-text">${episode.description}</p>
        <audio controls>
          <source src="${episode.audioUrl}" type="audio/mp3">
          Your browser does not support the audio tag.
        </audio>
      </div>
    `;

    episodesList.appendChild(episodeCard);
  });
});
