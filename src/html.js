import React from 'react';
import PropTypes from 'prop-types';
import faviconApple from './static/favicons/apple-touch-icon.png';
import favicon32 from './static/favicons/favicon-32x32.png';
import favicon16 from './static/favicons/favicon-16x16.png';
import manifest from './static/favicons/manifest.json';
import safariPinned from './static/favicons/safari-pinned-tab.svg';
import faviconICO from './static/favicons/favicon.ico';

class HTML extends React.Component {
  render() {
    const { postBodyComponents, headComponents, body } = this.props;
    let styles;
    if (process.env.NODE_ENV === 'production') {
      try {
        // eslint-disable-next-line import/no-webpack-loader-syntax
        styles = require('!raw-loader!../public/styles.css');
      } catch (e) {
        console.log(e);
      }
    }

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="manifest" href={manifest} />
          <link rel="mask-icon" href={safariPinned} color="#a89472" />
          <link rel="shortcut icon" href={faviconICO} />
          {headComponents}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  postBodyComponents: PropTypes.node.isRequired,
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired
};

export default HTML;
