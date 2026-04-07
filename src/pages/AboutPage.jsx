// AboutPage - Team credits and project information
import { Box, Container, Typography, Paper, Avatar, Chip, Divider, useTheme } from '@mui/material';
import { School, Code, Groups } from '@mui/icons-material';
import PageHeader from '../components/Common/PageHeader';
import ecosphereLogo from '../assets/logo.png';

const teamMembers = [
    { name: 'Felix G. Montañez', initials: 'FM', linkedin: 'https://www.linkedin.com/in/felix-gabriel-monta%C3%B1ez/' },
    { name: 'Jéssica L. Piza', initials: 'JP', linkedin: 'https://www.linkedin.com/in/jessica-piza/' },
    { name: 'Sanbir Singh', initials: 'SS', linkedin: 'https://www.linkedin.com/in/sanbirsinghgill/' },
    { name: 'Xujun Wang', initials: 'XW', linkedin: 'https://www.linkedin.com/in/xujunnoahwang/' },
];

const techStack = [
    'React 19', 'Material-UI 7', 'Vite 7', 'Chart.js 4',
    'Three.js', 'React Router 7',
    'Node.js', 'Express 5', 'SQL Server 2025',
    'Python', 'scikit-learn', 'Google Gemini AI',
    'Axios', 'jsPDF', 'html2canvas'
];

export default function AboutPage() {
    const theme = useTheme();

    const cardSx = {
        p: 5, mb: 3, borderRadius: '16px',
        border: `1px solid ${theme.custom.cardBorder}`,
        boxShadow: theme.custom.cardShadow,
        bgcolor: theme.palette.background.paper,
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: theme.palette.background.default, minHeight: '100vh', pb: 6 }}>
            <PageHeader
                title="About EcoSphere"
                subtitle="Capstone Project – Software Development"
            />

            <Container maxWidth="md" sx={{ mt: 4 }}>
                {/* Project Info */}
                <Paper elevation={0} sx={cardSx}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        <img
                            src={ecosphereLogo}
                            alt="EcoSphere Logo"
                            style={{ maxWidth: 200, height: 'auto' }}
                        />
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{ textAlign: 'center', color: theme.custom.subtitleText, mb: 3, fontStyle: 'italic' }}
                    >
                        Building Sustainability Intelligence
                    </Typography>
                    <Divider sx={{ mb: 3, borderColor: theme.custom.cardBorder }} />
                    <Typography variant="body2" sx={{ color: theme.custom.bodyText, lineHeight: 1.8, textAlign: 'justify' }}>
                        EcoSphere is a real-time energy monitoring and carbon footprint tracking system
                        designed for SAIT&apos;s Green Building Technology and Applied Construction (GBTAC) program.
                        This dashboard visualizes electricity, water, thermal, and natural gas consumption data
                        to promote sustainable building management practices.
                    </Typography>
                </Paper>

                {/* Team */}
                <Paper elevation={0} sx={cardSx}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                        <Groups sx={{ color: theme.palette.primary.main }} />
                        <Typography variant="h6" sx={{ fontWeight: 700, color: theme.custom.titleText }}>
                            Kinetic Team
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                        {teamMembers.map((member) => (
                            <Box
                                key={member.name}
                                component="a"
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 2,
                                    borderRadius: '12px',
                                    bgcolor: theme.custom.disclaimerBg,
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: theme.custom.cardHoverShadow,
                                    }
                                }}
                            >
                                <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 40, height: 40, fontSize: '14px', fontWeight: 600 }}>
                                    {member.initials}
                                </Avatar>
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600, color: theme.custom.titleText }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: theme.custom.subtitleText }}>
                                        Software Developer
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Paper>

                {/* Academic Info */}
                <Paper elevation={0} sx={cardSx}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <School sx={{ color: theme.palette.primary.main }} />
                        <Typography variant="h6" sx={{ fontWeight: 700, color: theme.custom.titleText }}>
                            Academic Information
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {[
                            ['Program', 'Software Development'],
                            ['School', 'School of Advanced Technology'],
                            ['Institution', 'Southern Alberta Institute of Technology (SAIT)'],
                            ['Supervisor', 'Mehdi Shokrani'],
                            ['Year', '2025\u20132026'],
                        ].map(([label, value]) => (
                            <Box key={label} sx={{ display: 'flex', gap: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: theme.custom.titleText, minWidth: 120 }}>
                                    {label}:
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme.custom.bodyText }}>
                                    {value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Paper>

                {/* Tech Stack */}
                <Paper elevation={0} sx={{ ...cardSx, mb: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Code sx={{ color: theme.palette.primary.main }} />
                        <Typography variant="h6" sx={{ fontWeight: 700, color: theme.custom.titleText }}>
                            Technology Stack
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {techStack.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                    bgcolor: theme.custom.toggleBg,
                                    color: theme.custom.bodyText,
                                    fontWeight: 500,
                                    '&:hover': { bgcolor: theme.custom.sectionHover },
                                }}
                            />
                        ))}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
