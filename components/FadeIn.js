import React, { createContext, useContext } from 'react';
import { motion } from 'framer-motion';

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: '0px 0px -200px' };

function FadeIn(props) {
  const isInstaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInstaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    ></motion.div>
  );
}

export default FadeIn;



export const FadeInStagger = ({faster = false , ...props}) => {
  return (
    <FadeInStaggerContext.Provider
    value={true}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{staggerChildren: faster ? 0.12 : 0.2}}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}

