/* global fetch */
const search = () => fetch('https://api.spotify.com/v1/search');
const searchAlbums = () => {};
const searchArtist = () => {};
const searchTracks = () => {};
const searchPlaylists = () => {};

export { search, searchAlbums, searchArtist, searchTracks, searchPlaylists };
