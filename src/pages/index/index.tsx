import { Component } from 'react'
import { Button, View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'
import { router } from '../../router'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goToPage() {
    router.navigateTo('/user')
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.goToPage}>go to user</Button>
      </View>
    )
  }
}

export default Index
