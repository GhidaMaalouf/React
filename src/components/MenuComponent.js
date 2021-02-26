import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { DishDetail } from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            comments: null
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish,
            comments:dish.comments
        });
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

     renderComments(comments){
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>
                                    -- {comment.author} ,{" "}
                                    {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit"
                                    }).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </li>

                        );
                    })}

                </div>
            );
        } else {
            return <div />;
        }
    };


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                          onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    {this.renderComments(this.state.comments)}

                </div>
            </div>
        );
    }
}

export default Menu;