import { useLocation } from "react-router-dom";

const useCurrentRoute=()=>{
    const mainRoutes= ["About","Projects"];

    const location = useLocation();
    const route = location.pathname.slice(1);
    const routeName=route.length!==0&&route[0].toLocaleUpperCase() + route.slice(1);
    const isMainPage = !mainRoutes.includes(routeName);
    const currentRoute=isMainPage?"Welcome":routeName;
    return {
        isMainPage,
        currentRoute
    }
}
export default useCurrentRoute; 