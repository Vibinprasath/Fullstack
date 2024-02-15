import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import React from 'react';
import { Link } from 'react-router-dom';

const CustomSideNav = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: 250, zIndex: 1000 }}>
      <Sidenav defaultOpenKeys={['3', '4']} expanded={expanded} onSelect={setActiveKey}>
        <Sidenav.Body>
          <Nav activeKey={activeKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item style={{ fontSize: 15 }} eventKey="3-1">
                Geo
              </Nav.Item>
              <Nav.Item style={{ fontSize: 15 }} eventKey="3-2">
                Devices
              </Nav.Item>
              <Nav.Item style={{ fontSize: 15 }} eventKey="3-3">
                Loyalty
              </Nav.Item>
              <Nav.Item style={{ fontSize: 15 }} eventKey="3-4">
                Visit Depth
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item style={{ fontSize: 15 }} eventKey="4-1">
                Applications
              </Nav.Item>
              <Nav.Item style={{ fontSize: 15 }} eventKey="4-2">
                Channels
              </Nav.Item>
              <Nav.Item style={{ fontSize: 15 }} eventKey="4-3">
                Versions
              </Nav.Item>
              <Nav.Menu style={{ fontSize: 25, fontWeight: 'bolder' }} eventKey="4-5" title="Custom Action">
                <Nav.Item style={{ fontSize: 15 }} eventKey="4-5-1">
                  Action Name
                </Nav.Item>
                <Nav.Item style={{ fontSize: 15 }} eventKey="4-5-2">
                  Action Params
                </Nav.Item>
              </Nav.Menu>
              <Nav.Item style={{ fontSize: 25 }} >
                 <Link to='/'> Log Out</Link>
                </Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default CustomSideNav;
