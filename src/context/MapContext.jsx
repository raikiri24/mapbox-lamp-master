import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import axios from 'axios';

const MapContext = createContext();

const useMap = () => useContext(MapContext);

const initialState = {
  isLoading: true,
  lamp1: {},
  lamp2: {},
  place: '',
  volts: 0,
  power: 0,
  luminosity: 0,
  current: 0,
  actionId: -1,
  isOpen: true,
};

function reducer(state, action) {
  const { type, errorMsg, ...payload } = action;
  switch (type) {
    case 'FETCHING':
      return { ...state, isLoading: true };
    case 'SAVING':
      return { ...state, isSaving: true };
    case 'FETCHED': {
      return { ...state, isLoading: false, ...payload, actionId: -1 };
    }

    case 'VIEW_LAMPS': {
      return { ...state, isOpen: true, actionId: payload.id };
    }

    default:
      return state;
  }
}

function MapProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, lamp1, lamp2 } = state;

  const getLamp1 = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    try {
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/manila`)
        .then((resp) => {
          let data = [];
          data = resp.data;
          const { place, volts, power, luminosity, current } = data;
          dispatch({
            type: 'FETCHED',
            lamp1: data,
            place,
            volts,
            power,
            luminosity,
            current,
          });
        });
      return lamp1;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong in fetching lamps.',
      });
    }
  }, []);

  const getLamp2 = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    try {
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/makati`)
        .then((resp) => {
          let data = [];
          data = resp.data;
          const { place, volts, power, luminosity, current } = data;
          dispatch({
            type: 'FETCHED',
            lamp2: data,
            place,
            volts,
            power,
            luminosity,
            current,
          });
        });
      return lamp2;
    } catch (e) {
      dispatch({
        type: 'ERROR',
        errorMsg: 'Something went wrong in fetching lamps.',
      });
    }
  }, []);

  useEffect(() => {
    async function fetchManilaLamp() {
      await getLamp1();
    }
    if (!lamp1) {
      fetchManilaLamp();
    }
  }, [getLamp1, lamp1]);

  useEffect(() => {
    async function fetchMakatiLamp() {
      await getLamp2();
    }
    if (!lamp2) {
      fetchMakatiLamp();
    }
  }, [getLamp2, lamp2]);

  return (
    <MapContext.Provider value={{ ...state, dispatch, getLamp1, getLamp2 }}>
      {children}
    </MapContext.Provider>
  );
}

export { MapProvider, useMap };
