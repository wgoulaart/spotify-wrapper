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
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });

});
