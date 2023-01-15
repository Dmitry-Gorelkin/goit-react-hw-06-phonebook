import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  align-items: baseline;

  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const ContactListItemDelete = styled.span`
  display: flex;
  justify-content: center;

  margin-left: ${p => p.theme.space[5]}px;

  width: ${p => p.theme.space[6]}px;

  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;

  cursor: pointer;

  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.space[3]}px;

  :hover {
    background-color: ${p => p.theme.colors.light};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;
