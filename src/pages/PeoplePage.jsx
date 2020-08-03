import React from 'react';

class PeoplePage extends React.Component {
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
    const { error, isLoaded, data } = this.state;
    const arr = [];

    data.map((item) => {
      Object.keys(data[0]).map((columnTitle) => {
        if (columnTitle === 'dob') {
          arr.push(item[columnTitle].split("-")[1])
        }
      })
    });

    const colorObj = {};
    arr.forEach((element) => {
      if (colorObj[element] === undefined) {
        colorObj[element] = 1
      } else {
        colorObj[element] +=1
      }
    });

    console.log(colorObj);


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <table className="table container">
            <thead>
              <tr>
                {Object.keys(data[0]).map(columnTitle => (
                  <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  {Object.keys(data[0]).map((columnTitle) => {
                    if (columnTitle === 'dob') {
                      return <td key={item[columnTitle] + columnTitle}>{item[columnTitle].split("T")[0]}</td>
                    } else {
                      return <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default PeoplePage;