import 'src/style/web-container.css';
import React from 'react';
import Film from 'src/components/Film.js';
import 'src/style/results.css';
import { categoryVideoByPage } from 'src/utils/request.js';
import { Link, withRouter } from 'react-router-dom';

import { List, message, Avatar, Spin, Skeleton, Divider } from 'antd';

import InfiniteScroll from 'react-infinite-scroll-component';

class SearchResults extends React.Component {
    state = {
        loading: false,
        films: [],
        pageNo: 1,
        pageSize: 10,
        total: 10,
    };

    static getDerivedStateFromProps(props, state) {
        // 保存 prevId 在 state 中，以便我们在 props 变化时进行对比。
        // 清除之前加载的数据（这样我们就不会渲染旧的内容）。
        if (state.id && props.match.params.id !== state.id) {
            return {
                id: props.match.params.id,
                loading: false,
                films: [],
                pageNo: 1,
                pageSize: 10,
                total: 10,
            };
        }
        // 无需更新 state
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.films.length === 0 && !this.state.loading) {
            /*list infinite start---------------------------------------------------------------------------------------*/
            this.loadMoreData();
            /*list infinite end---------------------------------------------------------------------------------------*/
        }
    }

    componentDidMount() {
        /*list infinite start---------------------------------------------------------------------------------------*/
        this.loadMoreData();
        /*list infinite end---------------------------------------------------------------------------------------*/
    }

    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }

    /*list infinite start---------------------------------------------------------------------------------------*/
    loadMoreData = () => {
        const { name: categoryName, id } = this.props.match.params;

        const { loading, pageNo: pageNo, pageSize: pageSize } = this.state;

        if (loading) {
            return;
        }
        this.setState({
            loading: true,
        });
        categoryVideoByPage({ categoryId: id, pageNo, pageSize })
            .then((res) => {
                this.setState({
                    id,
                    loading: false,
                    films: [...this.state.films, ...res.data],
                    pageNo: this.state.pageNo + 1,
                    total: res.total,
                });
            })
            .catch(() => {
                this.setState({
                    loading: false,
                });
            });
    };
    /*list infinite end---------------------------------------------------------------------------------------*/

    render() {
        const categoryName = this.props.match.params.name;
        const { films, loading, total } = this.state;

        return (
            <div className="results">
                <h1 className="title">{categoryName}</h1>
                {films.length > 0 && (
                    <div
                        id="scrollableDiv"
                        style={{
                            height: 'calc(100vh - 118px)',
                            overflow: 'auto',
                        }}
                    >
                        <InfiniteScroll
                            dataLength={films.length}
                            next={this.loadMoreData}
                            hasMore={films.length < total}
                            loader={
                                <Skeleton
                                    avatar
                                    paragraph={{
                                        rows: 1,
                                    }}
                                    active
                                />
                            }
                            endMessage={
                                <Divider plain>
                                    It is all, nothing more 🤐
                                </Divider>
                            }
                            scrollableTarget="scrollableDiv"
                        >
                            <List
                                grid={{ gutter: 0, column: 2 }}
                                itemLayout="vertical"
                                dataSource={films}
                                renderItem={(item, index) => (
                                    <Film video={item} key={index} />
                                )}
                            />
                        </InfiniteScroll>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(SearchResults);
