import React, { useMemo } from 'react';
import Film from 'src/components/Film.js';
import 'src/style/results.css';
import { videoSearch } from 'src/utils/request.js';

import { List, message, Avatar, Spin } from 'antd';
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import Grid from 'react-virtualized/dist/commonjs/Grid';
import VList from 'react-virtualized/dist/commonjs/List';

const GAP_SIZE = 20;
const CARD_HEIGHT = 300;
const CARD_WIDTH = 200;

class SearchResults extends React.Component {
    state = {
        loading: false,
        films: [],
        pageNo: 1,
        pageSize: 10,
        total: 100,
        //
        columnCount: 3,
        columnWidth: 100,
    };
    //
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

    render() {
        let { keyword } = this.props.match.params;
        const { films, columnWidth } = this.state;
        const isGrid = false;
        const columnCount = 10;

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
                rowRenderer={({ index, key, style }) => {
                    return <Film video={films[index]} key={index} />;
                }}
                onRowsRendered={onRowsRendered}
                scrollTop={scrollTop}
                width={width}
            />
        );
        const grid = ({
            //WindowScroller给的:
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            //isRowLoaded给的
            onRowsRendered,
            // AutoSizer给的
            width,
        }) => {
            return isGrid ? (
                <Grid
                    autoHeight
                    // autoWidth
                    cellRenderer={({ columnIndex, key, rowIndex, style }) => {
                        const { films } = this.state;
                        console.log(
                            'renderItem',
                            { columnIndex, key, rowIndex, style },
                            films.length
                        );
                        return (
                            <Film
                                video={films[rowIndex]}
                                key={rowIndex + '-' + columnIndex}
                            />
                        );
                    }}
                    columnWidth={columnWidth}
                    columnCount={columnCount}
                    rowHeight={({ index }) => {
                        return 100;
                    }}
                    rowCount={films.length}
                    width={width}
                    height={height}
                    overscanColumnCount={0}
                    overscanRowCount={10}
                    scrollToColumn={undefined}
                    scrollToRow={undefined}
                />
            ) : (
                vlist({
                    height,
                    isScrolling,
                    onChildScroll,
                    scrollTop,
                    onRowsRendered,
                    width,
                })
            );
        };

        const ListWrapper = ({ height, itemCount, width }) => {
            // How many cards can we show per row, given the current width?
            const columnCount = Math.floor(
                (width - GAP_SIZE) / (CARD_WIDTH + GAP_SIZE)
            );
            const rowCount = Math.ceil(itemCount / columnCount);

            return (
                <List
                    className="List"
                    height={height}
                    itemCount={rowCount}
                    itemSize={CARD_HEIGHT + GAP_SIZE}
                    width={width}
                    itemData={{
                        columnCount,
                        itemCount,
                        // These values could be dynamically calculated as well
                        cardWidth: CARD_WIDTH,
                        cardHeight: CARD_HEIGHT,
                        gapSize: GAP_SIZE,
                    }}
                >
                    {Item}
                </List>
            );
        };

        const Item = ({ data, index, style }) => {
            const { cardHeight, cardWidth, columnCount, gapSize, itemCount } =
                data;

            // This is the range of cards visible on this row, given the current width:
            const startIndex = index * columnCount;
            const stopIndex = Math.min(
                itemCount - 1,
                startIndex + columnCount - 1
            );

            const cards = [];
            for (let i = startIndex; i <= stopIndex; i++) {
                cards.push(
                    <Film
                        style={{
                            flex: `0 0 ${cardWidth}px`,
                            height: cardHeight,
                            margin: `0 ${gapSize / 2}px`,
                        }}
                        video={films[i]}
                        key={i}
                    />
                );
            }

            return (
                <div className="Item" style={style}>
                    {cards}
                </div>
            );
        };

        const autoSize = ({
            //WindowScroller给的:
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            //isRowLoaded给的
            onRowsRendered,
        }) => (
            <AutoSizer disableHeight>
                {({ width }) => {
                    return (
                        <ListWrapper
                            height={height}
                            itemCount={films.length}
                            width={width}
                        />
                    );
                }}
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
                {({ onRowsRendered, registerChild }) => {
                    return autoSize({
                        height,
                        isScrolling,
                        onChildScroll,
                        scrollTop,
                        onRowsRendered,
                    });
                }}
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
