import React from 'react';
import Button from './Shared/Button';
import styled from 'styled-components';
import { colorValues } from '../helpers/colors';
import { PinkPage, BlueH1, StackedButtons } from './Shared/Shared.style';

const ErrorText = styled.code`
  display: block;
  font-family: monospace;
  max-width: 90%;
  max-height: 50%;
  overflow-y: scroll;
  margin-bottom: 3rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${colorValues.offWhite};
  word-wrap: break-word;
  box-decoration-break: clone;
`;

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

  goHome() {
    window.history.pushState(undefined, undefined, '/');
    window.location.reload();
  }

  reportBug() {
    window.location.href = 'mailto:kelindsmith@gmail.com?';
  }

  render() {
    if (this.state.hasError) {
      return (
        <PinkPage>
          <BlueH1>Something went wrong!</BlueH1>
          <ErrorText>
            {this.state.errorMessage ||
              '(There was no message attached to this error)'}
          </ErrorText>
          <StackedButtons>
            <Button onClick={() => this.goHome()}>return home</Button>
            <Button color={'orange'} onClick={() => this.reportBug()}>
              report bug
            </Button>
          </StackedButtons>
        </PinkPage>
      );
    } else return this.props.children;
  }
}

export default ErrorBoundary;
