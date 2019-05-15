import React, {Component}from 'react'

import './index.scss'

export default class About extends Component {
    render() {
        return (
            <div className={'viewBox'}>
                <div className={'aboutLeft'}>
                    <div className={'aboutPbox'}>
                        <p>地址：</p>
                        <p>广东省深圳市南山区软件园微软科通大厦24c</p>
                    </div>
                    <div className={'aboutPbox'}>
                        <p>邮箱：</p>
                        <p>lywx163@163.cn</p>
                    </div>
                    <div className={'aboutPbox'}>
                        <p>商务合作：</p>
                        <p>0755-26654484</p>
                    </div>
                    <div className={'aboutPbox'}>
                        <p>客服QQ：</p>
                        <p>2665421054</p>
                    </div>
                </div>
                <div className={'aboutRight'}>
                    <img src={require('../../assets/map.png')} alt="map"/>
                </div>
            </div>
        )
    }
}
