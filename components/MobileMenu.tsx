import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

function MobileMenu() {
  return (
    <motion.div
      className="backdrop-fallback fixed inset-0 z-40 flex h-screen flex-col items-center justify-center gap-6 text-3xl text-secondary-light md:hidden"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <NavLinks />
    </motion.div>
  );
}

export default MobileMenu;
