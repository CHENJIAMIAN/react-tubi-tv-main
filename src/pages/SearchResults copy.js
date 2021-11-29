import React, { useMemo } from 'react';
import Film from 'src/components/Film.js';
import 'src/style/results.css';
import { videoSearch } from 'src/utils/request.js';

import { List, message, Avatar, Spin } from 'antd';

import { FixedSizeList } from 'react-window';
import { AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

const GAP_SIZE = 20;
const CARD_HEIGHT = 300;
const CARD_WIDTH = 200;

class SearchResults extends React.Component {
    state = {
        loading: false,
        films: [],
        pageNo: 1,
        pageSize: 10,
    };
    loadedRowsMap = {};

    // 获取数据的方法
    fetchData = (callback, pageNo) => {
        const { pageSize } = this.state;

        let { keyword } = this.props.match.params;

        videoSearch({ keyword, pageNo, pageSize }).then((result) => {
            callback(result);
        });
    };
    // 首次获取数据
    componentDidMount() {
        this.fetchData((result) => {
            this.setState({
                films: result.data,
            });
        }, this.state.pageNo);
    }

    // 滚动时获取数据
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
    // 行加载标志
    isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

    render() {
        const { films } = this.state;

        const ListWrapper = ({ height, itemCount, width }) => {
            // How many cards can we show per row, given the current width?
            const columnCount = Math.floor(
                (width - GAP_SIZE) / (CARD_WIDTH + GAP_SIZE)
            );
            const rowCount = Math.ceil(itemCount / columnCount);

            return (
                <FixedSizeList
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
                </FixedSizeList>
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
                    <div
                        key={i}
                        className="Card"
                        style={{
                            flex: `0 0 ${cardWidth}px`,
                            height: cardHeight,
                            margin: `0 ${gapSize / 2}px`,
                        }}
                    >
                        Card {i}
                    </div>
                    // <Film
                    //     style={{
                    //         flex: `0 0 ${cardWidth}px`,
                    //         height: cardHeight,
                    //         margin: `0 ${gapSize / 2}px`,
                    //     }}
                    //     video={films[i]}
                    //     key={i}
                    // />
                );
            }

            return (
                <div className="Item" style={style}>
                    {cards}
                </div>
            );
        };

        let { keyword } = this.props.match.params;
        return (
            <div className="results">
                <h4>Results for</h4>
                <p className="search-key">{keyword}</p>
                <span className="hide note">No matches</span>
                {films.length > 0 && (
                    <AutoSizer>
                        {({ height, width }) => {
                            return (
                                <ListWrapper
                                    height={height}
                                    // itemCount={films.length}
                                    itemCount={500}
                                    width={width}
                                />
                            );
                        }}
                    </AutoSizer>
                )}
                {this.state.loading && <Spin className="demo-loading" />}
            </div>
        );
    }
}

export default SearchResults;
