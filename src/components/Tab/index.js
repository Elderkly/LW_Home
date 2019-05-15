import React,{Component} from "react";
//  withRouter 用户获取router参数
// import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateScrollIndex} from '../../redux/actions/scrollActions'

import './index.scss'

class Tab extends Component {
    clickTab(index){
        this.props.updateScrollIndex(index)
    }
    render() {
        return (
            <div
                className={'contentBox navigationBox'}
                style={{background:`${this.props.scrollIndex === 0 ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'}`}}
                // className={`contentBox navigationBox ${this.props.location.pathname === '/' ? 'fixedHead' : null}`}
            >
                <div className={'navigation'}>
                    <div className={'logo'}>
                        <img src={require('../../assets/logo.png')} alt={'logo'}/>
                    </div>
                    <div className={'tab'}>
                        <div
                              className={this.props.scrollIndex === 0 ? 'focus' : null}
                              style={{width:'48px'}}
                              onClick={() => this.clickTab(0)}>
                            下载
                        </div>
                        <div
                              className={this.props.scrollIndex === 1 ? 'focus' : null}
                              onClick={() => this.clickTab(1)}
                        >
                            产品介绍
                        </div>
                        <div
                              className={this.props.scrollIndex === 2 ? 'focus' : null}
                              onClick={() => this.clickTab(2)}
                              style={{marginRight:'0px'}}
                        >
                            联系我们
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const getState = state => ({
    scrollIndex:state.scrollIndex
})

const setFun = dispatch => ({
    updateScrollIndex(index){
        dispatch(updateScrollIndex(index))
    }
})

export default connect(getState,setFun)(Tab)
