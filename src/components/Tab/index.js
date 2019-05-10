import React,{Component} from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateScrollIndex} from '../../redux/actions/scrollActions'
import scrollIndex from "../../redux/reducers/scrollReducers";

class Tab extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Link to={'/'}>
                    首页
                </Link>
                <Link to={'/introduce'} onClick={() => this.props.updateScrollIndex(2)}>
                    关于我们
                </Link>
                <Link to={'/about'}>
                    关于我们
                </Link>
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
