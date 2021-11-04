import styled from "styled-components";

const CardStyled = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;

  border-radius: 1em;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.cardColor};

  & > * {
    font-family: "Google Sans Regular";
  }

  &:hover {
    box-shadow: 0 5px 15px ${({ theme }) => theme.cardColor};
  }
`;

const CardLinkStyled = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;

  border-radius: 1em;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.cardColor};

  & > * {
    font-family: "Google Sans Regular";
  }

  &:hover {
    box-shadow: 0 5px 15px ${({ theme }) => theme.cardColor};
  }
`;

const HeaderStyled = styled.div`
  margin: 0px;
  padding: 1rem;

  text-align: ${({ align = "left" }) => align};
  background-color: ${({ theme }) => theme.cardColor};
`;

const DateStyled = styled.div`
  font-size: 0.75rem;
  font-style: italic;
  color: #fff;

  text-align: ${({ align = "left" }) => align};
`;

const TitleStyled = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin: 0.5em 0;

  color: ${({ theme }) => theme.light};
  text-align: ${({ align = "left" }) => align};
`;

const SubtitleStyled = styled.div`
  font-size: 1rem;
  margin: 0.5em 0;

  color: ${({ theme }) => theme.secondaryText};
  text-align: ${({ align = "left" }) => align};
`;

const ContentStyled = styled.div`
  background-color: transparent;

  margin: 0px;
  padding: 1rem;

  text-align: ${({ align = "left" }) => align};

  @media (max-width: 425px) {
    & > button {
      max-width: 100%;
    }
  }
`;

const ContentTitleStyled = styled.div`
  font-size: 1.5rem;
  margin: 0.5em 0;

  color: ${({ theme }) => theme.text};
  text-align: ${({ align = "left" }) => align};
`;

const ContentTextStyled = styled.div`
  font-size: 1rem;
  margin: 0.5em 0;

  color: ${({ theme }) => theme.text};
  text-align: ${({ align = "left" }) => align};
`;

export {
  CardStyled,
  CardLinkStyled,
  HeaderStyled,
  DateStyled,
  TitleStyled,
  SubtitleStyled,
  ContentStyled,
  ContentTitleStyled,
  ContentTextStyled,
};
