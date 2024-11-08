import {Sidebar,Menu,MenuItem,SubMenu,sidebarClasses} from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

export default function Side() {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]:{
          backgroundColor:"green",color:"#000"
        }
      }}
    
    >
      <Menu>
        <SubMenu label="Dashboard">
          <MenuItem component={<Link to="/"/>}>Home</MenuItem>
          <MenuItem component={<Link to="/exemplo1"/>}>Exemplo-1</MenuItem>
          <MenuItem component={<Link to="/exemplo2"/>}>Exemplo-2</MenuItem>
        </SubMenu>
        <SubMenu label="Perfil">
          <MenuItem>Sua Conta</MenuItem>
          <MenuItem>Avatar</MenuItem>
          <MenuItem>Sair</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  )
}
