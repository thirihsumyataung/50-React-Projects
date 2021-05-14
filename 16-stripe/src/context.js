import React, { useState, useContext } from 'react'
import sublinks from './data'

// Global context 

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links:[]})
    const openSideBar = () => {
        setSidebarOpen(true); 
    }
    const closeSideBar = () => {
        setSidebarOpen(false); 
    }

    const openSubmenu = (text, coordinate) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page); 
        setLocation(coordinate); 
        setIsSubmenuOpen(true); 
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false); 
    }

    return <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, openSubmenu, openSideBar, closeSubmenu, closeSideBar, location, page }}>
           {children}
          </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext); 
}

