class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: []
    }
  };

  componentDidMount() {
    $.ajax({
      url: "/lists"
    }).done(function(response) {
      this.setState({
        listItems: response
      });
    }.bind(this))
  }

  render(){
    return (
      <div className="container">
        <h1>ToDoList</h1>
        <section id="list-item-container">
          <div className="list-heads">
            <h2>Lists</h2>
            <h2>New List</h2>
          </div>
            <ul>
              { this.state.listItems.map( (list, i) => ( <List key={i} data={list} />))}
            </ul>
        </section>
      </div>
    );
  }
}

