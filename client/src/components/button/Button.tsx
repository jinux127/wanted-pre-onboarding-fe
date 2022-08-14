import styled from 'styled-components';

export interface Props {
  name: string;
  type: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: number;
  height?: number;
  hoverBackgroundColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const Button = ({
  name,
  height = 2,
  width = 32,

  backgroundColor = '#f5c95a',
  disabled = false,
  hoverBackgroundColor = '#488b3bc7',
  ...props
}: Props) => {
  return (
    <StyledButton
      height={height}
      width={width}
      hoverBackgroundColor={hoverBackgroundColor}
      backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {name}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  width: number;
  height: number;
  backgroundColor: string;
  hoverBackgroundColor: string;
  disabled: boolean;
}>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;

  border: none;
  margin: 0.2rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  transition: all 0.2s linear;
  :hover {
    color: white;
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;
