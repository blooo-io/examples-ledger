// import './polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import App from '../App';

export default function Home() {
  return (
    <div className={styles.container}>
      <App />
    </div>
  );
}