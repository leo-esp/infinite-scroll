import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewsList.css";
import { loadGetNewsList } from "../../redux";
import { getLoadNewsListUI } from "../../redux/selectors";
import Infinite from "react-infinite-loading";
import { Link } from "react-router-dom";

import News from "../News/News";

class NewsList extends Component {
  componentDidMount = () => {
    if (this.props.news.length === 0) {
      this.props.dispatch(loadGetNewsList(1));
    }
  };

  loadFunc = () => {
    this.props.dispatch(loadGetNewsList(this.props.nextPage));
  };

  render() {
    const { news, ui } = this.props;
    return (
      <div className="InfiniteScroll" ref={ref => (this.scrollParentRef = ref)}>
        {ui.isFetching && <div className="list-items">loading</div>}

        {!ui.error && news && news.length > 0 && (
          <Infinite
            handleLoading={this.loadFunc}
            scrollThreshold={250}
            elementScroll
            loading={ui.isFetching}
            scrollHeight={600}
          >
            {news.map((news, index) => (
              <Link
                to={{
                  pathname: "/details",
                  state: { url: news.webUrl }
                }}
                key={index}
              >
                <News news={news} />
              </Link>
            ))}
          </Infinite>
        )}

        {!ui.error && !ui.isFetching && news && news.length === 0 && (
          <div className="NewsList--empty">Dont have any news available</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.loadNews.newsList.list,
  nextPage: state.loadNews.newsList.nextPage,
  ui: getLoadNewsListUI(state)
});

export default connect(mapStateToProps)(NewsList);
