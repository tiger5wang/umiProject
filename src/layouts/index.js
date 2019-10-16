import { Layout, Menu } from 'antd'
import Link from 'umi/link';
import styles from './index.css';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;


function BasicLayout(props) {
  console.log(props)
  const paths = [
    {path: '/goods'},
    {path: '/user'},
    {path: '/login'}
  ];
  const selectedPath = paths.filter(item => props.location.pathname.startsWith(item.path)).map(item => item.path);
  return (
    <Layout className={styles.normal}>
      {/*<h1 className={styles.title}>Yay! Welcome to umi!</h1>*/}
      {/*{props.children}*/}

      {/*页头*/}
      <Header className={styles.header}>
        <img className={styles.logo} src="https://zos.alipayobjects.com/rmsportal/DuZnPddOZJNoNRH.png" alt="网站LOGO"/>
        <Menu
          className={styles.menu}
          theme='dark'
          mode='horizontal'
          selectedKeys={selectedPath}
          defaultSelectedKeys={['/goods']}
        >
          <Item key='/goods'>
            <Link to='/goods'>商品</Link>
          </Item>
          <Item key='/user'>
            <Link to='/user'>我的</Link>
          </Item>
          <Item key='/login'>
            <Link to='/login'>登陆注册</Link>
          </Item>
        </Menu>
      </Header>
      {/*内容*/}
      <Content className={styles.content}>
        <div className={styles.content_box}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>页脚部分</Footer>
    </Layout>
  );
}

export default BasicLayout;
