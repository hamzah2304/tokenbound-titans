import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="http:localhost:3000/pre-battle" target={"_blank"}>
				<p>logo</p>
				{/* <img className={styles.alchemy_logo} src="/cw3d-logo.png"></img> */}
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
