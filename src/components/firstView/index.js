import React, {Component} from 'react'

import './index.scss'

export default class SwiperView extends Component {
    state = {
        canplay:false
    }
    donload(type) {
        type === 1 ? window.location.href = 'http://lw.leyungame.com/share/apk-share/liaowan_share.apk' : alert('暂不支持IOS哦')
    }
    render() {
        return (
            <div className={'viewBox'}>
                <img src={require('../../assets/banner_home_left.png')} alt="banner_home_left" className={'banner_home_left'}/>
                <img src={require('../../assets/banner_home_right.png')}  alt="banner_home_right" className={'banner_home_right'}/>
                <div className={'left'}>
                    <div className={'text1'}>Meet the playful you</div>
                    <img src={require('../../assets/liaowan.png')} alt="liaowan" className={'liaowan'}/>
                    <div className={'textBox'}>
                        <div className={'leftView'}/>
                        <div className={'textViewBox'}>
                            <p>
                                广场社区，爱玩范儿。有趣的人、爱玩的人、爱聊的人，还缺一个你！
                            </p>
                            <p>
                                主页多方面展示个性（图片、语音、短视、问答），拒绝聊天尴尬，
                            </p>
                            <p>
                                专属撩汉/撩妹话术
                            </p>
                            <p>
                                聊天交友，会撩才是最好的
                            </p>
                        </div>
                    </div>
                    <div className={'buttonBox'}>
                        <div className={'download android'} onClick={() => this.donload(1)}>
                            <img src={require('../../assets/icon_android.png')} alt="icon_android"/>
                            <span>安卓下载</span>
                        </div>
                        <div className={'download ios'} onClick={() => this.donload(2)}>
                            <img src={require('../../assets/icon_ios.png')} alt="icon_ios"/>
                            <span>IOS下载</span>
                        </div>
                    </div>
                </div>
                <div className={'right'}>
                    <img src={require('../../assets/phone.png')} alt="phone" className={'phone'}/>
                    {
                        !this.state.canplay ? <img src={require('../../assets/video_img.png')} alt="video_img" className={'phoneContent'}/> : null
                    }
                    <video src={require('../../assets/video.mp4')}
                           className={'phoneContent'}
                           autoPlay="autoplay"
                           onCanPlay={() => this.setState({canplay:true})}
                    />
                </div>
            </div>
        )
    }
}
