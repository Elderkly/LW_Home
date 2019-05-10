import React,{Component} from "react";
//  withRouter 用户获取router参数
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateScrollIndex} from '../../redux/actions/scrollActions'

import './index.scss'
import scrollIndex from "../../redux/reducers/scrollReducers";

class Tab extends Component {
    render() {
        console.log(this.props)
        return (
            <div
                style={{background:`${this.props.scrollIndex === 0 ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'}`}}
                className={`contentBox navigationBox ${this.props.location.pathname === '/' ? 'fixedHead' : null}`}
            >
                <div className={'navigation'}>
                    <div className={'logo'}>
                        <img src={require('../../assets/logo.png')} alt={'logo'}/>
                    </div>
                    <div className={'tab'}>
                        <Link to={'/'}>
                            首页
                        </Link>
                        <Link to={'/introduce'}>
                            关于我们
                        </Link>
                        <Link to={'/about'}>
                            关于我们
                        </Link>
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

export default connect(getState,setFun)(withRouter(Tab))
