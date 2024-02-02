import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    linkType: Attribute.Enumeration<['github', 'livewebsite', 'misc']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.link': LinkLink;
    }
  }
}
