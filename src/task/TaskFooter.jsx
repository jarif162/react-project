import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  padding: 12px 20px;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #555;
  span {
    font-weight: bold;
    margin-right: 4px;
  }
`;

const Status = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #16a34a; /* green */
`;

export default function TaskFooter() {
  return (
    <FooterWrapper>
      <InfoText>
        <span>Total:</span> 3
      </InfoText>
      <InfoText>
        <span>Completed:</span> 2
      </InfoText>
      <Status>Active</Status>
    </FooterWrapper>
  );
}

//do i need use $? for props in styled components?
//no, only when using props in the css rules
//like color: ${props => props.color || 'black'};
