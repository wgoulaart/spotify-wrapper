import chai, { expect } from 'chai';
import { search, searchAlbums, searchArtitsts, searchPlaylists, searchTracks } from '../src/main';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Spotify Wrapper', () => {

  describe('smoke tests', () => {
    // search (genérico) - mais de 1 tipo
    // searchAlbums
    // searchArtitsts
    // searchPlaylists
    // searchTracks

    it('should exists the search method', () => {
      expect(search).to.exist;
    });

    it('should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exists the searchArtitsts method', () => {
      expect(searchArtitsts).to.exist;
    });

    it('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });

    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

  });

  describe('Generic Search', () => {

  });

});
