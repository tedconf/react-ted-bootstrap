import React from 'react';

const Caret = (props) => {
  const rotate = props.rotate ? props.rotate : '0';

  return (
    <svg
      width="10"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotate }}
    >
      <path
        d="M9.814.198A.583.583 0 0 0 9.374 0H.626a.583.583 0 0 0-.44.198A.663.663 0 0 0 0 .667c0 .18.062.336.186.468L4.56 5.802a.583.583 0 0 0 .88 0l4.374-4.667A.663.663 0 0 0 10 .667a.663.663 0 0 0-.186-.47z"
        fill="#000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Caret;
