import { useLogout } from "./useLogout"
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../ui/ButtonIcon";
const Logout = () => {
  const { logout,isLoading } = useLogout();
  return (
    <ButtonIcon disabled= {isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle/>:<SpinnerMini/>}
    </ButtonIcon>
  )
}

export default Logout
