import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import Link from 'umi/link'
import Goods from './goods/index'

export default function() {
  return (
    <div className={styles.normal}>
      {/*<div className={styles.welcome} />*/}
      {/*<ul className={styles.list}>*/}
        {/*<li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>*/}
        {/*<li>*/}
          {/*<a href="https://umijs.org/guide/getting-started.html">*/}
            {/*{formatMessage({ id: 'index.start' })}*/}
          {/*</a>*/}
        {/*</li>*/}
      {/*</ul>*/}

      {/*<ul>*/}
        {/*<li>*/}
          {/*<Link to='/goods'>商品</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
          {/*<Link to='/users'>用户</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
          {/*<Link to='/about'>关于</Link>*/}
        {/*</li>*/}
      {/*</ul>*/}

      <Goods/>
    </div>
  );
}
