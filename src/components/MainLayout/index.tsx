import { Spin, Layout } from 'antd'
import React from 'react'
import './index.styl'

interface MainLayoutProps {
  spinnning?: boolean,
  className?: string,
  children?: any,
}

const MainLayout = ({ spinnning, children, className }: MainLayoutProps) => {
  return (
      <Layout className={`MainLayout`}>
        <Spin spinning={spinnning || false} size='large'>
          <Layout.Content className={className}>{children}</Layout.Content>
        </Spin>
      </Layout>
  )
}

export default MainLayout
