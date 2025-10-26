
import localFont from 'next/font/local';

export const pixeled = localFont({
  src: '../public/fonts/PixeledEnglishFont.otf',
  variable: '--font-pixeled',
});

export const heinzHeinrich = localFont({
  src: '../public/fonts/HeinzHeinrich-Regular.otf',
  variable: '--font-heinz-heinrich',
});

export const dungeonMode = localFont({
  src: '../public/fonts/dungeon-mode.ttf',
  variable: '--font-dungeon-mode',
});

export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});
