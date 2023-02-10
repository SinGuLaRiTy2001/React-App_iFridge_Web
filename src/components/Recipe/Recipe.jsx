import React from "react";
import ReactDOM from 'react-dom';
import "./Recipe.css"

class WebPage extends React.Component {

    constructor() {
        super();
        this.state = {
            iFrameHeight: '600px'
        }
    };
    getDish() {
        var url = decodeURI(window.location.href);
        var argIndex = url.split("?r=");
        if (argIndex[1] == 'undefined' || argIndex[1] == null || argIndex.length == 0)
        {
            alert("You haven't chosen a dish!");
            window.location.replace("/#/Recipe?r=Vegetable");
        }
        return argIndex[1];
    };
    render() {
        return (
            <>
                <iframe className="RecipeFrame"
                        style={{ width: '90%', height: this.state.iFrameHeight, overflow: 'visible' }}
                        onLoad={() => {
                            const obj = ReactDOM.findDOMNode(this);
                            this.setState({
                                "iFrameHeight": obj.contentWindow.document.body.scrollHeight + 'px'
                            });
                        }}
                        src={'https://hurrythefoodup.com/?s='+this.getDish()}
                        height={this.state.iFrameHeight}
                        sandbox="allow-same-origin"
                />
            </>
        );
    }
}

const Recipe = () => {
    return (
        <>
            <section className='Dish'>
                <div className='Container'>
                    <h1>Recipe</h1>
                    <h2>Here are some instructions provided by HurrytheFoodUp.</h2>
                </div>
                <WebPage />
            </section>
            <button className='ShareButton'><i className="fa fa-share"></i>Share</button>
            <button className='LikeButton'><i className="fa fa-heart"></i>Like</button>
        </>
    )
}

export default Recipe