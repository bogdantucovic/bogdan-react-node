import { createMuiTheme } from "@material-ui/core/styles";

const getTheme = (
  { globalColors, palette },
  dialogVariant,
  notificationVariant
) => {
  const getMuiDialog = () => {
    switch (dialogVariant) {
      case "error":
      case "success":
        return {
          root: {
            backgroundColor: `${globalColors[dialogVariant]}`
          }
        };
      default:
        return {};
    }
  };

  const getMuiSnackbarContent = () => {
    let rootBackgroundColor = palette.primary.main;

    if (notificationVariant !== "info") {
      rootBackgroundColor = globalColors[notificationVariant];
    }

    return {
      root: {
        backgroundColor: rootBackgroundColor
      }
    };
  };

  const getMuiButton = () => ({
    root: {
      borderRadius: 0
    }
  });

  const getMuiCardHeader = () => ({
    title: {
      textTransform: "lowercase",
      fontSize: "16px"
    }
  });

  return createMuiTheme({
    palette,
    overrides: {
      MuiDialog: getMuiDialog(),
      MuiSnackbarContent: getMuiSnackbarContent(),
      MuiButton: getMuiButton(),
      MuiCardHeader: getMuiCardHeader()
    }
  });
};

export default getTheme;
