import { ReactNode } from "react";
import ModernLayout from "./ModernLayout";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return <ModernLayout>{children}</ModernLayout>;
};

export default AppLayout;
