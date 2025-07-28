import { type StaticDiffData } from '../static/export';

declare global {
  interface Window {
    __STATIC_MODE__?: boolean;
    __STATIC_DIFF_DATA__?: StaticDiffData;
  }
}

export {};
