import React, {Component} from "react";

const hocDataWrapperForList = (View, getData) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null
            };
        }

        componentDidMount() {
            getData()
                .then((items) => {
                    this.setState({
                        data: items
                    })
                })
        }

        render() {
            const {data} = this.state;
            return <View {...this.props} data={data}/>
        }
    }
};


const hocDataWrapperForDetails = (View, getData, getImageUrl) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                item: null,
                image: null,
                loading: true,
                error: false
            }
        }

        updatePerson = () => {
            const {id} = this.props;
            if (!id) {
                return;
            }
            getData(id)
                .then((item) => {
                    this.setState({
                        item,
                        image: getImageUrl(item),
                        loading: false,
                        error: false
                    })
                })
                .catch(this.onError)
        };

        componentDidMount() {
            this.updatePerson();
        }

        componentDidUpdate(prevProps) {
            if (prevProps.id !== this.props.id) {
                this.setState({
                    loading: true
                });
                this.updatePerson(this.props.id)
            }
        }

        onError = () => {
            this.setState({
                loading: false,
                error: true
            })
        };

        render() {
            const {item, image, loading, error} = this.state;
            return <View {...this.props} item={item} image={image} loading={loading} error={error}/>
        }
    }
};

export {
    hocDataWrapperForList,
    hocDataWrapperForDetails
};
