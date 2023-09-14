import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorModal from "./ErrorModal";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

class MyErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Handle the error (e.g., log the error)
    console.error("Error caught by error boundary:", error, errorInfo);
    this.setState({ error });
  }

  closeErrorModal = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;

    return (
      <>
        {this.props.children}
        <ErrorModal error={error} onClose={this.closeErrorModal} />
      </>
    );
  }
}

export default MyErrorBoundary;
