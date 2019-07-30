import React from 'react';
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { connect } from "react-redux"

class App extends React.Component {
  render() {

    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Harrello</h2>
          <div style={styles.listsContainer}>
          { lists.map(list =>
            <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
          )}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
