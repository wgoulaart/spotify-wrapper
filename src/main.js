/* global fetch */
const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json());

const searchAlbums = () => {};
const searchArtist = () => {};
const searchTracks = () => {};
const searchPlaylists = () => {};

export { search, searchAlbums, searchArtist, searchTracks, searchPlaylists };
