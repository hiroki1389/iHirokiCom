import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';

import menuIcon from '../assets/icon.png';

const Header = () => {
  // HomePageのページ遷移
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  // 現在のページがHomePageかどうかを判別
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const headerHight = 128;

  return (
    <AppBar position="sticky">
        <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img src={menuIcon} alt="menu icon" style={{ width: 48, height: 48 }} />
            </IconButton>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              i-hiroki
            </Typography>
          </Toolbar>
        </Box>
      
      {isHomePage && (
        <nav id="nav" style={{ backgroundColor: "#1976d2", padding: "10px 0" }}>
          <ScrollLink to="intro" smooth={true} duration={500} offset={-headerHight}>
            <Button color="inherit">はじめに</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-headerHight}>
            <Button color="inherit">制作物一覧</Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-headerHight}>
            <Button color="inherit">使える言語一覧</Button>
          </ScrollLink>
          <ScrollLink to="career" smooth={true} duration={500} offset={-headerHight}>
            <Button color="inherit">経歴</Button>
          </ScrollLink>
          <ScrollLink to="qualifications" smooth={true} duration={500} offset={-headerHight}>
            <Button color="inherit">保有資格</Button>
          </ScrollLink>
          <ScrollLink to="externalLinks" smooth={true} duration={500} offset={-headerHight}>
            <Button color="inherit">外部リンク</Button>
          </ScrollLink>
        </nav>
      )}
    </AppBar>
  );
};

export default Header;