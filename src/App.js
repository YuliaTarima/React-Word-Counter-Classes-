import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';
import Counter from './Counter';
import Editor from './Editor';
import SaveManager from './SaveManager';
import countWords from './countWords';
import makeFakeRequest from './makeFakeRequest';

class App extends React.Component {
    constructor() {
        super();
        this.state = {text: ''};
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(currentText) {
        this.setState(() => ({text: currentText}));
    }

    render() {
        const {targetWordCount} = this.props;
        const {text} = this.state;
        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        React word counter with progress bar defaulting to 20 words
                    </p>
                </header>

                <form className="measure pa4 sans-serif">
                    <Editor
                        onTextChange={this.handleTextChange}
                        text={text}
                    />
                    <Counter count={wordCount}/>
                    <ProgressBar completion={progress}/>
                    <SaveManager saveFunction={makeFakeRequest}
                                 data={this.state}/>
                </form>
            </div>
        );
    }

}

export default App;
