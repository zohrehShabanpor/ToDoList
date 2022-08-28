import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import { Container } from "./styles";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <MobileSidebar />
      <Sidebar />
      {children}
    </Container>
  );
};

export default Layout;
