import { atom, selector } from "recoil";
import useUserActions from "../_actions/user.actions";
import UserLogged from "../_models/user-logged.model";



const userState = atom<UserLogged | null>({
  key: "userState",
  default: null
});

// const userCurentState = selector({
//   key: "UserCurentState",
//   get: ({ get }) => {
//     const user = get(userState);
//     const userActions = useUserActions();

//     if (user != null) return user;

//     if (userActions.checkToken()) {
//       // return get(userState)
//       return userActions.refresh().then(res => {
//         return res
//       })
//     }

//     return user;

//   },


// })

export { userState }
