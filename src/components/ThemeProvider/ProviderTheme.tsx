import React, {PropsWithChildren, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from '../../config/themes';

const ProviderTheme = ({children}:PropsWithChildren) => {

    const [light, setLight] = useState(true);

    const theme = light ? lightMode : darkMode;

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ProviderTheme