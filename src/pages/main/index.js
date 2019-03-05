import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as FavoriteActions } from "../../store-redux/ducks/favorites";

class Main extends Component {
  state = {
    repositoryInput: ""
  };

  handleAddRepo = event => {
    event.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
    this.setState({ repositoryInput: "" });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepo}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Carregar</button>
          {this.props.favoriteProps.loading && <span>Loading...</span>}
          {!!this.props.favoriteProps.error && (
            <span>{this.props.favoriteProps.error}</span>
          )}
        </form>

        <ul>
          {this.props.favoriteProps.data.map(props => (
            <li key={props.id}>
              <p>
                <strong>{props.name}</strong> {props.description}
              </p>
              <a href={props.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favoriteProps: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
