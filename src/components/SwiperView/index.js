import React, {Component} from 'react'

import './index.scss'

export default class SwiperView extends Component {
    render() {
        const DOM = this.props.showType === 0 ? (
            <div className={'viewBox content'}>
                <div className={'left'}>
                    <img src={require('../../assets/phone_icon_1.png')} alt="phone_icon_1" className={'banner'}/>
                </div>
                <div className={'right'}>
                    <p className={'title3'}>广场神评</p>
                    <p className={'title4'}>广场大神抖机灵、神补刀</p>
                </div>
            </div>
        ) : (
            this.props.showType === 1 ? (
                <div className={'viewBox content'}>
                    <div className={'left'}>
                        <img src={require('../../assets/phone_icon_2.png')} alt="phone_icon_1" className={'banner'} style={{width:'569px'}}/>
                    </div>
                    <div className={'right'}>
                        <p className={'title3'}>问答展示</p>
                        <p className={'title4'}>一问一答，让陌生不再“陌生”</p>
                    </div>
                </div>
            ) : (
                <div className={'viewBox content'}>
                    <img src={require('../../assets/phone_icon_3_bn.png')} alt="phone_icon_3_bn" className={'phone_icon_3_bn'}/>
                    <div className={'left'}>
                        <img src={require('../../assets/phone_icon_3.png')} alt="phone_icon_1" className={'banner'} style={{width:'600px'}}/>
                    </div>
                    <div className={'right'}>
                        <p className={'title3'}>实时语音</p>
                        <p className={'title4'}>暖男、御姐、萝莉你想要的声音</p>
                        <p className={'title5'}>这里都有</p>
                    </div>
                </div>
            )
        )
        return (
            <div className={'mainBox'}>
                {DOM}
            </div>
        )
    }
}
