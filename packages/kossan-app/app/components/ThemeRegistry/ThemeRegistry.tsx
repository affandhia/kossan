'use client';

import { PropsWithChildren, useState } from 'react';
import createCache, { Options } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/styles/themes/default';

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
const ThemeRegistry = (props: PropsWithChildren<{ options: Options }>) => {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const innerCache = createCache(options);
    innerCache.compat = true;
    const prevInsert = innerCache.insert;
    let inserted: string[] = [];
    innerCache.insert = (...args) => {
      const serialized = args[1];
      if (innerCache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const innerFlush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache: innerCache, flush: innerFlush };
  });

  useServerInsertedHTML(() => {
    const names = flush();

    if (names.length === 0) {
      return null;
    }

    const styles = names.map((name) => cache.inserted[name]).join('');

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeRegistry;
