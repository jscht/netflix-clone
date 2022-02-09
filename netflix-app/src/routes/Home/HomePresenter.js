import PropTypes from "prop-types";

function HomePresenter(props) {
    console.log(props.movieDetail)
    return (
        <div>
            {
                props.loading ? <h2>loading...</h2> 
                : (
                    <div>
                        {props.movieDetail.title}
                    </div>
                )
            }
        </div>
    )
}

HomePresenter.propTypes = {
    movieDetail: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default HomePresenter;