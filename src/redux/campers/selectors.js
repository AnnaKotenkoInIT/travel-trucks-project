export const selectAllCampers = state => state.campers.items;

export const selectCurrentCamper = state => state.campers.currentCamper;

export const selectLoading = state => state.campers.loading;

export const selectError = state => state.campers.error;

export const selectFilteredCampers = state => {
  const campers = state.campers.items;

  const { location, form, engine, transmission } = state.filters.applied;

  return campers.filter(camper => {
    const matchLocation = location ? camper.location?.toLowerCase().includes(location.toLowerCase()) : true;

    const matchForm = form ? camper.form?.toLowerCase() === form.toLowerCase() : true;

    const matchEngine = engine ? camper.engine?.toLowerCase() === engine.toLowerCase() : true;

    const matchTransmission = transmission ? camper.transmission?.toLowerCase() === transmission.toLowerCase() : true;

    return matchLocation && matchForm && matchEngine && matchTransmission;
  });
};
