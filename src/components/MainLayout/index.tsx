import { Spin, Layout } from 'antd'
import React from 'react'
import './index.styl'

interface MainLayoutProps {
  spinnning?: boolean,
  className?: string,
  children?: any,
  header?: any,
  sider?: any,
}

const MainLayout = ({ spinnning, children, className, header, sider }: MainLayoutProps) => {
  return (
      <Layout className={`MainLayout ${className}`}>
        <Layout>
          {header && <Layout.Header>{header}</Layout.Header>}
          <Layout.Content>
            <Spin spinning={spinnning} size='large'>
              {children}
            </Spin>
          </Layout.Content>
          {/*<Layout.Footer>Footer</Layout.Footer>*/}
        </Layout>
        {sider && <Layout.Sider width='35%' theme='light'>{sider}</Layout.Sider>}
      </Layout>
  )
}

export default MainLayout
