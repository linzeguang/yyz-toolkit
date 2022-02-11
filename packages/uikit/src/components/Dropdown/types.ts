import { DropdownProps as BaseDropdownProps } from "rc-dropdown/lib/Dropdown";

export interface DropdownProps<T> extends BaseDropdownProps {
  menuList: Array<T>;
  renderMenu: (props: T) => JSX.Element;
}
