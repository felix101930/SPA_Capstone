import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3d8f4d',
        },
        secondary: {
            main: '#4da55e',
        },
        background: {
            default: '#f8faf9',
            paper: '#ffffff',
        },
    },
    custom: {
        cardBorder: '#e0e0e0',
        cardShadow: '0 2px 8px rgba(0,0,0,0.08)',
        cardHoverShadow: '0 4px 16px rgba(0,0,0,0.12)',
        titleText: '#2d7a3e',
        subtitleText: '#666',
        bodyText: '#555',
        disclaimerBg: '#f5f5f5',
        toggleBg: '#e8f5e9',
        sectionHover: '#c8e6c9',
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter basename="/ecosphere-landing">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
