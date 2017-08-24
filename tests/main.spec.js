import { expect } from 'chai';
import { search, searchAlbums, searchArtist, searchTracks, searchPlaylists } from '../src/main';

describe('Spotfy Wrapper', () => {

  describe('smoke tests', () => {

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtist method', () => {
      expect(searchArtist).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artist = search();
    });
  });

});
