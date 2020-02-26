/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Component } from 'react';
import { Provider } from './context';
import Item from './Item';
import * as styles from './styles';

export interface Props {
  label?: string;
  onChange?: (value: string) => {};
  multi?: boolean;
}

export interface HeaderProps {
  children: React.ReactChild;
}

const Header = ({ children }: HeaderProps) => (
  <li css={styles.headerStyles}>{children}</li>
);
const Divider = () => <li css={styles.dividerStyles} />;

export default class Select extends Component<Props> {
  private wrapperRef: React.RefObject<HTMLInputElement>;

  static Header = Header;
  static Item = Item;
  static Divider = Divider;

  state = {
    listOpen: false,
    onChange: (value: string) => this.onChange(value),
  };

  constructor(props: Props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  onChange = (value: string) => {
    this.setState({ listOpen: this.props.multi });

    return this.props.onChange ? this.props.onChange(value) : null;
  };

  toggleOpen = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  handleClickOutside = (e: Event) => {
    const targetNode = e.target instanceof Node ? e.target : null;

    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(targetNode) &&
      this.state.listOpen
    ) {
      this.toggleOpen();
    }
  };

  render() {
    const { label, children } = this.props;
    const { listOpen } = this.state;

    return (
      <Provider value={this.state}>
        <div css={styles.container} ref={this.wrapperRef}>
          <button
            type="button"
            css={styles.styledSelect}
            onClick={this.toggleOpen}
            data-testid="select"
          >
            {label}
            <span css={styles.styledCaret}>
              <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 8a.828.828 0 0 1-.594-.252l-5.16-5.28a.874.874 0 0 1 0-1.216.827.827 0 0 1 1.189 0L7 5.924l4.565-4.672a.827.827 0 0 1 1.189 0 .874.874 0 0 1 0 1.216l-5.16 5.28A.828.828 0 0 1 7 8z"
                  fill="#787878"
                  fillRule="nonzero"
                  stroke="#787878"
                />
              </svg>
            </span>
          </button>
          {listOpen && <ul css={styles.styledList}>{children}</ul>}
        </div>
      </Provider>
    );
  }
}
