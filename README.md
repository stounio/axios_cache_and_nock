# Axios, Cache, and Nock

## Introduction

This project provides an example of an Axios Http client using an in memory cache with Axios-Cache-Interceptor.
It contains examples of tests that use Nock mocking framework for intercepting HTTP requests sent by the Axios client.

Packages on NPM:

* [Axios](https://www.npmjs.com/package/axios)
* [Axios Cache Interceptor](https://www.npmjs.com/package/axios-cache-interceptor)
* [Nock](https://www.npmjs.com/package/nock)

## Considerations on Axios Cache Interceptor and Nock

`Axios Cache Interceptor` is the most recent solution for client side caching when using Axios. Although it is not yet as a popular framework as `Axios Cache Adaptor`, it is the most active one with fast growing adoption.

`Nock` is currently the most popular mocking framework for intercepting HTTP requests and emulating interactions with a backend service. Its implementation is superior to alternative mocking framework such as `AxiosMock` and its interface easier to use when instrumenting calls to a backend service.

# Run the tests

```shell
npm install
npm test
```
