import {
  NavBarContext,
  NavBarContextType,
} from "components/contexts/NavBarContext";
import { useContext } from "react";

export const useNavBarContext = (): NavBarContextType => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBarContext must be used within a NavBarProvider");
  }
  return context;
};
