import { GraphQLClient, gql } from 'graphql-request';

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
if (!domain || !token) {
  console.warn('[Shopify] Missing env config');
}

const endpoint = `https://${domain}/api/2024-07/graphql.json`;

export const shopify = new GraphQLClient(endpoint, {
  headers: { 'X-Shopify-Storefront-Access-Token': token! }
});

export async function getBooks() {
  const query = gql`
    query Books {
      products(first: 20, query: "tag:book") {
        edges { node { id title handle featuredImage { url altText } priceRange { minVariantPrice { amount currencyCode } } } }
      }
    }
  `;
  const data = await shopify.request(query);
  return data.products.edges.map((e:any)=>e.node);
}
