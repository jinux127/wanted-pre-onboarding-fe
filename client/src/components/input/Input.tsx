import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

export interface Props {
  inputName: string;
  invalid?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusOut?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Input = ({ inputName, ...props }: Props) => {
  return <StyledInput name={inputName} {...props} autoComplete='off' />;
};

const StyledInput = styled.input`
  font-size: 1.2rem;
  width: 20rem;
  border-bottom: 3px solid gray;
  padding: 0.4rem 0.8rem;
`;

export default Input;
