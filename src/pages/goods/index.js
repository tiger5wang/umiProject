import Link from 'umi/link'
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page goods</h1>
      <ul>
        <li>
          <Link to="/goods/web">web架构师</Link>
        </li>
        <li>
          <Link to="/goods/js">JS高级课程</Link>
        </li>
        <li>
          <Link to="/goods/python">python架构师</Link>
        </li>
      </ul>
    </div>
  );
}
