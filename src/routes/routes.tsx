import SignUpScreen from "screens/sign_up/sign_up_screen";
import SignInScreen from "screens/sign_in/sign_in_screen";

export const routes = [
    {
      name: "sign-up",
      component: SignUpScreen,
      headerShown: false,
      protected: false
    },
    {
      name: "sign-in",
      component: SignInScreen,
      headerShown: false,
      protected: false
    }
  ]
  