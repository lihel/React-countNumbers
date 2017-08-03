class CountNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.display = this.display.bind(this);
    }

    add() {
        this.setState({count: this.state.count + 1});
    }

    minus() {
        this.setState({count: this.state.count - 1});
    }

    display() {
        this.setState({count: 0});
    }

    render() {
        let mainStyle = {
            display: 'inline-block',
            textAlign: 'center'
        }
        let numberStyle = {
            fontSize: '60',
            color: '#faa'
        }
        let btnStyle = {
            width: '60',
            height: '40',
            fontSize: '30',
            margin: 20
        }
        return (
            <div style={mainStyle}>
                <div style={numberStyle}>{this.state.count}</div>
                <button style={btnStyle} onClick={this.add}>+</button>
                <button style={btnStyle} onClick={this.minus}>-</button>
                <button style={btnStyle} onClick={this.display}>0</button>

            </div>
        );
    }
}

ReactDOM.render(
    <CountNumber/>,
    document.getElementById('root')
);