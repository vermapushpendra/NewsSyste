import PropTypes from 'prop-types';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineWorkHistory } from "react-icons/md";
import { NavLink } from 'react-router-dom';

import { SidebarContext } from '../contexts/SidebarConext';
import { useContext } from 'react';


function Sidebar() {

  const { isOpen } = useContext(SidebarContext)



  return <>
    <aside className={`${isOpen ? "lg:hidden" : "flex"} overflow-y-auto sticky top-0 flex flex-col mt-1`}>
      <SmallSidebarItem Icon={IoHomeOutline} title="Home" url="/" />
      <SmallSidebarItem Icon={MdOutlineWorkHistory} title="History" url="history" />
      <SmallSidebarItem Icon={MdOutlineSubscriptions} title="Subscriptions" url="subscription" />
    </aside>

    <aside className={`${isOpen ? "lg:flex" : "hidden"} hidden w-56 lg:sticky scrollbar-hidden absolute top-0 overflow-y-auto pb-4 mt-1 flex-col gap-2 px-5 `}>
      <LargeSidebarItem Icon={IoHomeOutline} title="Home" url="/" />
      <LargeSidebarItem Icon={MdOutlineWorkHistory} title="History" url="history" />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Subscriptions Videos" url="subscription" />
      <hr />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Playlists" url="subscription" />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Channel or Account" url="subscription" />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Your Videos" url="subscription" />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Subscribers" url="subscription" />
      <hr />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Upload" url="subscription" />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Live" url="subscription" />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Subscriptions" url="subscription" />
      <hr />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Settings" url="subscription" />
      <LargeSidebarItem Icon={MdOutlineSubscriptions} title="Feedback" url="subscription" />
      <hr />
      <p className='text-white p-3'>
        About Press Copyright Contact-us Creator Advertise Developers Terms Privacy Policy & Safety How YouTube works Test new features © 2024 Pushpendra Verma
      </p>

    </aside>
  </>

}

function SmallSidebarItem({ Icon, title, url }) {
  return (
    <NavLink to={url} className="text-white flex flex-col items-center gap-1 py-4 px-1.5">
      <Icon className="h-5 w-5" />
      <div className="text-[11px]">{title}</div>
    </NavLink>
  );
}

function LargeSidebarItem({ Icon, title, url }) {
  return (
    <NavLink to={url} className={({ isActive }) => `${isActive ? "font-bold color-primary" : ""} text-white w-full flex items-center rounded-lg gap-6 py-3 px-2`}>
      <Icon className="h-5 w-5" />
      <div className="text-sm">{title}</div>
    </NavLink>
  );
}

SmallSidebarItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


LargeSidebarItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Sidebar;
