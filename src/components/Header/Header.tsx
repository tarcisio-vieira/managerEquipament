import React, { useRef, useState } from "react";
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsHeader, DsSidebar } from '@ds-prd-repo-react/components';
import { RootState } from '../../redux'
import { connect } from 'react-redux'
import { Product } from '../../shared/Table/Products/Table.mockdata'

declare interface HeaderProps {
  title: string
  firstProduct: Product
}

interface SidebarItem {
  text: string;
  icon: string;
  iconOutline: string;
  onClick?: () => void;
  subItems?: SidebarItem[];
}

interface SidebarButton {
  kind: string;
  icon: string;
  variation: string;
  onClick: () => void;
}

interface Items {
  navItens: never[]; // Adjust this based on the actual structure
  sidebarButton: SidebarButton;
  buttons: never[]; // Adjust this based on the actual structure
}

const Header: React.FC<HeaderProps> = (props) => {

  const toggle = useRef<any>(null);

  const sidebarItems: SidebarItem[] = [
    {
      text: "Home",
      icon: "home",
      iconOutline: "home-outline"
    },
    {
      text: "Reports",
      icon: "pie-chart",
      iconOutline: "pie-chart-outline"
    },
    {
      text: "Configuration",
      icon: "options",
      iconOutline: "options-outline",
      subItems: []
    },
    {
      text: "Users",
      icon: "people",
      iconOutline: "people"
    }
  ];

  const [items] = useState<Items>({
    navItens: [],
    sidebarButton: {
      kind: 'square',
      icon: 'menu-outline',
      variation: 'secondary',
      onClick: () => toggle.current.toggle()
    },
    buttons: [],
  });

  return <> <header></header>
  <DsHeader
    show-sidebar-button='true'
    product-name='MyGSE'
    items={items}
    style={{'marginLeft': '-8px', 'Width':'100%'}}
  />
  <DsSidebar items={sidebarItems} ref={toggle}/>
  </>
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0]
})

export default connect(mapStateToProps)(Header)