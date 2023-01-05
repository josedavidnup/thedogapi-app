import {
  GET_ALL_BREEDS,
  GET_BREED_DETAIL,
  CREATE_BREED,
  DELETE_BREED,
  GET_BY_NAME,
  GET_FAVORITES,
  GET_TEMPERAMENTS,
  REMOVE_FAVORITES,
  A_Z_FILTER,
  Z_A_FILTER,
  WEIGHT_FILTER_UP,
  WEIGHT_FILTER_DOWN,
  TEMPERAMENT_FILTER,
  LOADING,
  ERROR,
} from '../Actions/action_types';

const initialState = {
  breeds: [],
  allBreeds: [],
  breedDetail: {},
  favorites: [],
  filterBreeds: [],
  temperaments: [],
  breedsPerPage: 8,
  currentPage: 10,
  loading: false,
  error: '',
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BREEDS:
      return {
        ...state,
        breeds: payload,
        allBreeds: payload,
        loading: false,
        error: '',
      };
    case GET_BY_NAME:
      return {
        ...state,
        breeds: payload,
        error: '',
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_BREED_DETAIL:
      return {
        ...state,
        breedDetail: payload,
        loading: false,
        error: '',
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat(payload),
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((e) => e.id !== payload),
      };
    case CREATE_BREED:
      return {
        ...state,
        breeds: [...state.breeds, payload],
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    case A_Z_FILTER:
      let aZ = [
        ...state.allBreeds.sort((a, b) => a.name.localeCompare(b.name)),
      ];
      return {
        ...state,
        breeds: aZ,
      };

    case Z_A_FILTER:
      let zA = [
        ...state.allBreeds.sort((a, b) => b.name.localeCompare(a.name)),
      ];
      return {
        ...state,
        breeds: zA,
      };

    case TEMPERAMENT_FILTER:
      let tempFilter = [];
      state.allBreeds.forEach((e) => {
        let filter = e.temperaments?.split(', ');
        filter?.includes(payload) && tempFilter.push(e);
      });
      return {
        ...state,
        breeds: tempFilter,
      };
    case WEIGHT_FILTER_UP:
      state.allBreeds.forEach((e) => {
        let filter = e.weight.toString().split(' - ');
        e.weight = Math.round(
          filter.reduce((prev, next) => parseInt(prev) + parseInt(next)) /
            filter.length
        );
      });
      let up = [...state.allBreeds.sort((a, b) => a.weight - b.weight)];
      return {
        ...state,
        breeds: up,
      };
    case WEIGHT_FILTER_DOWN:
      state.allBreeds.forEach((e) => {
        let filter = e.weight.toString().split(' - ');
        e.weight = Math.round(
          filter.reduce((prev, next) => parseInt(prev) + parseInt(next)) /
            filter.length
        );
      });
      let down = [...state.allBreeds.sort((a, b) => b.weight - a.weight)];
      return {
        ...state,
        breeds: down,
      };
    case DELETE_BREED:
      return {
        ...state,
        breeds: state.breeds.filter((e) => e.id !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
