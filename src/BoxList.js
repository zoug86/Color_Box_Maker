import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { height: '', width: '', color: '' }
            ]
        }
        this.addBox = this.addBox.bind(this);
    }
    addBox(box) {
        let newBox = { ...box, id: uuid() };
        this.setState(state => ({
            boxes: [...this.state.boxes, newBox]
        }));
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render() {
        let boxes = this.state.boxes.map(box => (
            <Box
                key={box.id}
                id={box.id}
                height={box.height}
                width={box.width}
                color={box.color}
                removeBox={() => this.remove(box.id)} />
        ))
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm addBox={this.addBox} />
                { boxes}
            </div >

        );
    };
}

export default BoxList;