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

    const bornThisMonth = {};
    arr.forEach((element) => {
      if (bornThisMonth[element] === undefined) {
        bornThisMonth[element] = 1
      } else {
        bornThisMonth[element] +=1
      }
    });

    function chooseColor(peopleBornThisMonth) {
      if (peopleBornThisMonth < 3) {
        return 'grey'
      } else if (peopleBornThisMonth < 7) {
        return 'blue'
      } else if (peopleBornThisMonth < 11) {
        return 'green'
      } else return 'red'
    }

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
                      return <td style={{color:chooseColor(bornThisMonth[item[columnTitle].split("-")[1]])}} key={item[columnTitle] + columnTitle }>{item[columnTitle].split("T")[0]}</td>
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
