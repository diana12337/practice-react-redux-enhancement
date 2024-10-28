import React from 'react';

const withPopup = (styles) => (WrappedComponent) => {
  return class extends React.Component {
    state = {
      isOpened: true,
    };

    closePopup = (e) => {
      e.preventDefault();
      this.setState({ isOpened: false });
    };
    render() {
      const { isOpened } = this.state;

      if (isOpened) {
        return (
          <section style={styles}>
            <WrappedComponent />
            <button onClick={(e) => this.closePopup(e)}>close</button>
          </section>
        );
      }

      return <WrappedComponent />;
    }
  };
}; 


export default withPopup;