import React from 'react';
import Film from 'src/components/Film.js';
import 'src/style/results.css';
import { videoSearch } from 'src/utils/request.js';

import { List, message, Avatar, Spin } from 'antd';
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import VList from 'react-virtualized/dist/commonjs/List';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';

class SearchResults extends React.Component {
    state = {
        loading: false,
        films: [],
        pageNo: 1,
        pageSize: 10,
        total: 100,
    };

    loadedRowsMap = {};

    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }

    componentDidMount() {
        this.fetchData((result) => {
            this.setState({
                films: result.data,
                total: result.total,
            });
        }, this.state.pageNo);
    }

    fetchData = (callback, pageNo) => {
        const { pageSize } = this.state;

        let { keyword } = this.props.match.params;

        videoSearch({ keyword, pageNo, pageSize }).then((result) => {
            callback(result);
        });
    };

    handleInfiniteOnLoad = ({ startIndex, stopIndex }) => {
        let { films } = this.state;
        const pageNo = this.state.pageNo + 1;
        this.setState({
            pageNo,
            loading: true,
        });
        for (let i = startIndex; i <= stopIndex; i++) {
            // 1 means loading
            this.loadedRowsMap[i] = 1;
        }
        this.fetchData((result) => {
            films = films.concat(result.data);
            this.setState({
                films,
                loading: false,
            });
        }, pageNo);
    };

    isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

    renderItem = ({ index, key, style }) => {
        const { films } = this.state;
        console.log('renderItem', { index, key, style }, films.length);
        return <Film video={films[index]} key={index} />;
    };

    render() {
        let { keyword } = this.props.match.params;
        const { films, columnWidth } = this.state;

        const vlist = ({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            onRowsRendered,
            width,
        }) => (
            <VList
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                overscanRowCount={2}
                rowCount={films.length}
                rowHeight={40}
                rowRenderer={this.renderItem}
                onRowsRendered={onRowsRendered}
                scrollTop={scrollTop}
                width={width}
            />
        );
        const autoSize = ({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            onRowsRendered,
        }) => (
            <AutoSizer disableHeight>
                {({ width }) =>
                    vlist({
                        height,
                        isScrolling,
                        onChildScroll,
                        scrollTop,
                        onRowsRendered,
                        width,
                    })
                }
            </AutoSizer>
        );
        const infiniteLoader = ({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
        }) => (
            <InfiniteLoader
                isRowLoaded={this.isRowLoaded}
                loadMoreRows={this.handleInfiniteOnLoad}
                rowCount={films.length}
            >
                {({ onRowsRendered }) =>
                    autoSize({
                        height,
                        isScrolling,
                        onChildScroll,
                        scrollTop,
                        onRowsRendered,
                    })
                }
            </InfiniteLoader>
        );
        return (
            <div className="results">
                <h4>Results for</h4>
                <p className="search-key">{keyword}</p>
                <span className="hide note">No matches</span>
                {films.length > 0 && (
                    <WindowScroller>{infiniteLoader}</WindowScroller>
                )}
                {this.state.loading && <Spin className="demo-loading" />}
            </div>
        );
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }
}

export default SearchResults;
