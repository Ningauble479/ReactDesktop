import React, { createContext, useReducer, useContext } from "react";

// Your list of fake ads
const initialAds = [
  {
    id: 1,
    title: "Click for 1 free raccoon",
    description: "Limited time offer. Zero catch.*",
    image: "https://via.placeholder.com/150",
    link: "https://raccoon-empire.biz",
    type: "AI Generated"
  },
  {
    id: 2,
    title: "You won a left shoe!",
    description: "No right shoe included.",
    image: "https://via.placeholder.com/150",
    link: "https://oneshoefits.com",
    type: "AI Generated"
  },
  // Add more...
];

const initialState = {
  ads: initialAds,
  seenAds: new Set(),
  clickedAds: new Set(),
  activeAd: null,
};

const AdContext = createContext();

function adReducer(state, action) {
  switch (action.type) {
    case "MARK_SEEN":
      return {
        ...state,
        seenAds: new Set([...state.seenAds, action.id]),
      };
    case "MARK_CLICKED":
      return {
        ...state,
        clickedAds: new Set([...state.clickedAds, action.id]),
      };
    case "SET_ACTIVE_AD":
      return {
        ...state,
        activeAd: action.ad,
      };
    default:
      return state;
  }
}

export function AdProvider({ children }) {
  const [state, dispatch] = useReducer(adReducer, initialState);

  const generateAd = () => {
    const unseen = state.ads.filter((ad) => !state.seenAds.has(ad.id));
    const unClicked = state.ads.filter((ad) => !state.clickedAds.has(ad.id));

    const ad = unseen.length
      ? unseen[Math.floor(Math.random() * unseen.length)]
      : unClicked.length
      ? unClicked[Math.floor(Math.random() * unClicked.length)]
      : null;
    if (ad) {
      dispatch({ type: "MARK_SEEN", id: ad.id });
      dispatch({ type: "SET_ACTIVE_AD", ad });
    }
  };

  const markClicked = (id) => {
    dispatch({ type: "MARK_CLICKED", id });
  };

  return (
    <AdContext.Provider
      value={{
        ads: state.ads,
        seenAds: state.seenAds,
        clickedAds: state.clickedAds,
        activeAd: state.activeAd,
        generateAd,
        markClicked,
      }}
    >
      {children}
    </AdContext.Provider>
  );
}

export function useAdContext() {
  const context = useContext(AdContext);
  if (!context) {
    throw new Error("useAdContext must be used inside an AdProvider");
  }
  return context;
}
