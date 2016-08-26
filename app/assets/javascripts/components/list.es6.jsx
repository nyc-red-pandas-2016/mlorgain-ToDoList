class List extends React.Component {
  render() {
    var listItem = this.props.data;
    return (
      <div className="list-item">
        <li>
          <CheckBox />
          {listItem.title}
        </li>
      </div>
    );
  }
}
