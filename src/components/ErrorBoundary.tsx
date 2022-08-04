import React from 'react';

class ErrorBoundary extends React.Component<
  { children: JSX.Element },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: JSX.Element }) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      hasError: true,
      errorMessage: `${error?.message || 'Error'}: ${
        info?.componentStack || error
      }`,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>
            {!!this.state.errorMessage
              ? this.state.errorMessage
              : 'Something went wrong.'}
          </p>
        </div>
      );
    } else return this.props.children;
  }
}

export default ErrorBoundary;
