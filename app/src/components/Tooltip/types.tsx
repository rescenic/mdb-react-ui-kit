type TooltipProps = {
  className?: string;
  tag?: React.ComponentProps<any>;
  tooltipTag?: React.ComponentProps<any>;
  placement?:
    | 'top'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end'
    | undefined;
  options?: Record<string, unknown>;
  title?: string | React.ReactNode;
  wrapperProps?: Record<string, unknown>;
  wrapperClass?: string;
  [rest: string]: any;
};

export { TooltipProps };
