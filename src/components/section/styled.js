import styled from "styled-components";

const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

const ColStyled = styled.div`
  order: ${({ isZero = false }) => (isZero ? 1 : 0)};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

const ColTitleStyled = styled.h2`
  color: ${({ theme }) => theme.text};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

const ColSubtitleStyled = styled.h3`
  color: ${({ theme }) => theme.text};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

const ColSubtextStyled = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  text-align: ${({ center }) => (center ? "center" : "left")};

  & > .user__fullname {
    color: ${({ theme }) => theme.accentBright};
  }
`;

const ButtonStyled = styled.button`
  text-decoration: none;
  border-width: 0px;
  text-align: center;
  font-weight: bold;
  font-family: "Google Sans Regular";
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: #fff;

  width: 100%;
  max-width: 275px;
  font-size: 1.5rem;
  border-radius: 0.5em;
  padding: 0.6em;
  margin: 1.25em 0;

  background-color: ${({ theme }) => theme.accentBright};

  &:hover {
    box-shadow: 0 5px 15px ${({ theme }) => theme.accentBright};
  }
`;

export {
  TitleStyled,
  ColStyled,
  ColTitleStyled,
  ColSubtitleStyled,
  ColSubtextStyled,
  ButtonStyled,
};
