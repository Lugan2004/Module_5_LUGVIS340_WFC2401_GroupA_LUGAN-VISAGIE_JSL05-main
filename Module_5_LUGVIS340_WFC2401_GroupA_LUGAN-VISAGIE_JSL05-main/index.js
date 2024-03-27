
// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" }, // Added a new rock song
    { title: "September", artist: "Earth, Wind & Fire", genre: "R&B" }, // Added a new R&B song
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" }, // Added a new rock song
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop" }, // Added a new pop song
    { title: "Respect", artist: "Aretha Franklin", genre: "R&B" } // Added a new R&B song
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};
// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([guardian, genre]) => {
        const playlistSongs = songs.filter(song => song.genre === genre);
        const playlistElement = document.createElement("div");
        playlistElement.classList.add("playlist");
        playlistElement.innerHTML = `<h2>${guardian}'s Playlist</h2>`;
        playlistSongs.forEach(song => {
            const songElement = document.createElement("div");
            songElement.classList.add("song");
            songElement.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            playlistElement.appendChild(songElement);
        });
        return playlistElement;
    });

    // Append playlists to the playlists container
    const playlistsContainer = document.getElementById("playlists");
    playlists.forEach(playlist => playlistsContainer.appendChild(playlist));
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);