import React, { Component } from 'react';

class CookiesSettings extends Component {
    constructor(props) {
        super(props);
        
        this.CookiesTheme = this.Cookies.bind(this);
    }

    componentDidMount() {
        this.Cookies();
    }

    Cookies() {
        const body = document.getElementById('Body');
        const TxtInfoTheme = document.querySelector('.ThemeDefault');
        const Transition = document.querySelector('.Transition');
        
        const TxtInfoAnimated = document.querySelector('.AnimatedDefault');
        
        const TxtInfoTransition = document.querySelector('.TransitionDefault');
   
        if(localStorage.getItem('Theme') === 'true'){
            body.classList.add('Dark');
            TxtInfoTheme.classList.add('Dark');
            Transition.classList.add('Animated');
        }else{
            body.classList.remove('Dark');
            TxtInfoTheme.classList.remove('Dark');
            Transition.classList.remove('Animated');
        }

        if(localStorage.getItem('Animated') === 'true'){
            body.classList.add('NoAnimated');
            TxtInfoAnimated.classList.add('NoAnimated');
        }else{
            body.classList.remove('NoAnimated');
            TxtInfoAnimated.classList.remove('NoAnimated');
        }

        if(localStorage.getItem('Transition') === 'true'){
            body.classList.add('TransitionAllow');
            TxtInfoTransition.classList.add('TransitionAllow');
        }else{
            body.classList.remove('TransitionAllow');
            TxtInfoTransition.classList.remove('TransitionAllow');
        }
    }

    render() {
        return <div onClick={this.Cookies}></div>
    }
}

export default CookiesSettings;