import styled from 'styled-components';

export const Space = styled.div<{
  gap?: number;
  justify?: string;
  align?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap}px;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;
