import { ReactNode } from 'react';
import styled from 'styled-components';

export interface props {
  htmlFor?: string;
  name: string;
}

const Label = ({ name, ...props }: props) => {
  return <StyledLabel {...props}>{name}</StyledLabel>;
};

const StyledLabel = styled.label`
  font-size: 1.5rem;
`;

export default Label;
