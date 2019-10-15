import { Layout, Menu } from 'antd'
import styles from './index.css';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;


function BasicLayout(props) {
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
          defaultSelectedKeys={['goods']}
        >
          <Item key='goods'>商品</Item>
          <Item key='users'>用户</Item>
          <Item key='about'>关于</Item>
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
