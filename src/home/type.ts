export type SummaryItems = Array<{
  label: string;
  score: {
    value: number;
    total: number;
  };
  icon: {
    src: string;
    alt: string;
  };
  className: string;
}>;
