import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openSideBar = () => {
        setIsSideBarOpen(true); 
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false); 
    }
    const openModal = () => {
        setIsModalOpen(true); 
    }
    const closeModal = () => {
        setIsModalOpen(false); 
    }
    return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSideBar, closeModal, closeSideBar}}>{children}</AppContext.Provider>
}

//Custom Hook 

export const useGlobalContext = ( ) => {
    return useContext(AppContext); 
}

export { AppContext, AppProvider }; 
// 1. How to use useCOntext in any of the components and 

// 2. How we can set up custom hooks 
// If we want to use the custom hook , we still need to add " use " 