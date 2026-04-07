import { Box, Container, Typography, Button, Grid, Paper, Avatar, Chip, useTheme, Modal, IconButton } from '@mui/material';
import { TrendingUp, WaterDrop, Bolt, LocalFireDepartment, Analytics, Speed, LinkedIn, Close } from '@mui/icons-material';
import { useState } from 'react';
import ecosphereLogo from '../assets/logo.png';
import felixPhoto from '../assets/team/Felix.png';
import jessicaPhoto from '../assets/team/Jessica.jpg';
import sanbirPhoto from '../assets/team/Sanbir.jpg';
import xujunPhoto from '../assets/team/Xujun.jpg';
import screenshot1 from '../assets/screenshots/SC1.png';
import screenshot2 from '../assets/screenshots/SC2.png';
import screenshot3 from '../assets/screenshots/SC3.png';

const features = [
    {
        icon: <Bolt />,
        title: 'Real-Time Energy Monitoring',
        description: 'Track electricity consumption with live data visualization and instant insights.'
    },
    {
        icon: <WaterDrop />,
        title: 'Water Usage Analytics',
        description: 'Monitor water consumption patterns and identify optimization opportunities.'
    },
    {
        icon: <LocalFireDepartment />,
        title: 'Thermal & Gas Tracking',
        description: 'Comprehensive monitoring of thermal energy and natural gas usage.'
    },
    {
        icon: <TrendingUp />,
        title: 'Carbon Footprint Analysis',
        description: 'Calculate and visualize your environmental impact in real-time.'
    },
    {
        icon: <Analytics />,
        title: 'AI-Powered Predictions',
        description: 'Machine learning forecasts for proactive energy management.'
    },
    {
        icon: <Speed />,
        title: 'Interactive Dashboards',
        description: 'Beautiful, intuitive visualizations powered by Chart.js and Three.js.'
    }
];

const techStack = [
    'React 19', 'Material-UI 7', 'Vite 7', 'Chart.js 4',
    'Three.js', 'Node.js', 'Express 5', 'SQL Server 2025',
    'Python', 'Google Gemini AI', 'scikit-learn'
];

