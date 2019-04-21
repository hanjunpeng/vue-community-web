const state = {
  active: ""
};

const mutations = {
  setMenuActive(state: { active: any }, status: any) {
    state.active = status;
  }
};

export default {
  state,
  mutations
};
