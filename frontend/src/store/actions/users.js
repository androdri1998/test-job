export const userActions = {
  GET_USER: '@user/GET_USER',
};


export const getUser = async (id) => {
  const user = {
    id,
    username: "André Rodrigues"
  }

  return {
    type: userActions.GET_USER,
    payload: user
  }
}