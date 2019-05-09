import React,{Component} from "react";
import {Link} from 'react-router-dom'

export default class Tab extends Component {
    render() {
        return (
            <div>
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
        )
    }
}
