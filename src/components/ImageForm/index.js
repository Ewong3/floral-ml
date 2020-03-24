import React, { PureComponent } from 'react'
import { Input, Button, TextField } from '@material-ui/core'

export class ImageForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
        };
    }

    onFileChangeHandler = (event) => {
        const file = event.target.files[0];
        
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
      
        reader.onloadend = function (e) {
            this.setState({
                uploadedFile: [reader.result],
            })
        }.bind(this);
    }

    handleChange = (e) => {
        const { handleSubmit } = this.props;
        const { uploadedFile } = this.state;

        e.preventDefault();
        handleSubmit(uploadedFile);
    }

    render() {
        const { uploadedFile } = this.state;

        return (
            <>
                <form id="image-form" action="/" onSubmit={this.handleChange} method="POST">
                    <Input id="image-field" label="Submit image to classify" type="file" onChange={this.onFileChangeHandler}/>
                    <Button id="image-submit" type="submit" value="Submit">Submit Image</Button>
                </form>
                { uploadedFile && <img src={uploadedFile}/> }
            </>
        )
    }
}

export default ImageForm
