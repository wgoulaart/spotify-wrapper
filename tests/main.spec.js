import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

// Informando para o chai usar a interface do sinon-chai
chai.use(sinonChai);

// Informando para o sinonStubPromise usar os métodos do sinon
sinonStubPromise(sinon);

// Criando variavel Global do Fetch -> node-fetch
global.fetch = require('node-fetch');


import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotfy Wrapper', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtist method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylist', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        const artists = search('acdc', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=acdc&type=artist');

        const albums = search('acdc', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=acdc&type=album');
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('acdc', ['artist', 'album']);
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=acdc&type=artist,album');
      });
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json' });
      const artists = search('acdc', 'artist');

      // Using .eql because is to deeply equal
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('SearchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('acdc');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = searchAlbums('acdc');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=acdc&type=album');
    });

  });

  describe('SearchArtists', () => {
    it('should call fetch function', () => {
      const artist = searchArtists('acdc');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artist = searchArtists('acdc');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=acdc&type=artist');
    });

  });

  describe('SearchTracks', () => {
    it('should call fetch function', () => {
      const track = searchTracks('acdc');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const track = searchTracks('acdc');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=acdc&type=track');
    });
  });

  describe('SearchPlaylists', () => {
    it('should call fetch function', () => {
      const playlist = searchPlaylists('acdc');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlist = searchPlaylists('acdc');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=acdc&type=playlist');
    });
  });


});
