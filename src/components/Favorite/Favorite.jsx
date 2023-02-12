import React from "react";
import "./Favorite.css"
import {fav_left} from "../Data/Data";
import {fav_right} from "../Data/Data";

const Favorite = () => {
    return (
        <>
            <div className='favorite-section'>
                <div className='leftcolumn'>
                    <items className='fav'>
                        {
                            fav_left.map((item, index) => (
                                <div className='card'>
                                    <div className="flex items-center justify-between">
                                        <span className='fav-title'>
                                            <h2>{item.name}</h2>
                                        </span>
                                        <a href={'/#/Recipe?r=' + item.name} target='_blank'>
                                            <span className='fav-sign'>
                                                <img className='fav_sign' src='./image/recipe_yellow.svg' />
                                            </span>
                                        </a>
                                    </div>
                                    <div className='image-card'>
                                        <img className='fav_pic' src={item.source} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className='fav-ingre'>
                                            <i className='fa fa-bookmark'></i> {item.ingredient}
                                        </span>
                                        <button className='fav-btn'>
                                            <i className='fa fa-share-alt'></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </items>
                </div>
                <div className='rightcolumn'>
                    <items className='fav'>
                        {
                            fav_right.map((item, index) => (
                                <div className='card'>
                                    <div className="flex items-center justify-between">
                                        <span className='fav-title'>
                                            <h2>{item.name}</h2>
                                        </span>
                                        <a href={'/#/Recipe?r=' + item.name} target='_blank'>
                                            <span className='fav-sign'>
                                                <img className='fav_sign' src='./image/recipe_yellow.svg' />
                                            </span>
                                        </a>
                                    </div>
                                    <div className='image-card'>
                                        <img className='fav_pic' src={item.source} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className='fav-ingre'>
                                            <i className='fa fa-bookmark'></i> {item.ingredient}
                                        </span>
                                        <button className='fav-btn'>
                                            <i className='fa fa-share-alt'></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </items>
                </div>
            </div>
        </>
    )
}

export default Favorite