'use strict';

/**
 * waitlist router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::waitlist.waitlist');
