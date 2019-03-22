interface MediaQueries {
  [key: string]: string;
}

const mq: MediaQueries = {
  small: '@media (min-width: 576px)',
  medium: '@media (min-width: 768px)',
  large: '@media (min-width: 992px)',
  xLarge: '@media (min-width: 1200px)',
};

export default mq;
