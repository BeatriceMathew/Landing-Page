import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import VillaIcon from "@mui/icons-material/Villa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Beatrice Mathew</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <span>order</span>
          </li>
          <List component="div" disablePadding>
            <Link to="/admin/category" className="links">
              <ListItemButton
                sx={{
                  padding: "0px 8px",
                  marginLeft: "8px",
                  minHeight: "25px",
                  "&:hover": {
                    backgroundColor: "#ccc3c3", // Set your custom hover color
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "unset",
                    marginRight: "10px",
                    marginLeft: "-11px",
                    textDecoration: "none",
                  }}
                >
                  <VillaIcon sx={{ color: "#9e1675", fontSize: "18px" }} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "13px",
                      color: "#1e1d1d",
                      fontWeight: "550",
                    },
                  }}
                  primary="Category"
                />
              </ListItemButton>
            </Link>
          </List>



          <List component="div" disablePadding>
            <Link to="/admin/subcategory" className="links">
              <ListItemButton
                sx={{
                  padding: "0px 8px",
                  marginLeft: "8px",
                  minHeight: "25px",
                  "&:hover": {
                    backgroundColor: "#ccc3c3", // Set your custom hover color
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "unset",
                    marginRight: "10px",
                    marginLeft: "-11px",
                    textDecoration: "none",
                  }}
                >
                  <VillaIcon sx={{ color: "#9e1675", fontSize: "18px" }} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "13px",
                      color: "#1e1d1d",
                      fontWeight: "550",
                    },
                  }}
                  primary="Subcategory"
                />
              </ListItemButton>
            </Link>
          </List>



          
          <List component="div" disablePadding>
            <Link to="/admin/type" className="links">
              <ListItemButton
                sx={{
                  padding: "0px 8px",
                  marginLeft: "8px",
                  minHeight: "25px",
                  "&:hover": {
                    backgroundColor: "#ccc3c3", // Set your custom hover color
                  },
                }}
              >
                <CategoryIcon
                  sx={{
                    minWidth: "unset",
                    marginRight: "10px",
                    marginLeft: "-11px",
                    textDecoration: "none",
                    color: "#9e1675",
                    fontSize: "16px",
                  }}
                >
                  <VillaIcon sx={{ color: "#9e1675", fontSize: "18px" }} />
                </CategoryIcon>
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "13px",
                      color: "#1e1d1d",
                      fontWeight: "550",
                    },
                  }}
                  primary="type"
                />
              </ListItemButton>
            </Link>
          </List>


          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Status</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ManageAccountsOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>

        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
