import React,{
    useState,
    useEffect,
} from 'react';

import MobileSidebar from './MobileSidebar';
import DeskTopSidebar from './DeskTopSidebar';
import { getWindowSize } from './../../../../Utils/getWindowSize';

function Sidebar(props) {
  const [
    windowSize, setWindowSize
  ] = useState(getWindowSize());

  const handleTabClick = (step) => {
    if(!props.stepForm.handler.isStepCompleted(step)){
      return;
    }

    props.stepForm.handler.gotoStep(step);
    props.setStepId(props.stepForm.handler.getStepId());
  };
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }
  
    window.addEventListener(
        "resize", handleWindowResize
    );
  
    return () => {
      window.removeEventListener(
        "resize", handleWindowResize
      );
    };
  }, []);

  return (
    <div>
      {windowSize.innerWidth < 850 ? (
        <MobileSidebar handleTabClick={handleTabClick} {...props} />
      ) : (
        <DeskTopSidebar handleTabClick={handleTabClick} {...props} />
      )}
    </div>
  );
}

export default Sidebar;