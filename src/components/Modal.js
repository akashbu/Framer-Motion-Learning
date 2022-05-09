import React from "react";
import {  useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "200px", 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }

const Modal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate()
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another Pizza?</p>
              <button onClick={() => {
                  setShowModal(false)
                  navigate("/")}}>Start Again</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
