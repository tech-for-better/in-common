import { Box } from '@mui/system';
import { Button } from '@mui/material';
import MenuDropDown from '../Menu/MenuDropDown';
import Image from 'next/image';
import Logo from '../../public/InCommon_Logo.png';

export default function Header({ user }) {
  return (
    <Box
      sx={{
        width: '100%',
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: 74 }} />
      <Box sx={{ width: 180 }}>
        <Image src={Logo} alt="InCommon Logo" objectFit={'contain'} />
      </Box>
      {user ? <MenuDropDown /> : <Box sx={{ width: 74 }} />}
    </Box>
  );
}
