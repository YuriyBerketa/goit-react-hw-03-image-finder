import  {fetchImages}  from './fetchAPI/fetchAPI';
import { Button } from './Button/Button';
import { Component } from "react"
import { ImageGallery } from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import Notiflix from 'notiflix';
import { Loader } from './Loader/Loader';

let page = 1;

export class App extends Component {
  state = {
    inputData: '',
    items: [],
    status: 'idle',
    totalHits: 0,
  }

  handlesubmit = async inputData => {
    page = 1;
    if (inputData.trim() === '') {
      Notiflix.Notify.info('Ми не знаємо що вас цікавить, введіть щось у пошук');
      return;
    } else {
      try {
        this.setState({ status: 'pending' });
        const { totalHits, hits } = await fetchImages(inputData, page);
        if (hits.lenght < 1) {
          this.setState({ status: 'idle' });
          Notiflix.Notify.failure('Вибачте, за Вашим запитом нічого не знайдено, спробуйте ще трохи згодом');
        } else {
          this.setState({
            items: hits,
            inputData,
            totalHits: totalHits,
            status: 'resolved',
          })
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  };

  onNextPage = async () => {
    this.setState({ status: 'pending' })
    try {
      const { hits } = await fetchImages(this.state.inputData, (page + 1));
      this.setState(prevState => ({
        items: [...prevState.items, ...hits],
      status: 'resolved',
      }))
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };
  render() {
    const { totalHits, status, items } = this.state;
    if (status === 'idle') {
      return (
        <div>
          <SearchBar onSubmit={this.handlesubmit} />
        </div>
      );
    };
    if (status === 'pending') {
      return (
        <div>
          <SearchBar onSubmit={this.handlesubmit} />
          <ImageGallery page={page} items={this.state.items} />
          <Loader />
          {totalHits > 12 && <Button onClick={this.onNextPage} />}
        </div>
      );
    };
    if (status === 'rejected') {
      return (
        <div>
          <SearchBar onSubmit={this.handlesubmit} />
          <p>Щось трапилось, спробуйте ще</p>
        </div>
      );
    };
    if (status === 'resolved') {
      return (
        <div>
          <SearchBar onSubmit={this.handlesubmit} />
          <ImageGallery page={page} items={this.state.items} />
          {totalHits > 12 && totalHits > items.length && (<Button onClick={this.onNextPage} />) }
        </div>
      );
    };
  };
};
