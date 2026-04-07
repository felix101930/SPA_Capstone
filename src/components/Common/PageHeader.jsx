import { Box, Typography } from '@mui/material';

export default function PageHeader({ title, subtitle }) {
    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #2d7a3e 0%, #3d8f4d 50%, #4da55e 100%)',
                color: 'white',
                py: 8,
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    mb: 1,
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
            >
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 300,
                        opacity: 0.95
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
}
