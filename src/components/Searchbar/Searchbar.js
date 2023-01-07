import { Component} from 'react';
import { Header, Form, FormButton, FormInput } from './Searchbar.styled';
import { ReactComponent as ButtonIcon} from '../../icons/search.svg';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
    state = {
        imageTag: '',
    };

    handleNameChange = event => {
        this.setState({ imageTag: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.imageTag.trim() === '') {
            return toast.error("You cannot search by empty field. Try again");
        }

        this.props.onSubmit(this.state.imageTag);
        this.setState({ imageTag: '' });
    };

    render() {
        return (
            <Header>
                <Form onSubmit={this.handleSubmit}>
                    <FormButton type="submit">
                        <ButtonIcon aria-label="Search"/>
                    </FormButton>

                    <FormInput
                        name="imageTag"
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.imageTag}
                        onChange={this.handleNameChange}
                    />
                </Form>
            </Header>
        )
    }
}
