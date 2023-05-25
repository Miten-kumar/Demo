'use strict';

/**
 * emailsending service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emailsending.emailsending');
