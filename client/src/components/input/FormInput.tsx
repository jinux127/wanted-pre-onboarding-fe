import React from 'react';
import styled from 'styled-components';
import Label, { props as LabelProps } from '../label/Label';
import Input from './Input';

export interface Props {
  inputName: string;
  invalid?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusOut?: (e: React.FocusEvent<HTMLInputElement>) => void;
  captionContent?: string;
  labelProps: LabelProps;
  required?: boolean;
  type?: string;
}

function FormInput({ captionContent, invalid = false, labelProps, ...props }: Props): React.ReactElement {
  return (
    <StyledContainer>
      <Label {...labelProps} />
      <Input invalid={invalid} {...props} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32rem;
  margin: 1rem;
`;

export default FormInput;
