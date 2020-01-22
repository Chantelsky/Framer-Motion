import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Gestureanim = styled(motion.button)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const Gesture = () => (
  <Gestureanim button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);
