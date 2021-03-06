import React, { Component } from 'react';

import ProxyCounter from './ProxyCounter';

export default class ProxyOnline extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    handleCallback = (proxyData) =>{
        this.props.parentCallback(proxyData);
    }

    render() {
        return (
            <>
            <style type="text/css">
                {`
                    .proxy-online {
                        color: #5B5858;
                        font-size: 2em;
                        font-family: 'Druk';
                    }

                    .proxy-count {
                        color: #C2C1C1;
                        font-size: 2em;
                        font-family: 'Druk';
                    }
                }`
                }
            </style>
            <div className="proxies my-5">
                <p className="w-100"><span className="proxy-online">PROXIES ONLINE: </span><span className="proxy-count"><ProxyCounter parentCallback = {this.handleCallback} /></span></p>
            </div>
            </>
        )
    }
}
