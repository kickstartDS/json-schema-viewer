import React from 'react';
import OpenIcon from '@atlaskit/icon/glyph/open';

type LinkRendererProps = {
  // To comply with 'react-markdown' components types
  [x: string]: any;
  children: React.ReactNode;
  href: string;
};

export const isExternalLink = (href: string): boolean => {
  return ![
    () => href.startsWith('/'),
    () => href.startsWith('.'),
    () => href.startsWith('#'),
  ].some(match => match());
};

export const LinkRenderer: React.FunctionComponent<LinkRendererProps> = props => {
  const isExternal = isExternalLink(props.href);

  return (
    <a href={props.href} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : ''}>
      {props.children}{isExternal && <OpenIcon label="Follow" size="small" />}
    </a>
  );
};