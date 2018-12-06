import { connect } from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import {requestAllPokemon} from '../../actions/pokemon_actions';

const mSTP = state => ({
  pokemon: selectAllPokemon(state)
});

const mDTP = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mSTP,
  mDTP
)(PokemonIndex);