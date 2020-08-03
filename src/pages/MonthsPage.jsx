import React from 'react';

class MonthsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            data: data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
  }

  render() {
    const { data } = this.state;
    return (
      <div>
      <p>
        <button class="btn btn-primary m-1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          January
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          February
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          March
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          April
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          May
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          June
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          July
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          August
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          September
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          October
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          November
        </button>
        <button class="btn btn-primary ml-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          December
        </button>
      </p>
      <div class="collapse show" id="collapseExample">
        <div class="card card-body">
          list of people TBD 
        </div>
      </div>
    </div>
    )
  }
}

export default MonthsPage;