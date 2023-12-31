/**
 * post controller
 */
import { factories } from '@strapi/strapi'
export const { createCoreController } = require('@strapi/strapi').factories;
export default factories.createCoreController('api::post.post');

//import { factories } from '@strapi/strapi';

/*export default factories.createCoreController('api::post.post', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action
  async exampleAction(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },

  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now()

    return { data, meta };
  },

  // Method 3: Replacing a core action with proper sanitization
  async find(ctx) {
    // validateQuery (optional)
    // to throw an error on query params that are invalid or the user does not have access to
    await this.validateQuery(ctx); 

    // sanitizeQuery to remove any query params that are invalid or the user does not have access to
    // It is strongly recommended to use sanitizeQuery even if validateQuery is used
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi.service('api::restaurant.restaurant').find(sanitizedQueryParams);

    // sanitizeOutput to ensure the user does not receive any data they do not have access to
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  }
}));*/