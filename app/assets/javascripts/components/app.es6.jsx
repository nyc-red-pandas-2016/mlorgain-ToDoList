class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list_items: []
    }
  };

  componentDidMount() {
    $.ajax({
      url: "/lists",
      type: "GET"
    }).done((response) => {
      this.setState({
        list_items: response
      });
    })
  }

  render(){
    return (
      <div className="container">
        <h1>ToDoList</h1>
        <section id="list-item-container">
          <h3>Lists</h3>
            <ul>
              { this.state.list_items.map( function (list, i) {
                 return ( <List key={i} data={list} />)
                }
              )}
            </ul>
        </section>
      </div>
    );
  }
}

