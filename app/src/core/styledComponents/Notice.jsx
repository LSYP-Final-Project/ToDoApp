import React from "react";
import styled from "styled-components";

const StyledPopover = styled.div`
    position: absolute;
    margin: 0px;
    display: block;
    max-width: 276px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: .875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    transition: opacity .15s linear;

    @media (max-width: 992px) {
      display: none
    }
`;

  const StyledPopoverArrow = styled.div`
    position: absolute;
    top: 0px;
    transform: translate(1px,43px);
    top: 0px;
    left: calc(-0.5rem - 2px);
    width: .5rem;
    height: 1rem;
    display: block;

    &:before {
      position: absolute;
      display: block;
      content: "";
      border-color: transparent;
      border-style: solid;
      left: 0;
      border-width: .5rem .5rem .5rem 0;
      border-right-color: rgba(0,0,0,.25);
    }

    &:after {
      position: absolute;
      display: block;
      content: "";
      border-color: transparent;
      border-style: solid;
      left: 1px;
      border-width: .5rem .5rem .5rem 0;
      border-right-color: #fff;
    }
`;

  const StyledPopoverHeader = styled.h3`
    padding: .5rem 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid #d8d8d8;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
`;

  const StyledPopoverBody = styled.div`
    padding: 1rem 1rem;
    color: #212529;
`;

class StyledNotice extends React.Component {

   render() {
    return (
      <StyledPopover>
        <StyledPopoverArrow />
        <StyledPopoverHeader>{this.props.title}</StyledPopoverHeader>
        <StyledPopoverBody>{this.props.content}</StyledPopoverBody>
      </StyledPopover>
    )
  }
}

export default StyledNotice;