import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "../../config/themes";

import { connect } from "react-redux";

const ProviderTheme: React.FC<PropsWithChildren | any> = ({ children, lightModeTheme }) => {
    const theme = lightModeTheme ? lightMode : darkMode;

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
};

const mapStateToProps = (state: any) => ({
    lightModeTheme: state.themeReducer.lightMode,
});

export default connect(mapStateToProps)(ProviderTheme);