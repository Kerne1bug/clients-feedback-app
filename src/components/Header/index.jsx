import styles from './styles.module.css';
// import BCKGRND from './assets/bckground.png';
import FeedBackForm from '../ConnectWithUsForm';
import Message from './assets/message.svg';
import Bckgrnd from './assets/bckground.png';

function Header() {
	return (
		<div className={styles.header}>
			<img className={styles.backImg} src={Bckgrnd} alt="Сына-корзина" />
			<img className={styles.formIcon} src={Message} alt="Вам пришло новое сообщение" />
			<div className={styles.semiCircle} />
			<FeedBackForm />
		</div>
	);
}

export default Header;
