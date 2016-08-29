class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: [],
      showForm: false
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
  };

  handleSubmit(e) {
    e.preventDefault();
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

  };

  onClick: function() {
    this.setState({
      showForm: true
    });
  }

  render(){
    return (
      <div className="container">
        <h1>ToDoList</h1>
        <section id="list-item-container">
          <div className="list-heads">
            <h2>Lists</h2>
            <h2>New List onClick={this.onClick}</h2>
            <div>
              <NewListForm />
            </div>
          </div>
            <ul>
              { this.state.listItems.map( (list, i) => ( <List key={i} data={list} />))}
            </ul>
        </section>
      </div>
    );
  }
}

