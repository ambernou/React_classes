export const selectAstroInfo = (state) => state.astroInfo.astroInfoData;
export const selectAstroInfoLoading = (state) => state.astroInfo.request.status === "LOADING";
export const selectAstroInfoError = (state) => state.astroInfo.request.error;