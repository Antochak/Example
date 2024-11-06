declare module '*.svg' {
  import {SFC, SVGProps} from 'react';
  export const ReactComponent: SFC<SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}
