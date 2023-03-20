import { useState } from "react";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { MainHome } from "./containers/MainHome";

export default function App() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const onHandleMenu = () => {
      setOpenMenu(!openMenu)
  }

  return (
    <>
      <Header open={openMenu} setOpenMenu={onHandleMenu} />
      <MainHome />
      <Menu open={openMenu} />
    </>
  )
}