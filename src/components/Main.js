import React from 'react';
import Topic from 'src/components/Topic.js';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        };
    }

    loadMore = () => {
        const { categoryList } = this.props;
        const length = categoryList.length - 1;
        if (this.state.count === length) return;
        // Load het film roi => stop
        if (this.state.count + 2 > length) {
            this.setState({ count: length }, () => null);
        }

        this.setState({ count: this.state.count + 2 }, () => null);
        window.addEventListener('scroll', () => {
            if (this.state.count === length) return;

            let loadMore = document.querySelector('.load-more');
            let newCount =
                this.state.count + 2 > length ? length : this.state.count + 2;
            if (window.scrollY + window.innerHeight > loadMore.offsetTop) {
                this.setState({ count: newCount }, () => null);
            }
        });
    };

    render() {
        const { categoryList } = this.props;
        return (
            <div>
                {categoryList.map((category, index) => {
                    return (
                        <Topic
                            categoryName={category.name}
                            categoryId={category.id}
                            videoList={category.videoList}
                            key={index}
                        />
                    );
                })}

                {/* <div className="load-more">
                    <div onClick={this.loadMore}>
                        <button>Load More</button>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Main;
