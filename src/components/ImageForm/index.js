import React, { PureComponent } from 'react'
import { Input, Button, TextField, Grid, List, ListItem } from '@material-ui/core'

export class ImageForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
        };
    }

    onFileChangeHandler = (event) => {
        const { handleSubmit } = this.props;
        const file = event.target.files[0];
        
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            this.setState({
                uploadedFile: [reader.result],
            });
            handleSubmit("image-preview", reader.result);
        }.bind(this);
    }

    render() {
        const { uploadedFile } = this.state;

        return (
            <List>
                <ListItem>
                    <Input id="image-field" label="Submit image to classify" type="file" onChange={this.onFileChangeHandler}/>
                </ListItem>
                <ListItem>
                    { uploadedFile && <img id="image-preview" src={uploadedFile}/> }
                </ListItem>
            </List>
        )
    }
}

export default ImageForm
