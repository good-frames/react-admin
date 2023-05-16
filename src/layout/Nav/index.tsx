import { useContext } from 'react';

import { LayoutContext } from '../layoutContext';

const Nav = () => {
  const { options, toggleExpandSidebar } = useContext(LayoutContext);

  return (
    <div>
      <span>nav</span>
      <div onClick={toggleExpandSidebar}>点我</div>
    </div>
  );
};

export default Nav;