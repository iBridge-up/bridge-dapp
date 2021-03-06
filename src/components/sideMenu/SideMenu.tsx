import React, { useState, useEffect } from 'react'
import styles from './SideMenu.module.css'
import logo_ibridge from '../../assets/images/logo_24.png'
import { Layout, Menu, Image } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'

export const SideMenu: React.FC = () => {

	const [selectKey, setSelectKey] = useState('ibridge');
	const history = useHistory();
	useEffect(() => {
		const pathname = history.location.pathname.split('/')[1]
		setSelectKey(pathname);
		if (pathname === '') {
			setSelectKey('ibridge');
		} else {
			setSelectKey(pathname);
		}
	}, [history]);

	return (
		<div>
			<Layout.Sider className={styles.sider}>
				<Menu className={styles.menu} selectedKeys={[selectKey]}>
					<Menu.Item key="home" className={styles.menuitem} icon={<HomeOutlined />} 
					onClick={() => {
						window.location.href = 'https://www.ibridge.pro';
					}}>Home
					</Menu.Item>

					<Menu.Item className={styles.menuitem} key="ibridge"
						icon={<Image src={logo_ibridge} preview={false} style={{ margin: '-3px 0 0 -4px' }} />
						}
						onClick={() => {
							history.push('/ibridge')
						}}>
						iBridge
					</Menu.Item>
				</Menu>
			</Layout.Sider>
		</div>
	)
}
