import { FC, ReactNode } from 'react'

import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { TypographyOptions } from '@mui/material/styles/createTypography';

type Props = {
    children: ReactNode
}
export const ConfigureMUI: FC<Props> = ({ children }) => {

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif'
            ].join(',')
        }
    })
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
