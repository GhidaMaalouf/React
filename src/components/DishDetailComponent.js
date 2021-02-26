import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    render(){
        const dish = this.props.dish;
        const comments = dish.comments.map(comment => {
            return(
                <div>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {comment.date}</p>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle heading>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                </div>
            </div>
        );
    }

};


export default DishDetail;