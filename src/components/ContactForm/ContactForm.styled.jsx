import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: ${p => p.theme.space[8]}px;

  padding: ${p => p.theme.space[3]}px;

  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.space[2]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  padding-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input`
  ::placeholder {
    color: ${p => p.theme.colors.gray};
  }
`;

export const Button = styled.button`
  width: 100%;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  cursor: pointer;

  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.space[3]}px;

  :hover {
    background-color: ${p => p.theme.colors.light};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;
