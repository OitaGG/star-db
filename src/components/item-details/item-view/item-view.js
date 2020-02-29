import React, {Component} from "react";

const Record = ({item, label, field}) => {
    return(
        <li className="list-group-item">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export default class ItemView extends Component{
    render() {
        const {item, image, content} = this.props;
        return(
            <React.Fragment>
                <img className="person-details-img" src={image}/>
                <div className="person-details-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group-flush person-details-body-characters">
                        {
                            React.Children.map(content, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
};

export {
  Record
};
