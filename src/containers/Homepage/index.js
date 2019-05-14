import React, {Component}from 'react'
import {updateScrollIndex} from "../../redux/actions/scrollActions";
import {connect} from "react-redux";

import './index.scss'

import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination'

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            index:0,
            openScrollSwitch:true,
            middleIndex:0
        }
    }
    componentWillMount() {
        window.addEventListener('mousewheel',this._onScroll)
    }

    componentWillUnmount() {
        this.props.updateScrollIndex(0)
        window.removeEventListener('mousewheel',this._onScroll)
    }
    _onScroll = (e) => {
        let { index } = this.state
        if (e.deltaY > 50 && this.state.openScrollSwitch && this.state.index !== 2) {
            const Index = Math.min(2,++index)
            this.setState({
                index,
                openScrollSwitch:false
            })
            this.props.updateScrollIndex(Index)
        } else if (e.deltaY < -50 && this.state.openScrollSwitch  && this.state.index !== 0) {
            const Index = Math.max(0,--index)
            this.setState({
                index,
                openScrollSwitch:false
            })
            this.props.updateScrollIndex(Index)
        }
    }
    handleChangeMiddleIndex = index => {
        this.setState({
            middleIndex:index
        });
    };
    render() {
        return (
            <SwipeableViews
                axis={'y'}
                index={this.state.index}
                animateHeight={true}
                springConfig={{
                    duration: '0.6s',
                    easeFunction: 'ease',
                    delay: '0s'
                }}
                onTransitionEnd={() => this.setState({openScrollSwitch:true})}
            >
                <div className={'slide'} style={{background: "#FEA900"}}>
                    slide n°1
                </div>
                <div className={'slide'} style={{background: "#B3DC4A"}}>
                    <SwipeableViews
                        axis={'x'}
                        index={this.state.middleIndex}
                        animateHeight={true}
                        springConfig={{
                            duration: '0.6s',
                            easeFunction: 'ease',
                            delay: '0s'
                        }}
                        enableMouseEvents
                        onChangeIndex={this.handleChangeMiddleIndex}
                    >
                        <div className={'slide'} style={{background: "#6AC0FF"}}>
                            slide n°1
                        </div>
                        <div className={'slide'} style={{background: "#B3DC4A"}}>
                            slide n°2
                        </div>
                        <div className={'slide'} style={{background: "#6AC0FF"}}>
                            slide n°3
                        </div>
                    </SwipeableViews>
                    <Pagination dots={3} index={this.state.middleIndex} onChangeIndex={this.handleChangeMiddleIndex}/>
                </div>
                <div className={'slide'} style={{background: "#B3DC4A"}}>
                    slide n°3
                </div>
            </SwipeableViews>
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

export default connect(getState,setFun)(Home)
