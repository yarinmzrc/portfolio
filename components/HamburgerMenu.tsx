import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";

interface HamburgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

function HamburgerMenu({ toggleMenu, isMenuOpen }: HamburgerMenuProps) {
  return (
    <div className="md:hidden z-50">
      <AnimatePresence mode="wait">
        {isMenuOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <CgClose
              className="text-2xl cursor-pointer hover:text-primary"
              onClick={toggleMenu}
            />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <CgMenuRightAlt
              className="text-2xl cursor-pointer hover:text-primary"
              onClick={toggleMenu}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HamburgerMenu;
