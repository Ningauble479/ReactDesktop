import React, { createContext, useReducer, useContext } from "react";
import Raccoon from "../IMG/Ads/AIGenerated/Raccoon.png";
import LeftShoe from "../IMG/Ads/AIGenerated/LeftShoe.png";
import EmotionalSupportJuice from "../IMG/Ads/AIGenerated/EmotionalSupportJuice.png";
import MysteryBox from "../IMG/Ads/AIGenerated/MysteryBox.png";
import RentAThought from "../IMG/Ads/AIGenerated/RentAThought.png";
import Goldfish from "../IMG/Ads/AIGenerated/Goldfish.png";
import Soap from "../IMG/Ads/AIGenerated/Soap.png";
import Sock from "../IMG/Ads/AIGenerated/Sock.png";
import SadPlate from "../IMG/Ads/AIGenerated/SadPlate.png";
import JuiceAcademy from "../IMG/Ads/AIGenerated/JuiceAcademy.png";

import { AppsContext } from "./appsContext";
import { adSystem } from "../Data/Apps";
// Your list of fake ads
const initialAds = [
  {
    id: 1,
    title: "Click for 1 free raccoon",
    description: "Limited time offer. Zero catch.*",
    image: Raccoon,
    link: "https://raccoon-empire.biz",
    type: "AI Generated"
  },
  {
    id: 2,
    title: "You won a left shoe!",
    description: "No right shoe included.",
    image: LeftShoe,
    link: "https://oneshoefits.com",
    type: "AI Generated"
  },
  {
    id: 3,
    title: "Free Emotional Support Juice Box",
    description: "Now with extra existential flavor.",
    image: EmotionalSupportJuice,
    link: "https://juicefortears.biz"
  },
  {
    id: 4,
    title: "Mystery Box of Disappointment",
    description: "What's inside? Regret, probably.",
    image: MysteryBox,
    link: "https://disappointify.net"
  },
  {
    id: 5,
    title: "Rent-A-Thought™",
    description: "Outsource your brain for just $0.99/hour.",
    image: RentAThought,
    link: "https://mentalrental.org"
  },
  {
    id: 6,
    title: "Win 3 Slightly Used Goldfish",
    description: "One might still be alive. No promises.",
    image: Goldfish,
    link: "https://fishbucket.expert"
  },
  {
    id: 7,
    title: "Soap for Developers",
    description: "Wash away bugs, not sins.",
    image: Soap,
    link: "https://cleancommitment.dev"
  },
  {
    id: 8,
    title: "Free Sock With Deep Lore",
    description: "Ask it about 1994.",
    image: Sock,
    link: "https://loreweaver.socks"
  },
  {
    id: 9,
    title: "Rent-a-Plate™",
    description: "Dinner’s served, emotional baggage included.",
    image: SadPlate,
    link: "https://sadplate.delivery"
  },
  {
    id: 10,
    title: "Become Juice Certified™",
    description: "You *are* the juice now.",
    image: JuiceAcademy,
    link: "https://juiceacademy.biz"
  }
];

const initialState = {
  ads: initialAds,
  seenAds: new Set(),
  clickedAds: new Set(),
  activeAd: new Set(),
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
    case "ADD_ACTIVE_AD":
      return {
        ...state,
        activeAd: new Set([...state.activeAd, action.ad]),
      };
    default:
      return state;
  }
}

export function AdProvider({ children }) {
  const [state, dispatch] = useReducer(adReducer, initialState);

  const { addToList } = useContext(AppsContext);

  const generateAd = ({temp}) => {
    const unseen = state.ads.filter((ad) => !state.seenAds.has(ad.id));
    const unClicked = state.ads.filter((ad) => !state.clickedAds.has(ad.id));

    const ad = unseen.length
      ? unseen[Math.floor(Math.random() * unseen.length)]
      : unClicked.length
      ? unClicked[Math.floor(Math.random() * unClicked.length)]
      : null;
    if (ad) {
      dispatch({ type: "ADD_ACTIVE_AD", ad });
      if (!temp) markSeen(ad.id);
    }

    return ad;
  };

  const markClicked = (id) => {
    dispatch({ type: "MARK_CLICKED", id });
    addToList(adSystem);
  };

  const markSeen = (id) => {
    dispatch({ type: "MARK_SEEN", id });
  };
  

  return (
    <AdContext.Provider
      value={{
        ads: state.ads,
        seenAds: state.ads.filter((ad) => state.seenAds.has(ad.id)),
        clickedAds: state.ads.filter((ad) => state.clickedAds.has(ad.id)),
        activeAds: state.ads.filter((ad) => state.activeAd.has(ad.id)),
        unseenAds: state.ads.filter((ad) => !state.seenAds.has(ad.id)),
        generateAd,
        markClicked,
        markSeen,
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
