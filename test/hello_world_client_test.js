const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { expect } = chai;

chai.use(chaiAsPromised);

const { sendGetRequest } = require('../src/hello_world_client');

const TEST_DOMAIN = 'https://hello.world.local';

beforeEach(() => {
  process.env.HELLO_WORLD_DOMAIN = TEST_DOMAIN;
});

describe('Axios client', async () => {
  it('should greet the world with hello', async () => {
    const response = await sendGetRequest('/greetings');
    expect(response.status).to.equal(200);
    expect(response.data).to.equal({ message: 'Hello World' });
  });
});

