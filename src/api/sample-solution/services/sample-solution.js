'use strict';

/**
 * sample-solution service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-solution.sample-solution');
