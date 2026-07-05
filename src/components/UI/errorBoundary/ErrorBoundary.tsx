import { Component, ErrorInfo } from "react";
import { ReactChildrenProps } from "@types";

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ReactChildrenProps,
  ErrorBoundaryState
> {
  constructor(props: ReactChildrenProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Sheph,vse propalo!</h2>;
    }
    return this.props.children;
  }
}
