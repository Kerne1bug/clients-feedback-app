import styles from './styles.module.css';
// import BCKGRND from './assets/bckground.png';
import FeedBackForm from '../ConnectWithUsForm';

function Header() {
	return (
		<div className={styles.layout}>
			<FeedBackForm />
		</div>
	);
}

export default Header;
