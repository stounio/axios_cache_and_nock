const Axios = require('axios');
const { setupCache } = require('axios-cache-interceptor/dev');

const axios = setupCache(Axios, {
  // The time until the cached value is expired in milliseconds.
  ttl: 1000 * 60 * 15,

  // If the request should configure the cache based on some standard cache headers, Like
  // Cache-Control, Expires and so on...
  interpretHeader: false,

  // All methods that should activate cache behaviors. If the method is not in this list,
  // it will be completely ignored.
  methods: ['get'],

  // A predicate object that will be used in each request to determine if the request can
  // be cached or not.
  //
  // https://axios-cache-interceptor.js.org/#/pages/per-request-configuration?id=cachecachepredicate
  cachePredicate: {
    statusCheck: (status) => status >= 200 && status < 400,
  },

  // All requests that should have their cache updated once this request is resolved.
  // Normally used to update similar requests or records with newer data.
  //
  // https://axios-cache-interceptor.js.org/#/pages/per-request-configuration?id=cacheupdate
  update: {},

  // If the support for ETag and If-None-Match headers is active. You can use a string to
  // force a custom value for the ETag response.
  //
  etag: false,

  // If we should interpret the If-Modified-Since header when generating a TTL value.
  modifiedSince: false,

  // If we should return a old (possibly expired) cache when the current request failed
  // to get a valid response because of a network error, invalid status or etc.
  staleIfError: false,

  // debug mode
  debug: console.log,
});

module.exports = {
  axios,
};
