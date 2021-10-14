import React from "react";
import { CartIcon, FancyButton, TopBarContainer } from "./styles";

function TopBar(props) {
  console.log(props);

  return (
    <TopBarContainer>
      <a>
        <h1>{props.title}</h1>
      </a>
      <FancyButton>
        <CartIcon />
        Checkout
      </FancyButton>
    </TopBarContainer>
  );
}

export default TopBar;

// class TopBar extends React.Component{

//     render(){
//         return <div>It's work TopBar</div>;
//     };
// }
