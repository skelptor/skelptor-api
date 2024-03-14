import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogSectionSection extends Schema.Component {
  collectionName: 'components_blog_section_sections';
  info: {
    displayName: 'section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['text', 'media']>;
    content: Attribute.RichText;
    media: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-section.section': BlogSectionSection;
    }
  }
}
