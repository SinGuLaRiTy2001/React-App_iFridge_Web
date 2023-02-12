import React from "react"
import "./Sharing.css"
import {recipes} from "../Data/Data";

const Sharing = () => {
    return (
        <div className='like-section' id='like'>
            <div className='large-box'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                    {recipes.map((recipe) => {
                        return (
                            <div
                                className="small-box"
                                key={recipe.id}
                            >
                                <img src={recipe.image} alt="" className="like-img" />
                                <div className="flex justify-between mb-4">
                                    <img src={recipe.source} alt="" className="name-img" />
                                    <span className='name-box'>{recipe.name}</span>
                                    <div className="signal3">
                                        <button className='like-btn'>
                                            <i className='fa fa-star'></i>Like
                                        </button>
                                        <button className='like-btn'>
                                            <i className='fa fa-reply'></i>Reply
                                        </button>
                                    </div>
                                </div>
                                <span className="content-like">
                                    {recipe.description}
                                </span>
                                <div className="flex items-center justify-between">
                                    <span className="like-person">
                                        <i className='fa fa-thumbs-up'></i> {recipe.price}
                                    </span>
                                    <span className="like-share">
                                        <i className='fa fa-share-alt'></i>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sharing