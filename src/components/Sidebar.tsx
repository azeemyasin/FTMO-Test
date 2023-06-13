import React from "react";
import { ISidebarLinks } from "../Interface";
import { sidebarLinksData } from "../Mock/SidebarMockData";

const Sidebar: React.FC = () => {

    const sidebarLinks: ISidebarLinks[] = sidebarLinksData;

    const renderSidebarLinks = sidebarLinks.map(
        (link: ISidebarLinks, index: number) => {
            return (
                <React.Fragment key={`${link.id}${index}`}>
                <a href={link.linkPath}>
                <div className="flex items-center gap-3 p-6 fill-current hover:text-[#0781FE]">
                    <div className="w-10">
                    {link.linkIcon}
                    </div>
                    <p className="text-[#262729] text-xs font-medium">{link.linkName}</p>
                </div>
                    {link.id === 13 ? (
                        <div className="w-full h-[1px] bg-gray-300"></div>
                    ): ""}
                </a>
                </React.Fragment>
            )
        }
    )
    return (
        <>
        <div className="w-4/5 mx-auto h-screen pt-[2.5vh]">
            <div className="w-72 bg-white rounded-md h-[95vh] shadow-xl overflow-y-auto">
                <div className="flex justify-center bg-white p-6 sticky top-0">
                <button className="text-base font-medium text-white py-3 px-5 bg-[#0781FE] rounded-lg">New FTMO Challange</button>
                </div>
                <div>
                <p className="text-lg font-semibold p-6">Main menu</p>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div>{renderSidebarLinks}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;