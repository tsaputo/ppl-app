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
    const fullNameWithMonth = {};
    const bornThisMonth = {};
    const arrOfMonths = [];

    data.map((item) => {
      const month = item['dob'].split("-")[1];
      const fullName = item.firstName + ' ' +item.lastName;
      if (fullNameWithMonth[month] === undefined) {
        fullNameWithMonth[month] = [];
        fullNameWithMonth[month].push(fullName)
      } else {
        fullNameWithMonth[month].push(fullName);
      }
    });

    data.map((item) => {
      Object.keys(data[0]).map((columnTitle) => {
        if (columnTitle === 'dob') {
          arrOfMonths.push(item[columnTitle].split("-")[1])
        }
      })
    });

    arrOfMonths.forEach((element) => {
      if (bornThisMonth[element] === undefined) {
        bornThisMonth[element] = 1
      } else {
        bornThisMonth[element] +=1
      }
    });

    function choosebuttonColor(peopleBornThisMonth) {
      if (peopleBornThisMonth < 3) {
        return 'secondary'
      } else if (peopleBornThisMonth < 7) {
        return 'primary'
      } else if (peopleBornThisMonth < 11) {
        return 'success'
      } else return 'danger'
    }

    function showBornThisMonth(month) {
      alert(fullNameWithMonth[month]);     
      return fullNameWithMonth[month];
    }

    const monthArr = {
      'January': '01',
      'February': '02',
      'March': '03',
      'April': '04',
      'May': '05',
      'June': '06',
      'July': '07',
      'August': '08',
      'September': '09',
      'October': '10',
      'November': '11',
      'December': '12'
    }

    return (
    <div>
      <div>
          {Object.keys(monthArr).map((item) =>(<button className={'m-1 btn btn-'+choosebuttonColor(bornThisMonth[monthArr[item]])} type="button" data-toggle="collapse" key={item.id+item} data-target="#collapseExample" onClick={(e) => showBornThisMonth(monthArr[item], e)}> {item} </button>))}
      </div>
      <div>
        <div className="collapse show" id="collapseExample">
          <div className="card card-body">
            <div>
              { fullNameWithMonth['01'] }
            </div>

          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MonthsPage;
