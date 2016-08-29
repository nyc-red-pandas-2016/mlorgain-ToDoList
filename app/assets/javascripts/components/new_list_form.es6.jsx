class NewListForm extends React.Component {
  render() {
    return (
      <div>
        <form className="new-list" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="textInput" placeholder="Type to add a new list" />
          <input type="submit" value="Create"/>
        </form>
      </div>
    );
  }
}
