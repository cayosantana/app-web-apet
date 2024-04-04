import * as S from "./styles"
import logoApet from './image/logo-apet-novo.png'
import { FaRegHeart } from "react-icons/fa";

export const Header: React.FC = () => {
    return (
        
        <S.StyledHeader>
            <S.WrapperHeader>
                <img src={logoApet} width={150}/>
                <S.WrapperButton>
                    <FaRegHeart />
                    <S.DonateButton>Doe</S.DonateButton>
                    <S.LoginButton>Entrar</S.LoginButton>
                    <S.AuthButton>Criar Conta</S.AuthButton>
                </S.WrapperButton>
            </S.WrapperHeader>
        </S.StyledHeader>

        
    );
};