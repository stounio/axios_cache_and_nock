const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http');

const { expect } = chai;
chai.use(chaiAsPromised);

const { greetings } = require('../src/hello_world_client');

const TEST_DOMAIN = 'https://hello.world.local';

beforeEach(() => {
  process.env.HELLO_WORLD_DOMAIN = TEST_DOMAIN;
});

describe('Axios client', async () => {
  it('should greet the world with hello', async () => {
    const scope = nock(TEST_DOMAIN)
      .get(/greetings/)
      .reply(200, { message: 'Hello World' });

    const response = await greetings();

    expect(response.status).to.equal(200);
    expect(response.data).to.deep.equal({ message: 'Hello World' });
    scope.done();
  });

  it('should greet WOPR with hello', async () => {
    const scope = nock(TEST_DOMAIN)
      .get('/greetings')
      .query({ name: 'Wopr' })
      .reply(200, { message: 'Hello Wopr' });

    const response = await greetings('Wopr');

    expect(response.status).to.equal(200);
    expect(response.data).to.deep.equal({ message: 'Hello Wopr' });
    scope.done();
  });

  it('should greet HAL with hello from a cached response', async () => {
    const scope = nock(TEST_DOMAIN)
      .get('/greetings')
      .query({ name: 'Hal' })
      .once()
      .reply(200, { message: 'Hello Hal' });

    const firstGreetings = await greetings('Hal');
    const secondGreetings = await greetings('Hal');

    expect(firstGreetings.status).to.equal(200);
    expect(secondGreetings.status).to.equal(200);

    expect(firstGreetings.data).to.deep.equal(secondGreetings.data);
    const { data: { message } } = firstGreetings;
    expect(message).to.equal('Hello Hal');
    scope.done();
  });
});

