import Home from 'app/components/templates/Home';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function AccueilPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Home />
    </>
  );
}
