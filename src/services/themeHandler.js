const themeHandler = (theme = "dark") => {
  const _themes = {
    dark: {
      name: "dark",
      body: "#11232f",
      text: "#FFF",
      dark: "#000",
      light: "#fff",
      secondaryText: "#8D8D8D",
      accentColor: "#E3405F",
      accentBright: "#FC1056",
      projectCard: "#292A2D",
      skinColor: "#F7B799",
      skinColor2: "#FCB696",
      imageDark: "#292A2D",
      imageClothes: "#000000",
      avatarMisc: "#212121",
      avatarShoes: "#2B2B2B",

      cardColor: "#2f4553;",
    },
    light: {
      name: "light",
      body: "#FFF",
      text: "#343434",
      dark: "#000",
      light: "#fff",
      secondaryText: "#7F8DAA",
      accentColor: "#E3405F",
      accentBright: "#FC1056",
      projectCard: "#DCE4F2",
      skinColor: "#F7B799",
      skinColor2: "#FCB696",
      imageDark: "#dce4f2",
      imageClothes: "#dce4f2",
      avatarMisc: "#e9ecf2",
      avatarShoes: "#ccd2e3",

      cardColor: "#2f4553",
    },
  };
  return _themes[theme];
};

export default themeHandler;
