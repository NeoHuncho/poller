import {AiFillSetting,AiFillPlusCircle,AiFillDelete } from "react-icons/ai";

export const DeleteIcon = ({size}:IconProps) => <AiFillDelete size={size}/>;
export const SettingsIcon = ({size}:IconProps) => <AiFillSetting size={size}  />;
export const CreateIcon = ({size}:IconProps) => <AiFillPlusCircle size={size}  />;

type IconProps = {
    size?: number;
}