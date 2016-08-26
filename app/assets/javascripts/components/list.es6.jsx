class List extends React.Component {
  render() {
    var data = this.props.data;
    return (
      <li className="list-item"> {data.title} </li>
    );
  }
}
