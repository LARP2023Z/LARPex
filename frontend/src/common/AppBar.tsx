import { FC, useState } from 'react';
import { AppBar, Button, TextInput, Toolbar } from 'react95';
import logoIMG from '../assets/WindowsIcon.png';
import styled from 'styled-components';

export const MyAppBar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      style={{
        top: 'auto',
        left: 0,
        bottom: 0,
        position: 'absolute',
      }}
    >
      <ToolbarWrapper style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logoIMG}
              alt="LARPex"
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
        </div>

        <TextInput placeholder="Search..." width={150} />
      </ToolbarWrapper>
    </AppBar>
  );
};

const ToolbarWrapper = styled(Toolbar)`
  border-style: solid;
  border-width: 2px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223, 223, 223) 1px 1px 0px 1px inset,
    rgb(132, 133, 132) -1px -1px 0px 1px inset;
  box-sizing: border-box;
  background: rgb(198, 198, 198);
  color: rgb(10, 10, 10);
`;
