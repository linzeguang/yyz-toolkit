import React, { useCallback } from "react";
import RcDropdown from "rc-dropdown";
import { DropdownProps } from "./types";
import { MenuWrapper } from "./styled";

function Dropdown<T>(props: React.PropsWithChildren<DropdownProps<T>>) {
  const {
    children,
    menuList,
    renderMenu,
    animation = "slide-up",
    ...rest
  } = props;

  const renderOverlay = useCallback(() => {
    return (
      <MenuWrapper>{menuList.map((item) => renderMenu(item))}</MenuWrapper>
    );
  }, []);

  return (
    <RcDropdown animation={animation} overlay={renderOverlay()} {...rest}>
      <React.Fragment>{children}</React.Fragment>
    </RcDropdown>
  );
}

export default Dropdown;
