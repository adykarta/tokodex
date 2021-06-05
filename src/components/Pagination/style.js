import styled, { css } from "styled-components";
import { lightGreen, primaryGreen } from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction:row;

  svg {
    cursor: pointer;
  }

  svg:hover {
    background-color: ${lightGreen};
  }

  path:nth-of-type(1) {
    fill: ${lightGreen};
  }
 
`;

export const WrapperNumber = styled.div`
margin-right:0.2rem;
  cursor: pointer;

  > * {
    border-radius: 2px;
    padding: 5px 9px;

    /* use a theme */
    ${({ isActive }) =>
      !isActive &&
      css`
        &:hover {
          background-color: ${primaryGreen};
          border: 1px solid ${primaryGreen};
        }
      `}
      border:1px solid #E5E5EA; 

    /* handle props isActive */
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: ${primaryGreen};
        border: 1px solid ${primaryGreen};
      `}
   
  }
`;

export const WrapperArrow = styled.div`
  display: flex;
  align-items: center;
  &:hover{
    cursor:${({isDisabled})=>isDisabled ? '':'pointer' };
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
`;
