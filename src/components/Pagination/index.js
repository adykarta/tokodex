import React, { Fragment } from "react";


import { Wrapper, WrapperNumber, WrapperArrow } from "./style";

function Pagination({ currentNumber = 1, lastNumber = 0,  onClick = () => {} }) {

  const arrayPage = [];
  if (isNaN(currentNumber) || currentNumber > lastNumber) {
    arrayPage.push(1);
  } else {
    arrayPage.push(1);
    if (currentNumber >= 4) arrayPage.push("...");
    if (currentNumber - 1 > 1) arrayPage.push(currentNumber - 1);
    if (currentNumber !== 1) arrayPage.push(currentNumber);
    if (currentNumber + 1 < lastNumber) arrayPage.push(currentNumber + 1);
    if (currentNumber + 1 < lastNumber - 1) arrayPage.push("...");
    if (lastNumber && currentNumber !== lastNumber) arrayPage.push(lastNumber);
  }

  function handleClick(num) {
    return () => onClick(num);
  }



  return (
    <Wrapper>
      <WrapperArrow isDisabled={currentNumber === 1}  onClick={handleClick(currentNumber - 1)} style={{marginRight:'1rem'}}>
       
        <h4>Previous</h4>
      </WrapperArrow>
      {arrayPage.map((item, i) => (
        <Fragment key={i}>
          {item !== "..." && (
            <WrapperNumber
              isActive={item === currentNumber}
              onClick={item !== currentNumber ? handleClick(item) : undefined}
            >
              <h4 color={item === currentNumber ? "black" : "black"}>{item}</h4>
            </WrapperNumber>
          )}
          {item === "..." && (
            <WrapperNumber>
              <h4 color="black">{item}</h4>
            </WrapperNumber>
          )}
        </Fragment>
      ))}
      <WrapperArrow isDisabled={currentNumber === lastNumber || lastNumber === 0}  onClick={handleClick(currentNumber + 1)} style={{marginLeft:'1rem'}}>
        <h4 color="black">Next</h4>
       
      </WrapperArrow>
    </Wrapper>
  );
}


export default Pagination;
