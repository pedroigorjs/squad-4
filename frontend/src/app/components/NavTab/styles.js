import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${(props) => props.bgColor || 'transparent'};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding: ${(props) => props.padding};
  text-align: 'center';
  color: ${(props) => (props.isActive ? props.color : '#000')};
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid' : 'none')};
  border-bottom-color: ${(props) => props.borderColor};
  font-weight: ${(props) => (props.isActive ? '700' : '400')};
`;
