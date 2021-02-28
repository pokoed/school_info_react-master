import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class newPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meal: null
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/')
        .then(res=>res.json())
        .then(data=>this.setState({meal: data}));
    };
    
    render() {
        const {meal} = this.state;
        if (meal) {
            console.log(typeof(meal))
            console.log(Object.keys(meal).length)
        }
        console.log(meal)
        // var mealLen = meal.length
        
        function printAll(meal, length) {
            let value = "오늘의 급식은"
            for (let index = 0; index < length; index++) {
                value = value + ` ${meal[index]}`;
                value = value.replace("amp;", "");
            }
            console.log(value)
            return value
        }

        return (
            <div>
                <header>
                    <div class="menu">
                        <div class="logo">$$</div>
                        <div class="menu-all"><Link to="#">온도</Link></div>
                        <div class="menu-all"><Link to="#">미세먼지</Link></div>
                        <div class="menu-all"><Link to="#">급식</Link></div>
                    </div>
                </header>
                <article>
                    <div class="temperature"></div>
                    <div class="finedust"></div>
                    <div class="cafeteria">
                        <p>{meal ? printAll(meal, Object.keys(meal).length) : "로딩중..."}</p>
                    </div>
                </article>
            </div>
        )
    }
}

export default newPage
