import { Modal } from "components/Modal/Modal";
import React, { Component } from "react";
import PropTypes from 'prop-types';


export class ImageGalleryItem extends Component {

    state = {
        shownModal: false,
    }

    onModal = () => {
        this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
    };

    render() {
        const { item } = this.props;
        const { webformatURL } = item;

        return (
            <li class="gallery-item">
                <img
                    onClick={this.onModal}
                    src={webformatURL}
                    alt="img" />
                {this.state.shownModal && <Modal onClose={this.onModal} image ={item}/>}
</li>
        )
    }

}

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
}