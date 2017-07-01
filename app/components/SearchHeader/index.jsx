import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import SearchInput from '../../components/SearchInput'

import './style.less'


class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="search-header-left f-l" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>   
                <div className="search-header-right p-r f-l">
                    <i className="p-a icon-search" ></i>
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>          
            </div>
        )
    }
    clickHandle(){
        window.history.back()
    }
    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHeader