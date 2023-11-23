import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleBottomCenterIcon,
  InboxIcon,
  CalendarIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Card className="h-[calc(100vh-2rem)] float-left p-4 shadow-xl bg-reunify-blue">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="gray"></Typography>
        </div>
        <List>
          {[
            {
              icon: (
                <Link to="/chatroom">
                  <HomeIcon className="h-10 w-10 mb-5 text-gray-800" />
                </Link>
              ),
            },
            {
              icon: (
                <ChatBubbleBottomCenterIcon className="h-10 w-10 mb-5 text-gray-800" />
              ),
            },
            { icon: <InboxIcon className="h-10 w-10 mb-5 text-gray-800" /> },
            { icon: <CalendarIcon className="h-10 w-10 mb-5 text-gray-800" /> },
            {
              icon: <Cog6ToothIcon className="h-10 w-10 mb-5 text-gray-800" />,
            },
            {
              icon: (
                <Link to="/">
                  <PowerIcon className="h-10 w-10 mb-5 text-gray-800" />
                </Link>
              ),
            },
          ].map((item, index) => (
            <ListItem key={index}>
              <ListItemPrefix>{item.icon}</ListItemPrefix>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default Navbar;
