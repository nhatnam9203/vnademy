import { createSlice } from '@reduxjs/toolkit';

export interface ISurfState {
  giftUserId: number[];
  loveUserId: number;
  blockUserId: number;
  matchingUser: any;
  isAnimationHeart: boolean;
  activeIndexRank: number,
  isStartSnimationHeart: boolean,
  dataFriendDetail: any,
}

const initialState: ISurfState = {
  giftUserId: [],
  loveUserId: 0,
  blockUserId: 2,
  matchingUser: null,
  isAnimationHeart: false,
  activeIndexRank: 0,
  dataFriendDetail: null,
  isStartSnimationHeart: false
};

const surfSlice = createSlice({
  name: 'surfKey',
  initialState,
  reducers: {
    addGiftUserId: (state, { payload }) => {
      state.giftUserId = [payload, ...state.giftUserId];
    },
    updateGiftUserId: (state, { payload }) => {
      state.giftUserId = payload;
    },
    updateLoveUserId: (state, { payload }) => {
      state.loveUserId = payload;
    },
    updateBlockUserId: (state, { payload }) => {
      state.blockUserId = payload;
    },
    updateMatchingUser: (state, { payload }) => {
      state.matchingUser = payload;
    },
    setAnimationHeart: (state, { payload }) => {
      state.isAnimationHeart = payload;
    },
    setIsStartAnimationHeart: (state, { payload }) => {
      state.isStartSnimationHeart = payload;
    },
    setActiveIndexRank: (state, { payload }) => {
      state.activeIndexRank = payload;
    },
    setDataFriendDetail: (state, { payload }) => {
      state.dataFriendDetail = payload;
    },
  },
});

export const {
  addGiftUserId,
  updateGiftUserId,
  updateLoveUserId,
  updateBlockUserId,
  updateMatchingUser,
  setAnimationHeart,
  setActiveIndexRank,
  setIsStartAnimationHeart,
  setDataFriendDetail
} = surfSlice.actions;
export default surfSlice.reducer;