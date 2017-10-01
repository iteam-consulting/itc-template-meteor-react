import React from 'react';

/**
 * Not found component
 */
class NotFound extends React.Component {
  /**
   * Render the not found component
   * @return {React.ReactNode} The renderable coponent.
   */
  render() {
    return (
      <div name="App_notFound">
        <div id="not-found">
          <div className="not-found-image">
            <img src="/img/404.svg" alt="" />
          </div>
          <div className="not-found-title">
            <h1>Sorry, that page doesn&apos;t exist</h1>
            <a href="/" className="gotohomepage">Go to home</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
