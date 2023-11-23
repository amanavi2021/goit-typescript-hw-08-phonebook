import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Toolbar, Typography } from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const readonly:boolean = true;
  const loadImage:boolean = true;
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Navigation />
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      ></Typography>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {!readonly && loadImage && <p></p>}
      {!readonly && !loadImage && <p></p>}

    </Toolbar>
  );
};
