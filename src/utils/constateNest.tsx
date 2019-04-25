import React from 'react';

const nest = (...components) => props =>
  components.reduceRight(
    (children, Current) => <Current {...props}>{children}</Current>,
    props.children,
  );

export default nest;