const teamMembers = [
    { name: 'Felix G. Montañez', photo: felixPhoto, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/felix-gabriel-monta%C3%B1ez/' },
    { name: 'Jéssica L. Piza', photo: jessicaPhoto, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/jessica-piza/' },
    { name: 'Sanbir Singh', photo: sanbirPhoto, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/sanbirsinghgill/' },
    { name: 'Xujun Wang', photo: xujunPhoto, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/xujunnoahwang/' },
];

export default function LandingPage() {
    const theme = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const screenshots = [
        { src: screenshot1, alt: 'EcoSphere Dashboard - Energy Monitoring' },
        { src: screenshot2, alt: 'EcoSphere Dashboard - Analytics View' },
        { src: screenshot3, alt: 'EcoSphere Dashboard - Carbon Footprint' }
    ];

    return (
        <Box sx={{ bgcolor: '#f8faf9' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #2d7a3e 0%, #3d8f4d 50%, #4da55e 100%)',
                    color: 'white',
                    pt: 12,
                    pb: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)',
                    }
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                            <img
                                src={ecosphereLogo}
                                alt="EcoSphere Logo"
                                style={{ maxWidth: 200, height: 'auto' }}
                            />
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                fontWeight: 300,
                                opacity: 0.95,
                                fontSize: { xs: '1.2rem', md: '1.5rem' }
                            }}
                        >
                            Building Sustainability Intelligence
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 5,
                                maxWidth: 700,
                                mx: 'auto',
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                opacity: 0.9
                            }}
                        >
                            Real-time energy monitoring and carbon footprint tracking system for sustainable building management.
                            Empowering SAIT&apos;s Green Building Technology program with data-driven insights.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        mb: 2,
                        color: '#2d7a3e'
                    }}
                >
                    Powerful Features
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        color: '#555',
                        maxWidth: 600,
                        mx: 'auto'
                    }}
                >
                    Comprehensive tools for monitoring, analyzing, and optimizing your building&apos;s environmental impact
                </Typography>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: '16px',
                                    border: '1px solid #e0e0e0',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 40px rgba(27, 94, 32, 0.15)',
                                        borderColor: '#43a047',
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: '12px',
                                        bgcolor: '#e8f5e9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2,
                                        color: '#3d8f4d'
                                    }}
                                >
                                    {feature.icon}
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#2d7a3e' }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Demo Section */}
            <Box id="demo" sx={{ bgcolor: 'white', py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            mb: 2,
                            color: '#2d7a3e'
                        }}
                    >
                        See It In Action
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: '#555',
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        Explore our intuitive dashboard and powerful analytics tools
                    </Typography>

                    {/* Video Placeholder */}
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            mb: 4,
                            border: '1px solid #e0e0e0',
                            aspectRatio: '16/9',
                            bgcolor: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography variant="h6" sx={{ color: '#999' }}>
                            Demo Video Placeholder
                        </Typography>
                    </Paper>

                    {/* Screenshots Grid */}
                    <Grid container spacing={3}>
                        {screenshots.map((screenshot, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={0}
                                    onClick={() => handleImageClick(screenshot)}
                                    sx={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        border: '1px solid #e0e0e0',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 8px 24px rgba(45, 122, 62, 0.2)',
                                        }
                                    }}
                                >
                                    <img
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Image Preview Modal */}
                    <Modal
                        open={selectedImage !== null}
                        onClose={handleCloseModal}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 2
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                outline: 'none'
                            }}
                        >
                            <IconButton
                                onClick={handleCloseModal}
                                sx={{
                                    position: 'absolute',
                                    top: -50,
                                    right: 0,
                                    color: 'white',
                                    bgcolor: 'rgba(0,0,0,0.5)',
                                    '&:hover': {
                                        bgcolor: 'rgba(0,0,0,0.7)',
                                    }
                                }}
                            >
                                <Close />
                            </IconButton>
                            {selectedImage && (
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '90vh',
                                        borderRadius: '8px',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                                    }}
                                />
                            )}
                        </Box>
                    </Modal>
                </Container>
            </Box>

            {/* Technology Stack */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        mb: 2,
                        color: '#2d7a3e'
                    }}
                >
                    Built With Modern Technology
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        color: '#555',
                        maxWidth: 600,
                        mx: 'auto'
                    }}
                >
                    Leveraging cutting-edge tools and frameworks for optimal performance
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                    {techStack.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            sx={{
                                bgcolor: '#e8f5e9',
                                color: '#2d7a3e',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                px: 1,
                                py: 2.5,
                                '&:hover': {
                                    bgcolor: '#c8e6c9',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.2s ease'
                            }}
                        />
                    ))}
                </Box>
            </Container>

            {/* Team Section */}
            <Box sx={{ bgcolor: 'white', py: 10 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            mb: 2,
                            color: '#2d7a3e'
                        }}
                    >
                        Meet the Kinetic Team
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: '#555',
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        Software Development students at SAIT, passionate about sustainability and innovation
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {teamMembers.map((member) => (
                            <Grid item xs={12} sm={6} md={3} key={member.name}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        borderRadius: '16px',
                                        border: '1px solid #e0e0e0',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 40px rgba(27, 94, 32, 0.15)',
                                        }
                                    }}
                                >
                                    <Avatar
                                        src={member.photo}
                                        alt={member.name}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            mx: 'auto',
                                            mb: 2,
                                            border: '3px solid #e8f5e9'
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#2d7a3e' }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                                        {member.role}
                                    </Typography>
                                    <Button
                                        component="a"
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outlined"
                                        size="small"
                                        startIcon={<LinkedIn />}
                                        sx={{
                                            borderColor: '#3d8f4d',
                                            color: '#3d8f4d',
                                            textTransform: 'none',
                                            borderRadius: '20px',
                                            '&:hover': {
                                                borderColor: '#2d7a3e',
                                                bgcolor: '#e8f5e9',
                                            }
                                        }}
                                    >
                                        LinkedIn
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #2d7a3e 0%, #3d8f4d 100%)',
                    color: 'white',
                    py: 6,
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        © 2025-2026 EcoSphere | SAIT Capstone Project | Kinetic Team
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}
