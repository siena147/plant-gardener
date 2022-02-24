import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledBg = styled.div`
  .bg {
    position: fixed;
    bottom: -10px;
    right: 0;
    width: 100%;
    z-index: -1;
  }
`;

export default () => {
  return (
    <StyledBg>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={colors.main}
            fillOpacity="1"
            d="M0,128L30,160C60,192,120,256,180,240C240,224,300,128,360,122.7C420,117,480,203,540,197.3C600,192,660,96,720,80C780,64,840,128,900,170.7C960,213,1020,235,1080,240C1140,245,1200,235,1260,213.3C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </StyledBg>
  );
};
