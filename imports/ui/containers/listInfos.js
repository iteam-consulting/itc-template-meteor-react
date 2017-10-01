import {withTracker} from 'meteor/react-meteor-data';
import {Links} from '../../api/links/links.js';
import {Meteor} from 'meteor/meteor';

import Info from '../components/info';

export default withTracker(() => {
  const handle = Meteor.subscribe('links.all');
  const loading = !handle.ready();
  return {
    loading,
    infos: Links.find().fetch(),
  };
})(Info);
