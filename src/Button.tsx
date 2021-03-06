import * as React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  border: 2px solid palevioletred;

  ${(props: ButtonProps) =>
    props.primary
      ? css`
          background: palevioletred;
          color: white;
        `
      : css`
          background: transparent;
          color: palevioletred;
        `};
`;

const Button: React.SFC<ButtonProps> = props => <StyledButton {...props} />;

export default Button;
