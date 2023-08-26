import FeedBackForm from '../FeedBackForm';
import Message from './assets/message.svg';
import Bckgrnd from './assets/bckground.png';
import {
	HeaderContainer,
	BackgroundImage,
	FormIcon,
	SemiCircle,
} from './styled';

function Header() {
	return (
		<HeaderContainer>
			<BackgroundImage src={Bckgrnd} alt="Сына-корзина" />
			<FormIcon src={Message} alt="Вам пришло новое сообщение" />
			<SemiCircle />
			<FeedBackForm />
		</HeaderContainer>
	);
}

export default Header;
