import React, {Component}from 'react'
import {updateScrollIndex} from "../../redux/actions/scrollActions";
import {connect} from "react-redux";

import './index.scss'

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../../components/Pagination/Pagination'

import MiddleSwiperView from '../../components/SwiperView'
import FirstView from '../../components/firstView'
import AboutView from '../../components/AboutView'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
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
        let { scrollIndex } = this.props
        if (e.deltaY > 50 && this.state.openScrollSwitch && scrollIndex !== 2) {
            const Index = Math.min(2,++scrollIndex)
            this.setState({
                openScrollSwitch:false
            })
            this.props.updateScrollIndex(Index)
        } else if (e.deltaY < -50 && this.state.openScrollSwitch  && scrollIndex !== 0) {
            const Index = Math.max(0,--scrollIndex)
            this.setState({
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
            <div>
                <SwipeableViews
                    axis={'y'}
                    index={this.props.scrollIndex}
                    animateHeight={true}
                    springConfig={{
                        duration: '0.6s',
                        easeFunction: 'ease',
                        delay: '0s'
                    }}
                    onTransitionEnd={() => this.setState({openScrollSwitch:true})}
                >
                    <div className={'slide'}>
                        <FirstView/>
                    </div>
                    <div className={'slide'} style={{background: '#f6f6f6'}}>
                        <div className={'middleSlideBox'}>
                            <div style={{width:'1200px',margin:'auto'}}>
                                <p className={'title1'}>产品介绍</p>
                                <p className={'title2'}>PRODUCT  INTRODUCTION</p>
                            </div>
                            <AutoPlaySwipeableViews
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
                                style={{width:'300vw'}}
                            >
                                <MiddleSwiperView showType={0}/>
                                <MiddleSwiperView showType={1}/>
                                <MiddleSwiperView showType={2}/>
                            </AutoPlaySwipeableViews>
                        </div>
                        <Pagination dots={3} index={this.state.middleIndex} onChangeIndex={this.handleChangeMiddleIndex}/>
                    </div>
                    <div className={'slide'}>
                        <div className={'middleSlideBox'}>
                            <div style={{width:'1200px',margin:'auto'}}>
                                <p className={'title1'}>联系我们</p>
                                <p className={'title2'}>CONTACT US</p>
                            </div>
                            <AboutView/>
                        </div>
                        <div className={'footer'}>
                            <div className={'footerText1'}>
                                关于我们
                                <span style={{margin:'0 28px 0'}}>|</span>
                                联系我们
                            </div>
                            <div className={'footerText2'}>
                                深圳市陌玩科技有限公司    粤ICP备18113311号
                            </div>
                        </div>
                    </div>
                </SwipeableViews>
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

export default connect(getState,setFun)(Home)
