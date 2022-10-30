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
} from '../Actions/action_types';

const initialState = {
  breeds: [],
  breedDetail: {},
  favorites: [],
  filterBreeds: [],
  temperaments: [],
  breedsPerPage: 8,
  currentPage: 10,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BREEDS:
      return {
        ...state,
        breeds: payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        breeds: payload,
      };
    case GET_BREED_DETAIL:
      return {
        ...state,
        breedDetail: payload,
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
      let aZ = [...state.breeds.sort((a, b) => a.name.localeCompare(b.name))];
      return {
        ...state,
        filterBreeds: aZ,
      };

    case Z_A_FILTER:
      let zA = [...state.breeds.sort((a, b) => b.name.localeCompare(a.name))];
      return {
        ...state,
        filterBreeds: zA,
      };

    case TEMPERAMENT_FILTER:
      let tempFilter = [];
      state.breeds.forEach((e) => {
        let filter = e.temperaments?.split(', ');
        filter?.includes(payload) && tempFilter.push(e);
      });
      return {
        ...state,
        filterBreeds: tempFilter,
      };
    case WEIGHT_FILTER_UP:
      state.breeds.forEach((e) => {
        let filter = e.weight.toString().split(' - ');
        e.weight = Math.round(
          filter.reduce((prev, next) => parseInt(prev) + parseInt(next)) /
            filter.length
        );
      });
      let up = [...state.breeds.sort((a, b) => a.weight - b.weight)];
      return {
        ...state,
        filterBreeds: up,
      };
    case WEIGHT_FILTER_DOWN:
      state.breeds.forEach((e) => {
        let filter = e.weight.toString().split(' - ');
        e.weight = Math.round(
          filter.reduce((prev, next) => parseInt(prev) + parseInt(next)) /
            filter.length
        );
      });
      let down = [...state.breeds.sort((a, b) => b.weight - a.weight)];
      return {
        ...state,
        filterBreeds: down,
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
