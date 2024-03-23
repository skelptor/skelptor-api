'use strict';

/**
 * waitlist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::waitlist.waitlist');
