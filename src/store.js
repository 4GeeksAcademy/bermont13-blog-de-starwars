export const initialStore = {
  people: [],
  planets: [],
  vehicles: [],
  favorites: [],
};

export const storeReducer = (state, action) => {
  switch (action.type) {
      case "set_people":
          return { ...state, people: action.payload };

      case "set_planets":
          return { ...state, planets: action.payload };

      case "set_vehicles":
          return { ...state, vehicles: action.payload };

      case "add_favorite":
          if (state.favorites.includes(action.payload)) return state;
          return { ...state, favorites: [...state.favorites, action.payload] };

      case "remove_favorite":
          return { ...state, favorites: state.favorites.filter(fav => fav !== action.payload) };

      default:
          return state;
  }
};
