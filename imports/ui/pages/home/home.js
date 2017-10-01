import React from 'react';

import Hello from '../../components/hello';
import InfoList from '../../containers/listInfos';

/**
 * Home component
 */
class Home extends React.Component {
  /**
   * Render the home component
   * @return {React.ReactNode} The renderable node.
   */
  render() {
    return (
      <div>
        <Hello />
        <InfoList />
      </div>
    );
  }
}

export default Home;
