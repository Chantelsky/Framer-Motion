import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Framestyle = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const Keyframes = () => (
  <Framestyle
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"]
    }}
  />
);
