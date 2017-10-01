
import React from 'react';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';

/**
 * Info component
 */
class Info extends React.Component {
  /**
   * Construct an info list
   */
  constructor() {
    super();
    this.state = {
      title: '',
      url: '',
    };
    this.insert = this.insert.bind(this);
  }

  /**
   * 
   * @param {React.SyntheticEvent} e The form submit event.
   */
  insert(e) {
    e.preventDefault();
    const {title, url} = this.state;
    Meteor.call('links.insert', title, url, (err) => {
      if (err) {
        alert(err);
      } else {
        this.setState({
          title: '',
          url: '',
        });
      }
    });
  }

  /**
   * Render the Info.
   * @return {React.ReactNode} The renderable event.
   */
  render() {
    return (
      <div name="info">
        <h2>Learn Meteor!</h2>
        <ul>
          <li>
            <form className="info-link-add" onSubmit={this.insert}>
              <input value={this.state.title} type="text" name="title"
                placeholder="Title" required
                onChange={({target}) => this.setState({title: target.value})} />
              <input value={this.state.url} type="url" name="url"
                placeholder="Url" required
                onChange={({target}) => this.setState({url: target.value})} />
              <input type="submit" name="submit" value="Add new link" />
            </form>
          </li>
          {this.props.infos.map(({url, title}, i) => (
            <li key={`${url}-${i}`}>
              <a href={url} target="_blank">{title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Info.propTypes = {
  infos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  loading: PropTypes.bool.isRequired,
};

export default Info;
